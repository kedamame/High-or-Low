// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Records High or Low card game streaks on Base.
contract HighLowLeaderboard {
    event ScoreRecorded(address indexed player, uint256 streak, uint256 timestamp);

    mapping(address => uint256) public bestStreak;
    mapping(address => uint256) public totalGames;

    function recordScore(uint256 streak) external {
        totalGames[msg.sender]++;
        if (streak > bestStreak[msg.sender]) {
            bestStreak[msg.sender] = streak;
        }
        emit ScoreRecorded(msg.sender, streak, block.timestamp);
    }
}
