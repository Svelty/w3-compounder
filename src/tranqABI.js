module.exports = Object.freeze({tranqWBTCABI: [
  {
      "stateMutability": "nonpayable",
      "type": "constructor",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "underlying_"
          },
          {
              "name": "comptroller_",
              "internalType": "contract ComptrollerInterface",
              "type": "address"
          },
          {
              "type": "address",
              "name": "interestRateModel_",
              "internalType": "contract InterestRateModel"
          },
          {
              "internalType": "uint256",
              "name": "initialExchangeRateMantissa_",
              "type": "uint256"
          },
          {
              "type": "string",
              "internalType": "string",
              "name": "name_"
          },
          {
              "type": "string",
              "name": "symbol_",
              "internalType": "string"
          },
          {
              "name": "decimals_",
              "internalType": "uint8",
              "type": "uint8"
          },
          {
              "internalType": "address payable",
              "name": "admin_",
              "type": "address"
          },
          {
              "name": "implementation_",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "bytes",
              "name": "becomeImplementationData",
              "type": "bytes"
          }
      ],
      "payable": false
  },
  {
      "anonymous": false,
      "name": "AccrueInterest",
      "type": "event",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "cashPrior",
              "indexed": false
          },
          {
              "name": "interestAccumulated",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "indexed": false,
              "name": "borrowIndex"
          },
          {
              "indexed": false,
              "type": "uint256",
              "name": "totalBorrows",
              "internalType": "uint256"
          }
      ]
  },
  {
      "anonymous": false,
      "name": "Approval",
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "indexed": true,
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "spender",
              "indexed": true
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "amount"
          }
      ],
      "type": "event"
  },
  {
      "name": "Borrow",
      "type": "event",
      "anonymous": false,
      "inputs": [
          {
              "name": "borrower",
              "type": "address",
              "internalType": "address",
              "indexed": false
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "indexed": false,
              "name": "borrowAmount"
          },
          {
              "internalType": "uint256",
              "indexed": false,
              "name": "accountBorrows",
              "type": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "totalBorrows"
          }
      ]
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "error",
              "type": "uint256",
              "indexed": false
          },
          {
              "internalType": "uint256",
              "indexed": false,
              "type": "uint256",
              "name": "info"
          },
          {
              "internalType": "uint256",
              "name": "detail",
              "indexed": false,
              "type": "uint256"
          }
      ],
      "type": "event",
      "name": "Failure"
  },
  {
      "type": "event",
      "name": "LiquidateBorrow",
      "anonymous": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "liquidator",
              "type": "address",
              "indexed": false
          },
          {
              "name": "borrower",
              "type": "address",
              "internalType": "address",
              "indexed": false
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "repayAmount"
          },
          {
              "name": "tqTokenCollateral",
              "type": "address",
              "internalType": "address",
              "indexed": false
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "type": "uint256",
              "name": "seizeTokens"
          }
      ]
  },
  {
      "name": "Mint",
      "inputs": [
          {
              "indexed": false,
              "name": "minter",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256",
              "name": "mintAmount"
          },
          {
              "indexed": false,
              "name": "mintTokens",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "anonymous": false,
      "type": "event"
  },
  {
      "anonymous": false,
      "name": "NewAdmin",
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "type": "address",
              "name": "oldAdmin"
          },
          {
              "indexed": false,
              "type": "address",
              "name": "newAdmin",
              "internalType": "address"
          }
      ],
      "type": "event"
  },
  {
      "anonymous": false,
      "name": "NewComptroller",
      "type": "event",
      "inputs": [
          {
              "name": "oldComptroller",
              "type": "address",
              "indexed": false,
              "internalType": "contract ComptrollerInterface"
          },
          {
              "name": "newComptroller",
              "internalType": "contract ComptrollerInterface",
              "indexed": false,
              "type": "address"
          }
      ]
  },
  {
      "anonymous": false,
      "type": "event",
      "name": "NewImplementation",
      "inputs": [
          {
              "type": "address",
              "name": "oldImplementation",
              "internalType": "address",
              "indexed": false
          },
          {
              "indexed": false,
              "type": "address",
              "name": "newImplementation",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "event",
      "anonymous": false,
      "name": "NewMarketInterestRateModel",
      "inputs": [
          {
              "name": "oldInterestRateModel",
              "internalType": "contract InterestRateModel",
              "type": "address",
              "indexed": false
          },
          {
              "name": "newInterestRateModel",
              "internalType": "contract InterestRateModel",
              "type": "address",
              "indexed": false
          }
      ]
  },
  {
      "name": "NewPendingAdmin",
      "type": "event",
      "anonymous": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "oldPendingAdmin",
              "type": "address",
              "indexed": false
          },
          {
              "internalType": "address",
              "indexed": false,
              "type": "address",
              "name": "newPendingAdmin"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "uint256",
              "name": "oldProtocolSeizeShareMantissa",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "name": "newProtocolSeizeShareMantissa",
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false
          }
      ],
      "anonymous": false,
      "type": "event",
      "name": "NewProtocolSeizeShare"
  },
  {
      "anonymous": false,
      "name": "NewReserveFactor",
      "type": "event",
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "type": "uint256",
              "name": "oldReserveFactorMantissa"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "newReserveFactorMantissa",
              "type": "uint256"
          }
      ]
  },
  {
      "name": "Redeem",
      "type": "event",
      "inputs": [
          {
              "internalType": "address",
              "indexed": false,
              "name": "redeemer",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "redeemAmount",
              "internalType": "uint256",
              "indexed": false
          },
          {
              "type": "uint256",
              "name": "redeemTokens",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "anonymous": false,
      "type": "event",
      "name": "RepayBorrow",
      "inputs": [
          {
              "internalType": "address",
              "indexed": false,
              "name": "payer",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "indexed": false,
              "name": "borrower"
          },
          {
              "indexed": false,
              "name": "repayAmount",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "accountBorrows",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalBorrows",
              "type": "uint256"
          }
      ]
  },
  {
      "anonymous": false,
      "name": "ReservesAdded",
      "inputs": [
          {
              "internalType": "address",
              "name": "benefactor",
              "type": "address",
              "indexed": false
          },
          {
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256",
              "name": "addAmount"
          },
          {
              "name": "newTotalReserves",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "event"
  },
  {
      "name": "ReservesReduced",
      "type": "event",
      "inputs": [
          {
              "name": "admin",
              "type": "address",
              "internalType": "address",
              "indexed": false
          },
          {
              "internalType": "uint256",
              "name": "reduceAmount",
              "type": "uint256",
              "indexed": false
          },
          {
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256",
              "name": "newTotalReserves"
          }
      ],
      "anonymous": false
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "indexed": true,
              "type": "address",
              "name": "from"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "type": "uint256",
              "name": "amount",
              "internalType": "uint256"
          }
      ],
      "anonymous": false,
      "type": "event",
      "name": "Transfer"
  },
  {
      "stateMutability": "payable",
      "payable": true,
      "type": "fallback"
  },
  {
      "stateMutability": "view",
      "name": "accrualBlockTimestamp",
      "type": "function",
      "payable": false,
      "inputs": [],
      "constant": true,
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "signature": "0xcfa99201"
  },
  {
      "type": "function",
      "inputs": [],
      "name": "admin",
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address payable"
          }
      ],
      "stateMutability": "view",
      "constant": true,
      "payable": false,
      "signature": "0xf851a440"
  },
  {
      "constant": true,
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "name": "borrowIndex",
      "payable": false,
      "inputs": [],
      "signature": "0xaa5af0fd"
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract ComptrollerInterface"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true,
      "inputs": [],
      "name": "comptroller",
      "payable": false,
      "signature": "0x5fe3b567"
  },
  {
      "inputs": [],
      "type": "function",
      "outputs": [
          {
              "type": "uint8",
              "name": "",
              "internalType": "uint8"
          }
      ],
      "stateMutability": "view",
      "name": "decimals",
      "payable": false,
      "constant": true,
      "signature": "0x313ce567"
  },
  {
      "outputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ],
      "constant": true,
      "name": "implementation",
      "payable": false,
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5c60da1b"
  },
  {
      "name": "interestRateModel",
      "type": "function",
      "inputs": [],
      "stateMutability": "view",
      "payable": false,
      "constant": true,
      "outputs": [
          {
              "name": "",
              "internalType": "contract InterestRateModel",
              "type": "address"
          }
      ],
      "signature": "0xf3fdb15a"
  },
  {
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "internalType": "bool",
              "type": "bool"
          }
      ],
      "inputs": [],
      "name": "isTqToken",
      "type": "function",
      "constant": true,
      "signature": "0x427671eb"
  },
  {
      "inputs": [],
      "type": "function",
      "constant": true,
      "payable": false,
      "name": "name",
      "outputs": [
          {
              "name": "",
              "internalType": "string",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "signature": "0x06fdde03"
  },
  {
      "payable": false,
      "name": "pendingAdmin",
      "stateMutability": "view",
      "type": "function",
      "constant": true,
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address payable"
          }
      ],
      "signature": "0x26782247"
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "inputs": [],
      "type": "function",
      "stateMutability": "view",
      "name": "protocolSeizeShareMantissa",
      "constant": true,
      "payable": false,
      "signature": "0x6752e702"
  },
  {
      "payable": false,
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "reserveFactorMantissa",
      "constant": true,
      "inputs": [],
      "signature": "0x173b9904"
  },
  {
      "name": "symbol",
      "payable": false,
      "type": "function",
      "inputs": [],
      "stateMutability": "view",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "internalType": "string",
              "type": "string"
          }
      ],
      "signature": "0x95d89b41"
  },
  {
      "type": "function",
      "constant": true,
      "payable": false,
      "name": "totalBorrows",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [],
      "signature": "0x47bd3718"
  },
  {
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "payable": false,
      "constant": true,
      "type": "function",
      "inputs": [],
      "name": "totalReserves",
      "signature": "0x8f840ddd"
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "inputs": [],
      "type": "function",
      "stateMutability": "view",
      "name": "totalSupply",
      "payable": false,
      "constant": true,
      "signature": "0x18160ddd"
  },
  {
      "constant": true,
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "name": "underlying",
      "inputs": [],
      "payable": false,
      "signature": "0x6f307dc3"
  },
  {
      "payable": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "implementation_",
              "type": "address"
          },
          {
              "name": "allowResign",
              "internalType": "bool",
              "type": "bool"
          },
          {
              "name": "becomeImplementationData",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "name": "_setImplementation",
      "stateMutability": "nonpayable",
      "type": "function",
      "outputs": [],
      "constant": false
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "name": "mint",
      "constant": false,
      "inputs": [
          {
              "type": "uint256",
              "name": "mintAmount",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false,
      "type": "function"
  },
  {
      "payable": false,
      "name": "redeem",
      "constant": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "name": "redeemUnderlying",
      "payable": false,
      "constant": false,
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "inputs": [
          {
              "name": "redeemAmount",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "name": "borrow",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [
          {
              "name": "borrowAmount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable"
  },
  {
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "uint256",
              "name": "repayAmount",
              "internalType": "uint256"
          }
      ],
      "constant": false,
      "name": "repayBorrow",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "payable": false,
      "type": "function"
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false,
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "borrower"
          },
          {
              "type": "uint256",
              "name": "repayAmount",
              "internalType": "uint256"
          }
      ],
      "constant": false,
      "name": "repayBorrowBehalf"
  },
  {
      "constant": false,
      "stateMutability": "nonpayable",
      "payable": false,
      "name": "liquidateBorrow",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "inputs": [
          {
              "name": "borrower",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "tqTokenCollateral",
              "internalType": "contract TqTokenInterface",
              "type": "address"
          }
      ],
      "type": "function"
  },
  {
      "type": "function",
      "name": "transfer",
      "inputs": [
          {
              "type": "address",
              "name": "dst",
              "internalType": "address"
          },
          {
              "type": "uint256",
              "name": "amount",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "type": "bool",
              "name": "",
              "internalType": "bool"
          }
      ]
  },
  {
      "constant": false,
      "payable": false,
      "inputs": [
          {
              "type": "address",
              "name": "src",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "amount",
              "internalType": "uint256"
          }
      ],
      "name": "transferFrom",
      "stateMutability": "nonpayable",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ]
  },
  {
      "name": "approve",
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [
          {
              "type": "bool",
              "name": "",
              "internalType": "bool"
          }
      ],
      "inputs": [
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "type": "function",
      "constant": false
  },
  {
      "name": "allowance",
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "constant": true,
      "payable": false,
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "payable": false,
      "constant": true,
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "name": "balanceOf",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "signature": "0x70a08231"
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "constant": false,
      "type": "function",
      "name": "balanceOfUnderlying",
      "inputs": [
          {
              "type": "address",
              "name": "owner",
              "internalType": "address"
          }
      ],
      "payable": false
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          },
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "name": "getAccountSnapshot",
      "constant": true,
      "stateMutability": "view",
      "payable": false,
      "inputs": [
          {
              "name": "account",
              "internalType": "address",
              "type": "address"
          }
      ]
  },
  {
      "constant": true,
      "payable": false,
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "inputs": [],
      "name": "borrowRatePerTimestamp",
      "stateMutability": "view",
      "signature": "0xcd91801c"
  },
  {
      "type": "function",
      "name": "supplyRatePerTimestamp",
      "payable": false,
      "constant": true,
      "inputs": [],
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view",
      "signature": "0xd3bd2c72"
  },
  {
      "inputs": [],
      "constant": false,
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false,
      "name": "totalBorrowsCurrent",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "account",
              "internalType": "address",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false,
      "name": "borrowBalanceCurrent",
      "constant": false,
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ]
  },
  {
      "payable": false,
      "constant": true,
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "stateMutability": "view",
      "name": "borrowBalanceStored",
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "type": "function"
  },
  {
      "inputs": [],
      "payable": false,
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "name": "exchangeRateCurrent",
      "type": "function",
      "constant": false
  },
  {
      "payable": false,
      "name": "exchangeRateStored",
      "type": "function",
      "constant": true,
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "inputs": [],
      "stateMutability": "view",
      "signature": "0x182df0f5"
  },
  {
      "inputs": [],
      "payable": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getCash",
      "constant": true,
      "signature": "0x3b1d21a2"
  },
  {
      "stateMutability": "nonpayable",
      "constant": false,
      "payable": false,
      "type": "function",
      "name": "accrueInterest",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": []
  },
  {
      "stateMutability": "nonpayable",
      "payable": false,
      "type": "function",
      "constant": false,
      "name": "seize",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [
          {
              "type": "address",
              "name": "liquidator",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "seizeTokens"
          }
      ]
  },
  {
      "name": "sweepToken",
      "constant": false,
      "stateMutability": "nonpayable",
      "outputs": [],
      "inputs": [
          {
              "type": "address",
              "name": "token",
              "internalType": "contract EIP20NonStandardInterface"
          }
      ],
      "type": "function",
      "payable": false
  },
  {
      "stateMutability": "nonpayable",
      "payable": false,
      "constant": false,
      "name": "_setPendingAdmin",
      "type": "function",
      "inputs": [
          {
              "name": "newPendingAdmin",
              "internalType": "address payable",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ]
  },
  {
      "name": "_setComptroller",
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "constant": false,
      "inputs": [
          {
              "name": "newComptroller",
              "type": "address",
              "internalType": "contract ComptrollerInterface"
          }
      ],
      "type": "function"
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "uint256",
              "name": "newReserveFactorMantissa",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "name": "_setReserveFactor"
  },
  {
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [],
      "stateMutability": "nonpayable",
      "name": "_acceptAdmin",
      "payable": false,
      "constant": false
  },
  {
      "name": "_addReserves",
      "constant": false,
      "inputs": [
          {
              "type": "uint256",
              "name": "addAmount",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "payable": false,
      "name": "_reduceReserves",
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "constant": false,
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "reduceAmount"
          }
      ]
  },
  {
      "type": "function",
      "name": "_setInterestRateModel",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "constant": false,
      "payable": false,
      "inputs": [
          {
              "name": "newInterestRateModel",
              "internalType": "contract InterestRateModel",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "name": "_setProtocolSeizeShare",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "constant": false,
      "type": "function",
      "inputs": [
          {
              "type": "uint256",
              "name": "newProtocolSeizeShareMantissa",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "payable": false,
      "outputs": [
          {
              "name": "",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "name": "delegateToImplementation"
  },
  {
      "type": "function",
      "name": "delegateToViewImplementation",
      "payable": false,
      "inputs": [
          {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
          }
      ],
      "stateMutability": "view",
      "constant": true,
      "outputs": [
          {
              "type": "bytes",
              "name": "",
              "internalType": "bytes"
          }
      ]
  }
],
CLAIM_REWARDS_ABI: [
  {
      "type": "constructor",
      "payable": false,
      "inputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "name": "Failure",
      "inputs": [
          {
              "name": "error",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "info",
              "type": "uint256",
              "indexed": false
          },
          {
              "name": "detail",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "type": "event",
      "anonymous": false
  },
  {
      "name": "NewAdmin",
      "type": "event",
      "inputs": [
          {
              "name": "oldAdmin",
              "indexed": false,
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "newAdmin",
              "internalType": "address",
              "type": "address",
              "indexed": false
          }
      ],
      "anonymous": false
  },
  {
      "anonymous": false,
      "type": "event",
      "name": "NewImplementation",
      "inputs": [
          {
              "type": "address",
              "indexed": false,
              "name": "oldImplementation",
              "internalType": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "indexed": false,
              "name": "newImplementation"
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "oldPendingAdmin",
              "indexed": false,
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "indexed": false,
              "name": "newPendingAdmin"
          }
      ],
      "type": "event",
      "name": "NewPendingAdmin",
      "anonymous": false
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "oldPendingImplementation",
              "indexed": false,
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "newPendingImplementation",
              "indexed": false
          }
      ],
      "type": "event",
      "anonymous": false,
      "name": "NewPendingImplementation"
  },
  {
      "payable": true,
      "type": "fallback",
      "stateMutability": "payable"
  },
  {
      "stateMutability": "view",
      "name": "admin",
      "type": "function",
      "constant": true,
      "payable": false,
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "inputs": []
  },
  {
      "payable": false,
      "name": "comptrollerImplementation",
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "constant": true
  },
  {
      "outputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": ""
          }
      ],
      "payable": false,
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "type": "function",
      "stateMutability": "view"
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "type": "function",
      "inputs": [],
      "name": "pendingComptrollerImplementation",
      "constant": true,
      "stateMutability": "view",
      "payable": false
  },
  {
      "type": "function",
      "name": "_setPendingImplementation",
      "constant": false,
      "payable": false,
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "inputs": [
          {
              "name": "newPendingImplementation",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "name": "_acceptImplementation",
      "stateMutability": "nonpayable",
      "constant": false,
      "type": "function",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "inputs": []
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "newPendingAdmin",
              "internalType": "address",
              "type": "address"
          }
      ],
      "payable": false,
      "constant": false,
      "type": "function",
      "name": "_setPendingAdmin"
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "constant": false,
      "type": "function",
      "inputs": [],
      "name": "_acceptAdmin",
      "payable": false,
      "stateMutability": "nonpayable"
  }
],
COMPTROLLER_ABI: [
  {
      "stateMutability": "nonpayable",
      "inputs": [],
      "type": "constructor",
      "payable": false
  },
  {
      "type": "event",
      "anonymous": false,
      "name": "ActionPaused",
      "inputs": [
          {
              "internalType": "string",
              "indexed": false,
              "type": "string",
              "name": "action"
          },
          {
              "name": "pauseState",
              "internalType": "bool",
              "indexed": false,
              "type": "bool"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "indexed": false,
              "internalType": "contract TqToken"
          },
          {
              "type": "string",
              "name": "action",
              "internalType": "string",
              "indexed": false
          },
          {
              "internalType": "bool",
              "indexed": false,
              "type": "bool",
              "name": "pauseState"
          }
      ],
      "anonymous": false,
      "name": "ActionPaused",
      "type": "event"
  },
  {
      "anonymous": false,
      "type": "event",
      "inputs": [
          {
              "type": "address",
              "name": "contributor",
              "internalType": "address",
              "indexed": true
          },
          {
              "internalType": "uint256",
              "indexed": false,
              "name": "newSpeed",
              "type": "uint256"
          }
      ],
      "name": "ContributorTranqSpeedUpdated"
  },
  {
      "type": "event",
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint8",
              "type": "uint8",
              "name": "tokenType"
          },
          {
              "internalType": "contract TqToken",
              "name": "tqToken",
              "type": "address",
              "indexed": true
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "borrower",
              "indexed": true
          },
          {
              "name": "tranqDelta",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "tranqBorrowIndex",
              "internalType": "uint256",
              "indexed": false,
              "type": "uint256"
          }
      ],
      "name": "DistributedBorrowerReward"
  },
  {
      "name": "DistributedSupplierReward",
      "type": "event",
      "inputs": [
          {
              "internalType": "uint8",
              "name": "tokenType",
              "indexed": true,
              "type": "uint8"
          },
          {
              "indexed": true,
              "name": "tqToken",
              "internalType": "contract TqToken",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "borrower",
              "indexed": true
          },
          {
              "name": "tranqDelta",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "tranqBorrowIndex"
          }
      ],
      "anonymous": false
  },
  {
      "name": "Failure",
      "anonymous": false,
      "type": "event",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "error"
          },
          {
              "name": "info",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "detail",
              "indexed": false
          }
      ]
  },
  {
      "type": "event",
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "contract TqToken",
              "indexed": false
          },
          {
              "type": "address",
              "indexed": false,
              "name": "account",
              "internalType": "address"
          }
      ],
      "anonymous": false,
      "name": "MarketEntered"
  },
  {
      "anonymous": false,
      "name": "MarketExited",
      "inputs": [
          {
              "type": "address",
              "internalType": "contract TqToken",
              "name": "tqToken",
              "indexed": false
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "account",
              "indexed": false
          }
      ],
      "type": "event"
  },
  {
      "inputs": [
          {
              "type": "address",
              "indexed": false,
              "name": "tqToken",
              "internalType": "contract TqToken"
          }
      ],
      "type": "event",
      "anonymous": false,
      "name": "MarketListed"
  },
  {
      "anonymous": false,
      "name": "NewBorrowCap",
      "type": "event",
      "inputs": [
          {
              "internalType": "contract TqToken",
              "indexed": true,
              "type": "address",
              "name": "tqToken"
          },
          {
              "internalType": "uint256",
              "indexed": false,
              "name": "newBorrowCap",
              "type": "uint256"
          }
      ]
  },
  {
      "anonymous": false,
      "name": "NewBorrowCapGuardian",
      "type": "event",
      "inputs": [
          {
              "indexed": false,
              "name": "oldBorrowCapGuardian",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "indexed": false,
              "name": "newBorrowCapGuardian"
          }
      ]
  },
  {
      "name": "NewCloseFactor",
      "type": "event",
      "inputs": [
          {
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256",
              "name": "oldCloseFactorMantissa"
          },
          {
              "internalType": "uint256",
              "name": "newCloseFactorMantissa",
              "indexed": false,
              "type": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "anonymous": false,
      "type": "event",
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "contract TqToken",
              "indexed": false
          },
          {
              "name": "oldCollateralFactorMantissa",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "indexed": false,
              "name": "newCollateralFactorMantissa",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "name": "NewCollateralFactor"
  },
  {
      "inputs": [
          {
              "indexed": false,
              "type": "uint256",
              "name": "oldLiquidationIncentiveMantissa",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "indexed": false,
              "name": "newLiquidationIncentiveMantissa",
              "internalType": "uint256"
          }
      ],
      "name": "NewLiquidationIncentive",
      "anonymous": false,
      "type": "event"
  },
  {
      "type": "event",
      "anonymous": false,
      "name": "NewPauseGuardian",
      "inputs": [
          {
              "name": "oldPauseGuardian",
              "internalType": "address",
              "type": "address",
              "indexed": false
          },
          {
              "indexed": false,
              "type": "address",
              "internalType": "address",
              "name": "newPauseGuardian"
          }
      ]
  },
  {
      "anonymous": false,
      "name": "NewPriceOracle",
      "inputs": [
          {
              "internalType": "contract PriceOracle",
              "name": "oldPriceOracle",
              "type": "address",
              "indexed": false
          },
          {
              "name": "newPriceOracle",
              "indexed": false,
              "type": "address",
              "internalType": "contract PriceOracle"
          }
      ],
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "internalType": "uint8",
              "name": "tokenType",
              "indexed": false,
              "type": "uint8"
          },
          {
              "name": "tqToken",
              "indexed": true,
              "type": "address",
              "internalType": "contract TqToken"
          },
          {
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256",
              "name": "newSpeed"
          }
      ],
      "name": "SpeedUpdated",
      "type": "event"
  },
  {
      "type": "event",
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "type": "address",
              "name": "recipient"
          },
          {
              "type": "uint256",
              "name": "amount",
              "internalType": "uint256",
              "indexed": false
          }
      ],
      "name": "TranqGranted",
      "anonymous": false
  },
  {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "_borrowGuardianPaused",
      "payable": false
  },
  {
      "name": "_mintGuardianPaused",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "inputs": [],
      "constant": true,
      "type": "function"
  },
  {
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract TqToken"
          }
      ],
      "stateMutability": "view",
      "name": "accountAssets",
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "payable": false
  },
  {
      "payable": false,
      "inputs": [],
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "admin",
      "type": "function",
      "constant": true
  },
  {
      "name": "allMarkets",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "constant": true,
      "stateMutability": "view",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "contract TqToken",
              "type": "address"
          }
      ],
      "payable": false
  },
  {
      "type": "function",
      "payable": false,
      "inputs": [],
      "name": "borrowCapGuardian",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "stateMutability": "view",
      "payable": false,
      "constant": true,
      "name": "borrowCaps",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ]
  },
  {
      "name": "borrowGuardianPaused",
      "stateMutability": "view",
      "type": "function",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": ""
          }
      ],
      "constant": true
  },
  {
      "constant": true,
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "name": "closeFactorMantissa",
      "inputs": []
  },
  {
      "name": "comptrollerImplementation",
      "inputs": [],
      "stateMutability": "view",
      "constant": true,
      "payable": false,
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "payable": false,
      "inputs": [],
      "type": "function",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "uint224",
              "internalType": "uint224"
          }
      ],
      "stateMutability": "view",
      "name": "initialIndexConstant"
  },
  {
      "name": "isComptroller",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "inputs": [],
      "payable": false,
      "type": "function",
      "stateMutability": "view",
      "constant": true
  },
  {
      "name": "liquidationIncentiveMantissa",
      "inputs": [],
      "payable": false,
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "constant": true,
      "type": "function"
  },
  {
      "stateMutability": "view",
      "type": "function",
      "payable": false,
      "name": "markets",
      "constant": true,
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ],
      "outputs": [
          {
              "internalType": "bool",
              "type": "bool",
              "name": "isListed"
          },
          {
              "internalType": "uint256",
              "name": "collateralFactorMantissa",
              "type": "uint256"
          },
          {
              "type": "bool",
              "internalType": "bool",
              "name": "isTranqed"
          }
      ]
  },
  {
      "constant": true,
      "name": "maxAssets",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "payable": false,
      "inputs": [],
      "stateMutability": "view"
  },
  {
      "payable": false,
      "constant": true,
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "mintGuardianPaused",
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ]
  },
  {
      "outputs": [
          {
              "name": "",
              "internalType": "contract PriceOracle",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "inputs": [],
      "type": "function",
      "name": "oracle",
      "constant": true
  },
  {
      "inputs": [],
      "name": "pauseGuardian",
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "constant": true
  },
  {
      "payable": false,
      "constant": true,
      "type": "function",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "name": "pendingAdmin",
      "inputs": []
  },
  {
      "constant": true,
      "inputs": [],
      "outputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ],
      "type": "function",
      "name": "pendingComptrollerImplementation",
      "stateMutability": "view",
      "payable": false
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "rewardAccrued"
  },
  {
      "name": "rewardBorrowState",
      "inputs": [
          {
              "name": "",
              "internalType": "uint8",
              "type": "uint8"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "type": "uint224",
              "name": "index",
              "internalType": "uint224"
          },
          {
              "internalType": "uint32",
              "type": "uint32",
              "name": "timestamp"
          }
      ],
      "constant": true,
      "payable": false,
      "type": "function",
      "stateMutability": "view"
  },
  {
      "name": "rewardBorrowerIndex",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "constant": true,
      "inputs": [
          {
              "internalType": "uint8",
              "type": "uint8",
              "name": ""
          },
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "function",
      "name": "rewardOne",
      "stateMutability": "view",
      "payable": false,
      "inputs": [],
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "constant": true
  },
  {
      "inputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          },
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "payable": false,
      "name": "rewardSpeeds",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "constant": true,
      "type": "function"
  },
  {
      "name": "rewardSupplierIndex",
      "stateMutability": "view",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "payable": false,
      "inputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          },
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "name": "rewardSupplyState",
      "inputs": [
          {
              "type": "uint8",
              "internalType": "uint8",
              "name": ""
          },
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ],
      "constant": true,
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "internalType": "uint224",
              "name": "index",
              "type": "uint224"
          },
          {
              "type": "uint32",
              "internalType": "uint32",
              "name": "timestamp"
          }
      ],
      "type": "function"
  },
  {
      "constant": true,
      "payable": false,
      "outputs": [
          {
              "type": "uint8",
              "internalType": "uint8",
              "name": ""
          }
      ],
      "stateMutability": "view",
      "inputs": [],
      "type": "function",
      "name": "rewardTranq"
  },
  {
      "constant": true,
      "type": "function",
      "stateMutability": "view",
      "name": "seizeGuardianPaused",
      "payable": false,
      "inputs": [],
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ]
  },
  {
      "constant": true,
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "inputs": [],
      "name": "tranqAddress"
  },
  {
      "inputs": [],
      "constant": true,
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "name": "transferGuardianPaused",
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ]
  },
  {
      "outputs": [
          {
              "internalType": "contract TqToken[]",
              "type": "address[]",
              "name": ""
          }
      ],
      "payable": false,
      "name": "getAssetsIn",
      "stateMutability": "view",
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "constant": true,
      "type": "function"
  },
  {
      "payable": false,
      "constant": true,
      "name": "checkMembership",
      "inputs": [
          {
              "type": "address",
              "name": "account",
              "internalType": "address"
          },
          {
              "internalType": "contract TqToken",
              "name": "tqToken",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "type": "bool",
              "name": "",
              "internalType": "bool"
          }
      ],
      "type": "function",
      "stateMutability": "view"
  },
  {
      "inputs": [
          {
              "type": "address[]",
              "name": "tqTokens",
              "internalType": "address[]"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "constant": false,
      "name": "enterMarkets",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256[]",
              "type": "uint256[]"
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "tqTokenAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "name": "exitMarket",
      "payable": false,
      "constant": false,
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "tqToken"
          },
          {
              "type": "address",
              "name": "minter",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "mintAmount"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "constant": false,
      "type": "function",
      "name": "mintAllowed"
  },
  {
      "outputs": [],
      "constant": false,
      "stateMutability": "nonpayable",
      "payable": false,
      "type": "function",
      "name": "mintVerify",
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "tqToken"
          },
          {
              "name": "minter",
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "actualMintAmount",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "mintTokens",
              "internalType": "uint256"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "constant": false,
      "type": "function",
      "name": "redeemAllowed",
      "inputs": [
          {
              "internalType": "address",
              "name": "tqToken",
              "type": "address"
          },
          {
              "name": "redeemer",
              "internalType": "address",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "payable": false
  },
  {
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
          },
          {
              "name": "redeemAmount",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "redeemTokens",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "outputs": [],
      "constant": false,
      "type": "function",
      "payable": false,
      "name": "redeemVerify"
  },
  {
      "name": "borrowAllowed",
      "inputs": [
          {
              "name": "tqToken",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "borrowAmount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false,
      "type": "function",
      "constant": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "borrower"
          },
          {
              "name": "borrowAmount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable",
      "name": "borrowVerify",
      "type": "function",
      "payable": false,
      "constant": false
  },
  {
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "tqToken",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "payer",
              "internalType": "address",
              "type": "address"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "borrower"
          },
          {
              "internalType": "uint256",
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "repayBorrowAllowed",
      "payable": false
  },
  {
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "payer",
              "type": "address"
          },
          {
              "type": "address",
              "name": "borrower",
              "internalType": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "actualRepayAmount"
          },
          {
              "name": "borrowerIndex",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "payable": false,
      "name": "repayBorrowVerify",
      "outputs": [],
      "constant": false
  },
  {
      "payable": false,
      "constant": false,
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "tqTokenBorrowed"
          },
          {
              "name": "tqTokenCollateral",
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "borrower",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "name": "liquidateBorrowAllowed"
  },
  {
      "type": "function",
      "payable": false,
      "inputs": [
          {
              "name": "tqTokenBorrowed",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "address",
              "name": "tqTokenCollateral",
              "type": "address"
          },
          {
              "name": "liquidator",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "address",
              "name": "borrower",
              "internalType": "address"
          },
          {
              "name": "actualRepayAmount",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "seizeTokens",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "constant": false,
      "name": "liquidateBorrowVerify",
      "stateMutability": "nonpayable"
  },
  {
      "stateMutability": "nonpayable",
      "name": "seizeAllowed",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "constant": false,
      "inputs": [
          {
              "name": "tqTokenCollateral",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "address",
              "name": "tqTokenBorrowed",
              "internalType": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "liquidator"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "seizeTokens"
          }
      ],
      "type": "function",
      "payable": false
  },
  {
      "name": "seizeVerify",
      "constant": false,
      "payable": false,
      "stateMutability": "nonpayable",
      "outputs": [],
      "inputs": [
          {
              "internalType": "address",
              "name": "tqTokenCollateral",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "tqTokenBorrowed",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "liquidator",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "seizeTokens",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function"
  },
  {
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "tqToken",
              "internalType": "address",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "dst"
          },
          {
              "internalType": "uint256",
              "name": "transferTokens",
              "type": "uint256"
          }
      ],
      "type": "function",
      "payable": false,
      "name": "transferAllowed",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "constant": false,
      "name": "transferVerify",
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "tqToken"
          },
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "dst"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "transferTokens"
          }
      ],
      "outputs": [],
      "payable": false
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "getAccountLiquidity",
      "constant": true,
      "payable": false,
      "stateMutability": "view"
  },
  {
      "name": "getHypotheticalAccountLiquidity",
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "tqTokenModify"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "redeemTokens"
          },
          {
              "type": "uint256",
              "name": "borrowAmount",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "constant": true
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "inputs": [
          {
              "internalType": "address",
              "name": "tqTokenBorrowed",
              "type": "address"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "tqTokenCollateral"
          },
          {
              "name": "actualRepayAmount",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "type": "function",
      "payable": false,
      "name": "liquidateCalculateSeizeTokens",
      "constant": true,
      "stateMutability": "view"
  },
  {
      "inputs": [
          {
              "type": "address",
              "name": "newOracle",
              "internalType": "contract PriceOracle"
          }
      ],
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "constant": false,
      "name": "_setPriceOracle",
      "payable": false,
      "stateMutability": "nonpayable"
  },
  {
      "inputs": [
          {
              "name": "newCloseFactorMantissa",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "name": "_setCloseFactor",
      "constant": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "_setCollateralFactor",
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "address",
              "name": "tqToken",
              "internalType": "contract TqToken"
          },
          {
              "internalType": "uint256",
              "name": "newCollateralFactorMantissa",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ]
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "newLiquidationIncentiveMantissa"
          }
      ],
      "stateMutability": "nonpayable",
      "name": "_setLiquidationIncentive",
      "payable": false,
      "constant": false,
      "type": "function"
  },
  {
      "payable": false,
      "type": "function",
      "name": "_supportMarket",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "constant": false,
      "inputs": [
          {
              "type": "address",
              "internalType": "contract TqToken",
              "name": "tqToken"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [],
      "constant": false,
      "inputs": [
          {
              "name": "tqTokens",
              "type": "address[]",
              "internalType": "contract TqToken[]"
          },
          {
              "name": "newBorrowCaps",
              "internalType": "uint256[]",
              "type": "uint256[]"
          }
      ],
      "payable": false,
      "name": "_setMarketBorrowCaps",
      "type": "function"
  },
  {
      "type": "function",
      "constant": false,
      "name": "_setBorrowCapGuardian",
      "payable": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "newBorrowCapGuardian",
              "type": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "payable": false,
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "_setPauseGuardian",
      "inputs": [
          {
              "internalType": "address",
              "name": "newPauseGuardian",
              "type": "address"
          }
      ],
      "constant": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "name": "_setMintPaused",
      "outputs": [
          {
              "type": "bool",
              "internalType": "bool",
              "name": ""
          }
      ],
      "constant": false,
      "inputs": [
          {
              "internalType": "contract TqToken",
              "type": "address",
              "name": "tqToken"
          },
          {
              "name": "state",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "payable": false,
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "name": "_setBorrowPaused",
      "payable": false,
      "constant": false,
      "type": "function",
      "outputs": [
          {
              "type": "bool",
              "name": "",
              "internalType": "bool"
          }
      ],
      "inputs": [
          {
              "name": "tqToken",
              "internalType": "contract TqToken",
              "type": "address"
          },
          {
              "internalType": "bool",
              "type": "bool",
              "name": "state"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "_setTransferPaused",
      "payable": false,
      "inputs": [
          {
              "internalType": "bool",
              "type": "bool",
              "name": "state"
          }
      ],
      "outputs": [
          {
              "name": "",
              "internalType": "bool",
              "type": "bool"
          }
      ],
      "constant": false,
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "_setSeizePaused",
      "inputs": [
          {
              "internalType": "bool",
              "name": "state",
              "type": "bool"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "payable": false,
      "constant": false,
      "stateMutability": "nonpayable"
  },
  {
      "name": "_become",
      "inputs": [
          {
              "internalType": "contract Unitroller",
              "type": "address",
              "name": "unitroller"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [],
      "type": "function",
      "constant": false
  },
  {
      "inputs": [
          {
              "name": "rewardType",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "name": "holder",
              "type": "address",
              "internalType": "address payable"
          }
      ],
      "outputs": [],
      "name": "claimReward",
      "constant": false,
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false
  },
  {
      "outputs": [],
      "constant": false,
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "claimReward",
      "inputs": [
          {
              "internalType": "uint8",
              "type": "uint8",
              "name": "rewardType"
          },
          {
              "name": "holder",
              "type": "address",
              "internalType": "address payable"
          },
          {
              "name": "tqTokens",
              "internalType": "contract TqToken[]",
              "type": "address[]"
          }
      ],
      "payable": false
  },
  {
      "inputs": [
          {
              "name": "rewardType",
              "internalType": "uint8",
              "type": "uint8"
          },
          {
              "name": "holders",
              "type": "address[]",
              "internalType": "address payable[]"
          },
          {
              "name": "tqTokens",
              "internalType": "contract TqToken[]",
              "type": "address[]"
          },
          {
              "name": "borrowers",
              "type": "bool",
              "internalType": "bool"
          },
          {
              "name": "suppliers",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "payable",
      "constant": false,
      "name": "claimReward",
      "payable": true,
      "outputs": [],
      "type": "function"
  },
  {
      "name": "_grantTranq",
      "payable": false,
      "outputs": [],
      "stateMutability": "nonpayable",
      "constant": false,
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "internalType": "address payable",
              "name": "recipient"
          },
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "outputs": [],
      "type": "function",
      "name": "_setRewardSpeed",
      "constant": false,
      "inputs": [
          {
              "name": "rewardType",
              "internalType": "uint8",
              "type": "uint8"
          },
          {
              "name": "tqToken",
              "type": "address",
              "internalType": "contract TqToken"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "rewardSpeed"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false
  },
  {
      "inputs": [],
      "payable": false,
      "name": "getAllMarkets",
      "stateMutability": "view",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "address[]",
              "internalType": "contract TqToken[]"
          }
      ],
      "type": "function"
  },
  {
      "constant": true,
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "inputs": [],
      "name": "getBlockTimestamp",
      "payable": false
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newTranqAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "payable": false,
      "type": "function",
      "outputs": [],
      "stateMutability": "nonpayable",
      "name": "setTranqAddress"
  }
],
TRANQ_STAKING_PROXY_ABI: [
  {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "inputs": []
  },
  {
      "stateMutability": "payable",
      "type": "fallback",
      "payable": true
  },
  {
      "payable": false,
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "inputs": [],
      "name": "admin",
      "constant": true
  },
  {
      "name": "implementation",
      "inputs": [],
      "payable": false,
      "outputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": ""
          }
      ],
      "constant": true,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "type": "function",
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ],
      "name": "pendingAdmin",
      "stateMutability": "view",
      "constant": true,
      "payable": false
  },
  {
      "constant": true,
      "inputs": [],
      "name": "pendingImplementation",
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "type": "function",
      "stateMutability": "view",
      "payable": false
  },
  {
      "payable": false,
      "outputs": [],
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "newAdmin",
              "internalType": "address",
              "type": "address"
          }
      ],
      "name": "setPendingAdmin",
      "type": "function"
  },
  {
      "type": "function",
      "constant": false,
      "outputs": [],
      "inputs": [],
      "payable": false,
      "name": "acceptPendingAdmin",
      "stateMutability": "nonpayable"
  },
  {
      "payable": false,
      "name": "setPendingImplementation",
      "type": "function",
      "outputs": [],
      "constant": false,
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "newImplementation",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "type": "function",
      "constant": false,
      "name": "acceptPendingImplementation",
      "inputs": [],
      "payable": false,
      "outputs": []
  }
],
TRANQ_LOCKED_STAKING_ABI: [
  {
      "payable": false,
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "payable": true,
      "type": "fallback",
      "stateMutability": "payable"
  },
  {
      "name": "accrualBlockTimestamp",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "type": "function",
      "inputs": [],
      "stateMutability": "view",
      "constant": true
  },
  {
      "type": "function",
      "stateMutability": "view",
      "name": "accruedReward",
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "constant": true,
      "payable": false,
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ]
  },
  {
      "inputs": [],
      "name": "admin",
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "payable": false,
      "stateMutability": "view",
      "constant": true,
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "name": "earlyRedeemPenaltyMantissa",
      "inputs": []
  },
  {
      "inputs": [],
      "constant": true,
      "stateMutability": "view",
      "name": "implementation",
      "type": "function",
      "payable": false,
      "outputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ]
  },
  {
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "payable": false,
      "name": "lockDuration",
      "constant": true,
      "type": "function",
      "stateMutability": "view"
  },
  {
      "type": "function",
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "lockedSupplies",
      "payable": false,
      "constant": true,
      "stateMutability": "view",
      "outputs": [
          {
              "name": "stakedTokenAmount",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "unlockTime",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "function",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "constant": true,
      "inputs": [],
      "name": "pendingImplementation",
      "payable": false,
      "stateMutability": "view"
  },
  {
      "stateMutability": "view",
      "constant": true,
      "payable": false,
      "name": "rewardIndex",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "inputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function"
  },
  {
      "constant": true,
      "type": "function",
      "payable": false,
      "inputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "name": "rewardSpeeds",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "constant": true,
      "name": "rewardTokenAddresses",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "type": "function",
      "stateMutability": "view",
      "payable": false
  },
  {
      "constant": true,
      "type": "function",
      "stateMutability": "view",
      "name": "rewardTokenCount",
      "payable": false,
      "inputs": [],
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ]
  },
  {
      "type": "function",
      "inputs": [],
      "name": "slashedTokenAmount",
      "constant": true,
      "payable": false,
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "constant": true,
      "inputs": [],
      "stateMutability": "view",
      "name": "stakedTokenAddress",
      "type": "function",
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ],
      "payable": false
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "supplierRewardIndex",
      "inputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "constant": true,
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "name": "supplyAmount",
      "stateMutability": "view",
      "payable": false,
      "inputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ],
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "name": "totalSupplies",
      "inputs": [],
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "constant": true,
      "stateMutability": "view"
  },
  {
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view",
      "constant": true,
      "name": "unlockedSupplyAmount",
      "inputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ],
      "payable": false
  },
  {
      "payable": false,
      "constant": false,
      "type": "function",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amount"
          }
      ],
      "name": "deposit",
      "stateMutability": "nonpayable",
      "outputs": []
  },
  {
      "payable": false,
      "type": "function",
      "name": "redeem",
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "constant": false,
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "constant": false,
      "stateMutability": "nonpayable",
      "name": "redeemEarly",
      "inputs": [
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "payable": false,
      "type": "function"
  },
  {
      "constant": false,
      "type": "function",
      "payable": false,
      "inputs": [],
      "name": "claimRewards",
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "user"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "rewardToken"
          }
      ],
      "type": "function",
      "payable": false,
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "name": "getClaimableRewards",
      "constant": true
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "type": "tuple[]",
              "components": [
                  {
                      "name": "stakedTokenAmount",
                      "type": "uint256",
                      "internalType": "uint256"
                  },
                  {
                      "name": "unlockTime",
                      "internalType": "uint256",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct TranquilLockedStakingStorage.LockedSupply[]",
              "name": ""
          }
      ],
      "stateMutability": "view",
      "constant": true,
      "type": "function",
      "payable": false,
      "name": "getLockedSupplies"
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "payable": false,
      "name": "getUnlockedBalance",
      "inputs": [
          {
              "type": "address",
              "name": "user",
              "internalType": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
  },
  {
      "name": "getLockedBalance",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "payable": false,
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "name": "user",
              "internalType": "address"
          }
      ],
      "constant": true,
      "stateMutability": "view"
  },
  {
      "outputs": [],
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "internalType": "uint256",
              "name": "newRewardTokenCount",
              "type": "uint256"
          }
      ],
      "payable": false,
      "name": "setRewardTokenCount",
      "constant": false,
      "type": "function"
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "setLockDuration",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "newLockDuration"
          }
      ],
      "outputs": [],
      "payable": false,
      "constant": false
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "rewardToken"
          },
          {
              "name": "speed",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "payable": false,
      "name": "setRewardSpeed",
      "constant": false,
      "type": "function",
      "outputs": []
  },
  {
      "constant": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "type": "uint256",
              "name": "rewardToken",
              "internalType": "uint256"
          },
          {
              "name": "rewardTokenAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "payable": false,
      "outputs": [],
      "name": "setRewardTokenAddress"
  },
  {
      "payable": false,
      "constant": false,
      "inputs": [
          {
              "type": "address",
              "name": "newStakedTokenAddress",
              "internalType": "address"
          }
      ],
      "name": "setStakedTokenAddress",
      "outputs": [],
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "name": "setEarlyRedeemPenalty",
      "payable": false,
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "constant": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "newEarlyRedeemPenaltyMantissa",
              "type": "uint256"
          }
      ]
  },
  {
      "outputs": [],
      "name": "becomeImplementation",
      "constant": false,
      "inputs": [
          {
              "internalType": "contract TranquilStakingProxy",
              "name": "proxy",
              "type": "address"
          }
      ],
      "type": "function",
      "payable": false,
      "stateMutability": "nonpayable"
  },
  {
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amount"
          }
      ],
      "outputs": [],
      "constant": false,
      "name": "withdrawSlashedTokens",
      "payable": false
  },
  {
      "name": "emergencyWithdraw",
      "payable": false,
      "outputs": [],
      "constant": false,
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
          },
          {
              "name": "amount",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "inputs": [
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "type": "function",
      "name": "emergencyWithdrawNative",
      "stateMutability": "nonpayable",
      "payable": false,
      "constant": false
  }
]}) 