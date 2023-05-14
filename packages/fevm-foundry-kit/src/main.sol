// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import { MedusaClient, IEncryptionClient, IEncryptionOracle as IOracle, Ciphertext, ReencryptedCipher, G1Point } from "@medusa/MedusaClient.sol";

/// @notice Register researchers and dataproviders, receive payment for registration and provide data
/// @author Yonathan Cruz (https://github.com/yonathanavila/)
contract EHR is Ownable, ReentrancyGuard, MedusaClient {
    /// @notice Pause the contract
    bool public paused;
    /// @notice Amount of querys
    uint256 public queryCounter;
    /// @notice Fee to register new queries
    uint256 public researcherFee = 0.1 ether;
    /// @notice Query structure needed to save researcher querys
    struct Query {
        address researcher;
        uint256 cipherId;
        uint256 price;
    }
    /// @notice Responses structure provided to researchers
    struct QueryResponses {
        address dataprovider;
        uint256 queryId;
        uint256 requestedId;
    }
    /// @notice Querys allocated in each `queryCounter`
    mapping(uint256 => Query) public queries;
    /// @notice Querys reponses to each researcher
    mapping(uint256 => QueryResponses[]) public queryResponses;
    /// @notice Data requested notify
    event ResponseProvided(
        address indexed dataprovided,
        uint256 indexed requestId
    );
    /// @notice Notify each query created
    event NewQueryCreated(
        address indexed researcher,
        Ciphertext indexed queryCid,
        uint256 indexed cipher,
        uint256 price
    );
    /// @notice emits an event when the oracle respond
    event ListingDecryption(
        uint256 indexed requestId,
        ReencryptedCipher reencryptedCipher
    );
    /// @notice Withdrawals
    event Withdrawal(address indexed recipient, uint256 amount);
    error InsufficentFunds();
    error CallbackNotAuthorized();

    // initialize the medusa oracle
    constructor(IOracle _oracle) MedusaClient(_oracle) {}

    /// @notice Allows owner pause the contract
    function setPause() external onlyOwner {
        paused = !paused;
    }

    /// @notice Create new queries
    /// @dev Submits a ciphertext to the oracle, stores a listing, and emits an event
    /// @return cipherId The id of the ciphertext associated with the new listing
    function createNewQuery(
        Ciphertext calldata _queryCid,
        uint256 _price
    ) public payable nonReentrant returns (uint256) {
        require(!paused, "EHR: Contract is paused");
        require(msg.value > 0, "EHR: Not enough msg.value");
        require(msg.value >= researcherFee, "EHR: Incorrect balance sent");
        address researcher = _msgSender();
        uint256 cipherId = oracle.submitCiphertext{ value: msg.value }(
            _queryCid,
            researcher
        );
        queries[queryCounter] = Query(researcher, cipherId, _price);
        unchecked {
            ++queryCounter;
        }
        emit NewQueryCreated(researcher, _queryCid, cipherId, _price);
        return cipherId;
    }

    /// @notice Data provider respond to the query requested by the researcher
    /// @dev Buyer pays the price for the listing, which can be withdrawn by the seller later; emits an event
    /// @return requestId The id of the reencryption request associated with the purchase
    function respondToQuery(
        uint256 _queryId,
        G1Point calldata buyerPublicKey
    ) public payable returns (uint256) {
        uint256 price = queries[_queryId].price;
        if (msg.value < price) {
            revert InsufficentFunds();
        }
        uint256 requestId = oracle.requestReencryption{
            value: msg.value - price
        }(queries[_queryId].cipherId, buyerPublicKey);
        address dataprovider = _msgSender();
        queryResponses[_queryId].push(
            QueryResponses(dataprovider, _queryId, requestId)
        );
        emit ResponseProvided(dataprovider, requestId);
        return requestId;
    }

    /// @notice Allows owner to change the researcherFee
    function setResearcherFee(uint256 _newValue) external onlyOwner {
        require(_newValue > 0, "EHR: Researcher Fee cannot be zero");
        researcherFee = _newValue;
    }

    /// @notice Allow owner withdraw founds
    /// @dev (Not to much decentralized, it's a emergency withdraw) probably be replaced in the future
    function withdraw(
        uint256 amount,
        address to
    ) public nonReentrant onlyOwner {
        require(amount > 0, "EHR: Amount must be greater than 0");
        require(to != address(0), "EHR: Invalid recipient address");

        bool success = payable(to).send(amount);
        require(success, "EHR: Failed to transfer tokens");

        emit Withdrawal(to, amount);
    }

    /// @notice Called by the Oracle when have the ciphertext decrypted
    function processOracleResult(
        uint256 requestId,
        ReencryptedCipher memory cipher
    ) internal override {
        emit ListingDecryption(requestId, cipher);
    }

    /// @notice Convenience function to get the public key of the oracle
    /// @dev This is the public key that sellers should use to encrypt their listing ciphertext
    /// @dev Note: This feels like a nice abstraction, but it's not strictly necessary
    function publicKey() external view returns (G1Point memory) {
        return oracle.distributedKey();
    }
}
