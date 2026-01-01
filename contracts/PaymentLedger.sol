// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
 * @title PaymentLedger
 * @dev Records basic payment transactions on-chain
 */
contract PaymentLedger {

    struct Payment {
        address from;
        uint256 amount;
        uint256 timestamp;
    }

    Payment[] public payments;

    event PaymentRecorded(address indexed from, uint256 amount, uint256 timestamp);

    function recordPayment() external payable {
        require(msg.value > 0, "Payment must be greater than zero");

        payments.push(
            Payment({
                from: msg.sender,
                amount: msg.value,
                timestamp: block.timestamp
            })
        );

        emit PaymentRecorded(msg.sender, msg.value, block.timestamp);
    }

    function getPaymentsCount() external view returns (uint256) {
        return payments.length;
    }
}
