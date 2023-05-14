// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

import { ReentrancyGuard } from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

/// @notice Register researchers and dataproviders, receive payment for registration and provide data
/// @author Yonathan Cruz (https://github.com/yonathanavila/)
contract EHR is Ownable, ReentrancyGuard {
    /// @notice Pause the contract
    bool public paused;
    /// @notice Data counter
    uint256 public dataCounter;
    /// @notice Fee to register as researcher
    uint256 public researcherFee = 0.1 ether;
    /// @notice Fee to register as dataprovider
    uint256 public dataproviderFee = 0.1 ether;
    /// @notice Identifier of Researchers
    mapping(address => bytes32) public researchers;
    /// @notice Identifier of Dataproviders
    mapping(address => bytes32) public dataproviders;
    /// @notice Register new data
    mapping(uint256 => bytes32) public newData;
    /// @notice Requires that the data provider was the only allow one to register new data
    modifier onlyDataProvider(bytes32 _identifier) {
        require(_identifier != bytes32(0), "EHR: Identifier not be empty");
        address dataprovider = _msgSender();
        require(
            dataproviders[dataprovider] == _identifier,
            "EHR: only dataprovider can register"
        );
        _;
    }
    /// @notice New Data has registered
    event NewDataRegistered(
        address indexed dataprovider,
        bytes32 dataproviderId,
        bytes32 newData,
        uint256 allocationData
    );
    /// @notice Researcher has registered
    event ResearcherRegistered(address indexed researcher, bytes32 identifier);
    /// @notice Dataprovider has registered
    event DataproviderRegistered(
        address indexed researcher,
        bytes32 identifier
    );
    /// @notice Withdrawals
    event Withdrawal(address indexed recipient, uint256 amount);


    struct Query {
        address researcher;
        string queryCid;
        string scriptCid;
        uint nRecordsRequested;
    }
    struct QueryResponses {
        address patient;
        string dataProjectionCid;
    }
    mapping(uint256 => Query) public queries;
    mapping(uint256 => QueryResponses[]) public queryResponses;
    uint256 public queryCounter;

    event NewQueryCreated (
        address indexed researcher,
        string queryCid,
        string scriptCid,
        uint nRecordsRequested
    );
    event ResponseProvided (
        uint256 queryId,
        string dataProjectionCid
    );

    function createNewQuery(string memory _queryCid, string memory _scriptCid, uint _nRecordsRequested) external payable {
        require(!paused, "EHR: Contract is paused");
        require(msg.value > 0, "EHR: Not enough msg.value");
        require(msg.value > researcherFee, "EHR: Incorrect balance sent");
        require(keccak256(bytes(_queryCid)) == keccak256(""), "EHR: Query CID must not be empty");
        require(keccak256(bytes(_scriptCid)) == keccak256(""), "EHR: Script CID must not be empty");
        require(_nRecordsRequested > 0, "EHR: Number of records requested must be greater than 0");

        address researcher = _msgSender();
        Query memory newQuery = Query(researcher, _queryCid, _scriptCid, _nRecordsRequested);

        uint256 queryId = queryCounter;
        queryCounter++;
        queries[queryId] = newQuery;

        emit NewQueryCreated(researcher, _queryCid, _scriptCid, _nRecordsRequested);
    }

    function respondToQuery(uint256 _queryId, string memory _dataProjectionCid) external {
        require(!paused, "EHR: Contract is paused");
        require(keccak256(bytes(_dataProjectionCid)) == keccak256(""), "EHR: Data projection CID must not be empty");

        QueryResponses memory newQueryResponse = QueryResponses(_msgSender(), _dataProjectionCid);
        queryResponses[_queryId].push(newQueryResponse);

        emit ResponseProvided(_queryId, _dataProjectionCid);
    }


    /// @notice Allows to anyone else can register as Researcher only need to pay the fee
    function RegisterResearcher(
        bytes32 _identifier
    ) public payable nonReentrant {
        require(!paused, "EHR: Contract is paused");
        require(msg.value > 0, "EHR: Not enough msg.value");
        require(msg.value > researcherFee, "EHR: Incorrect balance sent");
        require(_identifier != bytes32(0), "EHR: Identifier not be empty");
        address researcher = _msgSender();
        // Save researcher identifier
        researchers[researcher] = _identifier;
        emit ResearcherRegistered(researcher, _identifier);
    }

    /// @notice Allows owner pause the contract
    function setPause() external onlyOwner {
        paused = !paused;
    }

    /// @notice Allows owner to change the researcherFee
    function setResearcherFee(uint256 _newValue) external onlyOwner {
        require(_newValue > 0, "EHR: Researcher Fee cannot be zero");
        researcherFee = _newValue;
    }

    /// @notice Allows to anyone else can register as Data provider only need to pay the fee
    function RegisterDataProvider(
        bytes32 _identifier
    ) public payable nonReentrant {
        require(!paused, "EHR: Contract is paused");
        require(msg.value > 0, "EHR: Not enough msg.value");
        require(msg.value > researcherFee, "EHR: Incorrect balance sent");
        require(_identifier != bytes32(0), "EHR: Identifier not be empty");
        address dataprovider = _msgSender();
        dataproviders[dataprovider] = _identifier;
        emit DataproviderRegistered(dataprovider, _identifier);
    }

    /// @notice Allows owner to change the dataprovierFee
    function setDataproviderFee(uint256 _newValue) external onlyOwner {
        require(_newValue > 0, "EHR: Dataprovider Fee cannot be zero");
        dataproviderFee = _newValue;
    }

    /// @notice Allows to the dataprovider register new data
    function RegisterData(
        bytes32 _newData,
        bytes32 _identifier
    ) public nonReentrant onlyDataProvider(_identifier) {
        require(_newData != bytes32(0), "EHR: Data must not be empty");
        address dataprovider = _msgSender();
        newData[dataCounter] = _newData;
        unchecked {
            ++dataCounter;
        }
        emit NewDataRegistered(
            dataprovider,
            _identifier,
            _newData,
            dataCounter
        );
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
}