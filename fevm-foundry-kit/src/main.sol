// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

import { ReentrancyGuard } from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract EHR is Ownable, ReentrancyGuard {
    /// @notice Pause the contract
    bool public paused;
    /// @notice Fee to register as researcher
    uint256 public researcherFee = 0.1 ether;
    /// @notice Identifyer of researcher
    mapping(address => bytes32) public researchers;
    /// @notice Researcher has registered
    event ApplicantRegistered(address indexed researcher, bytes32 identifier);

    /// @notice Allows to anyone else can register as Researcher only need to pay the fee
    function RegisterResearcher(
        bytes32 _identifier
    ) public payable nonReentrant {
        require(!paused, "EHR: Contract is paused");
        require(msg.value > 0, "EHR: Not enough msg.value");
        require(msg.value > researcherFee, "EHR: Incorrect balance sent");
        address researcher = _msgSender();
        // Save researcher identifier
        researchers[researcher] = _identifier;
        emit ApplicantRegistered(researcher, _identifier);
    }

    /// @notice Allows owner pause the contract
    function setPause() external onlyOwner {
        paused = !paused;
    }

    /// @notice Allows owner change the researcherFee
    function setResearcherFee(uint256 _newValue) external onlyOwner {
        researcherFee = _newValue;
    }
}
