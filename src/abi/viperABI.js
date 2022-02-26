module.exports = Object.freeze({
  MASTER_BREEDER_ABI: [
    {
        "inputs": [
            {
                "type": "address",
                "name": "_govToken",
                "internalType": "contract GovernanceToken"
            },
            {
                "name": "_devaddr",
                "internalType": "address",
                "type": "address"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "_liquidityaddr"
            },
            {
                "name": "_comfundaddr",
                "type": "address",
                "internalType": "address"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "_founderaddr"
            },
            {
                "name": "_rewardPerBlock",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_startBlock"
            },
            {
                "name": "_halvingAfterBlock",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "name": "_userDepFee",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_devDepFee"
            },
            {
                "name": "_rewardMultiplier",
                "internalType": "uint256[]",
                "type": "uint256[]"
            },
            {
                "name": "_blockDeltaStartStage",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "_blockDeltaEndStage",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "type": "uint256[]",
                "internalType": "uint256[]",
                "name": "_userFeeStage"
            },
            {
                "internalType": "uint256[]",
                "type": "uint256[]",
                "name": "_devFeeStage"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "name": "user",
                "internalType": "address",
                "type": "address",
                "indexed": true
            },
            {
                "name": "pid",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "name": "amount",
                "indexed": false,
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "event",
        "name": "Deposit"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "indexed": true,
                "type": "address"
            },
            {
                "name": "pid",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "type": "event",
        "name": "EmergencyWithdraw"
    },
    {
        "anonymous": false,
        "type": "event",
        "inputs": [
            {
                "type": "address",
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner"
            },
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address",
                "indexed": true
            }
        ],
        "name": "OwnershipTransferred"
    },
    {
        "anonymous": false,
        "type": "event",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "indexed": true,
                "name": "pid"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lockAmount",
                "indexed": false,
                "type": "uint256"
            }
        ],
        "name": "SendGovernanceTokenReward"
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdraw",
        "inputs": [
            {
                "name": "user",
                "internalType": "address",
                "type": "address",
                "indexed": true
            },
            {
                "name": "pid",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256",
                "indexed": false
            }
        ]
    },
    {
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "name": "FINISH_BONUS_AT_BLOCK"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "HALVING_AT_BLOCK"
    },
    {
        "name": "PERCENT_FOR_COM",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "inputs": []
    },
    {
        "name": "PERCENT_FOR_DEV",
        "type": "function",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "name": "PERCENT_FOR_FOUNDERS",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "inputs": []
    },
    {
        "name": "PERCENT_FOR_LP",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ],
        "type": "function",
        "inputs": [],
        "stateMutability": "view"
    },
    {
        "name": "PERCENT_LOCK_BONUS_REWARD",
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "REWARD_MULTIPLIER",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "name": "REWARD_PER_BLOCK",
        "inputs": [],
        "type": "function",
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
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "name": "START_BLOCK",
        "inputs": []
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_toAdd",
                "type": "address"
            }
        ],
        "type": "function",
        "outputs": [],
        "name": "addAuthorized",
        "stateMutability": "nonpayable"
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "type": "function",
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "authorized",
        "stateMutability": "view"
    },
    {
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "blockDeltaEndStage",
        "type": "function",
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
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "blockDeltaStartStage",
        "type": "function",
        "stateMutability": "view"
    },
    {
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": ""
            }
        ],
        "name": "comfundaddr",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "view",
        "type": "function",
        "inputs": [],
        "name": "devDepFee",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ]
    },
    {
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "devFeeStage",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "devaddr",
        "inputs": [],
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "stateMutability": "view",
        "inputs": [],
        "type": "function",
        "name": "founderaddr",
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "name": "govToken",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "internalType": "contract GovernanceToken",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "name": "liquidityaddr",
        "type": "function",
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view",
        "inputs": []
    },
    {
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": ""
            }
        ],
        "name": "owner",
        "stateMutability": "view"
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "contract IERC20",
                "name": ""
            }
        ],
        "name": "poolExistence",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "poolId1"
    },
    {
        "stateMutability": "view",
        "name": "poolInfo",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "outputs": [
            {
                "name": "lpToken",
                "internalType": "contract IERC20",
                "type": "address"
            },
            {
                "name": "allocPoint",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "lastRewardBlock"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "accGovTokenPerShare"
            }
        ]
    },
    {
        "name": "removeAuthorized",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "name": "_toRemove",
                "type": "address"
            }
        ],
        "outputs": []
    },
    {
        "name": "renounceOwnership",
        "outputs": [],
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "name": "totalAllocPoint",
        "stateMutability": "view",
        "type": "function",
        "inputs": [],
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
        "type": "function",
        "outputs": [],
        "name": "transferOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ]
    },
    {
        "name": "usdOracle",
        "inputs": [],
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "userDepFee",
        "type": "function",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
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
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "userFeeStage",
        "type": "function",
        "stateMutability": "view"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "globalAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "totalReferals"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "globalRefAmount"
            }
        ],
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "name": "userGlobalInfo"
    },
    {
        "stateMutability": "view",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            },
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "userInfo",
        "type": "function",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "amount"
            },
            {
                "name": "rewardDebt",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "rewardDebtAtBlock"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "lastWithdrawBlock"
            },
            {
                "name": "firstDepositBlock",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "blockdelta",
                "internalType": "uint256"
            },
            {
                "name": "lastDepositBlock",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "name": "poolLength",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_allocPoint",
                "type": "uint256"
            },
            {
                "type": "address",
                "internalType": "contract IERC20",
                "name": "_lpToken"
            },
            {
                "type": "bool",
                "name": "_withUpdate",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "add"
    },
    {
        "name": "set",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            },
            {
                "name": "_allocPoint",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_withUpdate",
                "type": "bool"
            }
        ],
        "type": "function",
        "outputs": []
    },
    {
        "name": "massUpdatePools",
        "stateMutability": "nonpayable",
        "inputs": [],
        "type": "function",
        "outputs": []
    },
    {
        "name": "updatePool",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            }
        ],
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "getMultiplier",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "_from",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "_to",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "_from",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "_to",
                "internalType": "uint256"
            },
            {
                "name": "_allocPoint",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "getPoolReward",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "forDev"
            },
            {
                "internalType": "uint256",
                "name": "forFarmer",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "forLP"
            },
            {
                "internalType": "uint256",
                "name": "forCom",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "name": "forFounders",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "_user"
            }
        ],
        "name": "pendingReward",
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ]
    },
    {
        "stateMutability": "nonpayable",
        "name": "claimRewards",
        "type": "function",
        "outputs": [],
        "inputs": [
            {
                "name": "_pids",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ]
    },
    {
        "name": "claimReward",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_pid",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "name": "getGlobalAmount",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "inputs": [
            {
                "name": "_user",
                "internalType": "address",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "getGlobalRefAmount",
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "_user"
            }
        ]
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "getTotalRefs",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "type": "function"
    },
    {
        "name": "getRefValueOf",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "_user",
                "type": "address",
                "internalType": "address"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "_user2"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "type": "function"
    },
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_pid"
            },
            {
                "name": "_amount",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "_ref",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "name": "deposit",
        "type": "function"
    },
    {
        "stateMutability": "nonpayable",
        "type": "function",
        "outputs": [],
        "inputs": [
            {
                "name": "_pid",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_amount",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "_ref"
            }
        ],
        "name": "withdraw"
    },
    {
        "stateMutability": "nonpayable",
        "outputs": [],
        "type": "function",
        "name": "emergencyWithdraw",
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "_pid"
            }
        ]
    },
    {
        "name": "dev",
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "_devaddr",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "bonusFinishUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_newFinish",
                "internalType": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "name": "halvingUpdate",
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256[]",
                "internalType": "uint256[]",
                "name": "_newHalving"
            }
        ]
    },
    {
        "type": "function",
        "outputs": [],
        "name": "lpUpdate",
        "inputs": [
            {
                "name": "_newLP",
                "internalType": "address",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "name": "comUpdate",
        "type": "function",
        "inputs": [
            {
                "internalType": "address",
                "name": "_newCom",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "outputs": [],
        "type": "function",
        "name": "founderUpdate",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "name": "_newFounder",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "rewardUpdate",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_newReward",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "outputs": [],
        "type": "function",
        "inputs": [
            {
                "name": "_newMulReward",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "name": "rewardMulUpdate",
        "stateMutability": "nonpayable"
    },
    {
        "inputs": [
            {
                "name": "_newlock",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "outputs": [],
        "name": "lockUpdate",
        "stateMutability": "nonpayable"
    },
    {
        "name": "lockdevUpdate",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_newdevlock",
                "type": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "inputs": [
            {
                "type": "uint256",
                "name": "_newlplock",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "name": "locklpUpdate",
        "type": "function",
        "outputs": []
    },
    {
        "stateMutability": "nonpayable",
        "name": "lockcomUpdate",
        "type": "function",
        "outputs": [],
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "_newcomlock"
            }
        ]
    },
    {
        "type": "function",
        "name": "lockfounderUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_newfounderlock"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "uint256",
                "name": "_newstarblock",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "name": "starblockUpdate"
    },
    {
        "stateMutability": "view",
        "type": "function",
        "name": "getNewRewardPerBlock",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pid1",
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
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "userDelta"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "name": "_pid",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "_user",
                "internalType": "address",
                "type": "address"
            },
            {
                "type": "uint256",
                "name": "_block",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "reviseWithdraw"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            },
            {
                "type": "address",
                "name": "_user",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_block"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "reviseDeposit"
    },
    {
        "inputs": [
            {
                "name": "_blockStarts",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "setStageStarts"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "type": "uint256[]",
                "name": "_blockEnds"
            }
        ],
        "name": "setStageEnds",
        "type": "function",
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "type": "uint256[]",
                "internalType": "uint256[]",
                "name": "_userFees"
            }
        ],
        "name": "setUserFeeStage",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "stateMutability": "nonpayable",
        "type": "function",
        "inputs": [
            {
                "internalType": "uint256[]",
                "type": "uint256[]",
                "name": "_devFees"
            }
        ],
        "name": "setDevFeeStage",
        "outputs": []
    },
    {
        "outputs": [],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_devDepFees",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "name": "setDevDepFee"
    },
    {
        "name": "setUserDepFee",
        "type": "function",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_usrDepFees",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "_newOwner"
            }
        ],
        "name": "reclaimTokenOwnership"
    }
],
VIPER_ABI: [
  {
      "stateMutability": "nonpayable",
      "type": "constructor",
      "inputs": [
          {
              "name": "_name",
              "type": "string",
              "internalType": "string"
          },
          {
              "type": "string",
              "name": "_symbol",
              "internalType": "string"
          },
          {
              "name": "cap_",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "uint256",
              "name": "_manualMintLimit",
              "internalType": "uint256"
          },
          {
              "name": "_lockFromBlock",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "_lockToBlock"
          }
      ]
  },
  {
      "anonymous": false,
      "name": "Approval",
      "type": "event",
      "inputs": [
          {
              "type": "address",
              "indexed": true,
              "name": "owner",
              "internalType": "address"
          },
          {
              "name": "spender",
              "internalType": "address",
              "indexed": true,
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "value"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "address",
              "indexed": true,
              "name": "delegator",
              "internalType": "address"
          },
          {
              "name": "fromDelegate",
              "internalType": "address",
              "indexed": true,
              "type": "address"
          },
          {
              "name": "toDelegate",
              "type": "address",
              "internalType": "address",
              "indexed": true
          }
      ],
      "anonymous": false,
      "name": "DelegateChanged",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "delegate",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "previousBalance",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "newBalance",
              "indexed": false
          }
      ],
      "name": "DelegateVotesChanged",
      "type": "event"
  },
  {
      "name": "Lock",
      "anonymous": false,
      "inputs": [
          {
              "type": "address",
              "name": "to",
              "internalType": "address",
              "indexed": true
          },
          {
              "type": "uint256",
              "name": "value",
              "internalType": "uint256",
              "indexed": false
          }
      ],
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "name": "previousOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "type": "address",
              "name": "newOwner",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "name": "Transfer",
      "type": "event",
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "from",
              "indexed": true
          },
          {
              "type": "address",
              "indexed": true,
              "internalType": "address",
              "name": "to"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "value",
              "indexed": false
          }
      ]
  },
  {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "type": "bytes32",
              "name": "",
              "internalType": "bytes32"
          }
      ],
      "inputs": [],
      "name": "DELEGATION_TYPEHASH"
  },
  {
      "outputs": [
          {
              "name": "",
              "internalType": "bytes32",
              "type": "bytes32"
          }
      ],
      "name": "DOMAIN_TYPEHASH",
      "inputs": [],
      "type": "function",
      "stateMutability": "view"
  },
  {
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "_toAdd"
          }
      ],
      "name": "addAuthorized",
      "stateMutability": "nonpayable",
      "type": "function",
      "outputs": []
  },
  {
      "type": "function",
      "name": "allowance",
      "stateMutability": "view",
      "inputs": [
          {
              "name": "owner",
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "address",
              "name": "spender",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ]
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "name": "approve",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "spender"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ]
  },
  {
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "name": "authorized",
      "stateMutability": "view",
      "type": "function",
      "inputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "account"
          }
      ],
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "balanceOf",
      "type": "function",
      "stateMutability": "view"
  },
  {
      "type": "function",
      "outputs": [
          {
              "name": "fromBlock",
              "type": "uint32",
              "internalType": "uint32"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "votes"
          }
      ],
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "type": "uint32",
              "internalType": "uint32",
              "name": ""
          }
      ],
      "stateMutability": "view",
      "name": "checkpoints"
  },
  {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "name": "decimals",
      "inputs": []
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "type": "bool",
              "internalType": "bool",
              "name": ""
          }
      ],
      "type": "function",
      "name": "decreaseAllowance",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "spender"
          },
          {
              "name": "subtractedValue",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "spender"
          },
          {
              "name": "addedValue",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "increaseAllowance"
  },
  {
      "type": "function",
      "inputs": [],
      "name": "lockFromBlock",
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
      "name": "lockToBlock",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "inputs": []
  },
  {
      "name": "manualMintLimit",
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "stateMutability": "view",
      "inputs": []
  },
  {
      "type": "function",
      "inputs": [],
      "name": "manualMinted",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ]
  },
  {
      "inputs": [],
      "outputs": [
          {
              "type": "string",
              "internalType": "string",
              "name": ""
          }
      ],
      "type": "function",
      "name": "name",
      "stateMutability": "view"
  },
  {
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "name": "nonces",
      "type": "function",
      "stateMutability": "view",
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "function",
      "name": "numCheckpoints",
      "stateMutability": "view",
      "inputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint32",
              "internalType": "uint32"
          }
      ]
  },
  {
      "stateMutability": "view",
      "type": "function",
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": ""
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "removeAuthorized",
      "type": "function",
      "inputs": [
          {
              "name": "_toRemove",
              "internalType": "address",
              "type": "address"
          }
      ]
  },
  {
      "name": "renounceOwnership",
      "stateMutability": "nonpayable",
      "outputs": [],
      "type": "function",
      "inputs": []
  },
  {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "type": "string",
              "name": "",
              "internalType": "string"
          }
      ],
      "name": "symbol",
      "inputs": []
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "type": "function",
      "stateMutability": "view",
      "name": "totalSupply",
      "inputs": []
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "name": "transfer",
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "name": "recipient",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amount"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "name": "transferFrom",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "recipient"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amount"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "outputs": [],
      "inputs": [
          {
              "type": "address",
              "name": "newOwner",
              "internalType": "address"
          }
      ],
      "type": "function",
      "name": "transferOwnership",
      "stateMutability": "nonpayable"
  },
  {
      "name": "cap",
      "type": "function",
      "stateMutability": "view",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "_newCap"
          }
      ],
      "outputs": [],
      "name": "capUpdate"
  },
  {
      "outputs": [],
      "stateMutability": "nonpayable",
      "name": "lockFromUpdate",
      "type": "function",
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "_newLockFrom"
          }
      ]
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "_newLockTo"
          }
      ],
      "name": "lockToUpdate",
      "outputs": []
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "name": "unlockedSupply",
      "inputs": [],
      "type": "function",
      "stateMutability": "view"
  },
  {
      "name": "lockedSupply",
      "type": "function",
      "inputs": [],
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "stateMutability": "view",
      "inputs": [],
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "name": "circulatingSupply"
  },
  {
      "inputs": [],
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "name": "totalLock",
      "type": "function",
      "stateMutability": "view"
  },
  {
      "inputs": [
          {
              "name": "_to",
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "_amount"
          }
      ],
      "name": "mint",
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": []
  },
  {
      "name": "manualMint",
      "type": "function",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "_to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "_amount",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "outputs": []
  },
  {
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "_holder"
          }
      ],
      "stateMutability": "view",
      "name": "totalBalanceOf",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "inputs": [
          {
              "name": "_holder",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view",
      "name": "lockOf",
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
              "internalType": "address",
              "name": "_holder",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "name": "lastUnlockBlock",
      "stateMutability": "view",
      "type": "function"
  },
  {
      "outputs": [],
      "name": "lock",
      "type": "function",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "_holder",
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "_amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "name": "canUnlockAmount",
      "stateMutability": "view",
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "_holder"
          }
      ],
      "outputs": [
          {
              "name": "",
              "internalType": "uint256",
              "type": "uint256"
          }
      ]
  },
  {
      "inputs": [],
      "name": "unlock",
      "stateMutability": "nonpayable",
      "outputs": [],
      "type": "function"
  },
  {
      "type": "function",
      "name": "transferAll",
      "stateMutability": "nonpayable",
      "outputs": [],
      "inputs": [
          {
              "internalType": "address",
              "name": "_to",
              "type": "address"
          }
      ]
  },
  {
      "type": "function",
      "name": "delegates",
      "outputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": ""
          }
      ],
      "stateMutability": "view",
      "inputs": [
          {
              "internalType": "address",
              "name": "delegator",
              "type": "address"
          }
      ]
  },
  {
      "name": "delegate",
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "inputs": [
          {
              "type": "address",
              "name": "delegatee",
              "internalType": "address"
          }
      ]
  },
  {
      "outputs": [],
      "name": "delegateBySig",
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "name": "delegatee",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "nonce",
              "internalType": "uint256"
          },
          {
              "name": "expiry",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint8",
              "name": "v",
              "internalType": "uint8"
          },
          {
              "type": "bytes32",
              "name": "r",
              "internalType": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
          }
      ]
  },
  {
      "name": "getCurrentVotes",
      "stateMutability": "view",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": ""
          }
      ],
      "type": "function"
  },
  {
      "stateMutability": "view",
      "inputs": [
          {
              "name": "account",
              "internalType": "address",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "blockNumber"
          }
      ],
      "name": "getPriorVotes",
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ]
  }
],
XVIPER_ABI: [
  {
      "type": "constructor",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          },
          {
              "internalType": "string",
              "type": "string",
              "name": "_symbol"
          },
          {
              "internalType": "contract IERC20",
              "name": "_govToken",
              "type": "address"
          }
      ]
  },
  {
      "anonymous": false,
      "type": "event",
      "name": "Approval",
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "spender",
              "internalType": "address",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "value",
              "internalType": "uint256",
              "type": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "from",
              "indexed": true,
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "address",
              "name": "to",
              "internalType": "address",
              "indexed": true
          },
          {
              "type": "uint256",
              "name": "value",
              "internalType": "uint256",
              "indexed": false
          }
      ],
      "type": "event",
      "anonymous": false,
      "name": "Transfer"
  },
  {
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "name": "owner",
              "internalType": "address"
          },
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view",
      "name": "allowance",
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ]
  },
  {
      "name": "approve",
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "name": "spender",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amount"
          }
      ],
      "outputs": [
          {
              "internalType": "bool",
              "type": "bool",
              "name": ""
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "type": "function",
      "stateMutability": "view",
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ]
  },
  {
      "name": "decimals",
      "type": "function",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "inputs": []
  },
  {
      "outputs": [
          {
              "type": "bool",
              "internalType": "bool",
              "name": ""
          }
      ],
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "spender"
          },
          {
              "name": "subtractedValue",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "decreaseAllowance"
  },
  {
      "name": "govToken",
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "contract IERC20"
          }
      ]
  },
  {
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "inputs": [
          {
              "type": "address",
              "name": "spender",
              "internalType": "address"
          },
          {
              "name": "addedValue",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "increaseAllowance"
  },
  {
      "stateMutability": "view",
      "name": "name",
      "type": "function",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "inputs": []
  },
  {
      "name": "symbol",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "type": "function",
      "inputs": []
  },
  {
      "type": "function",
      "name": "totalSupply",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "inputs": []
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "name": "amount",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "name": "transfer",
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "name": "transferFrom",
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "sender"
          },
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "_amount"
          }
      ],
      "outputs": [],
      "name": "enter",
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "name": "leave",
      "outputs": [],
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "_share"
          }
      ],
      "type": "function",
      "stateMutability": "nonpayable"
  }
],
VIPER_ROUTER_ABI: [
  {
      "type": "constructor",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "name": "_factory",
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "_WETH"
          }
      ]
  },
  {
      "type": "function",
      "name": "WETH",
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view",
      "inputs": []
  },
  {
      "name": "factory",
      "type": "function",
      "inputs": [],
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "stateMutability": "payable",
      "type": "receive"
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountA"
          },
          {
              "name": "amountB",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "liquidity"
          }
      ],
      "type": "function",
      "name": "addLiquidity",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "tokenA"
          },
          {
              "name": "tokenB",
              "internalType": "address",
              "type": "address"
          },
          {
              "name": "amountADesired",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amountBDesired"
          },
          {
              "name": "amountAMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "amountBMin",
              "internalType": "uint256"
          },
          {
              "type": "address",
              "name": "to",
              "internalType": "address"
          },
          {
              "name": "deadline",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "inputs": [
          {
              "name": "token",
              "type": "address",
              "internalType": "address"
          },
          {
              "type": "uint256",
              "name": "amountTokenDesired",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "amountTokenMin",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "amountETHMin",
              "internalType": "uint256"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "to"
          },
          {
              "type": "uint256",
              "name": "deadline",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
          },
          {
              "name": "amountETH",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "liquidity",
              "internalType": "uint256",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "name": "addLiquidityETH"
  },
  {
      "name": "removeLiquidity",
      "stateMutability": "nonpayable",
      "type": "function",
      "outputs": [
          {
              "name": "amountA",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "amountB",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
          },
          {
              "name": "tokenB",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "liquidity",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "amountAMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "amountBMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "to"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "deadline"
          }
      ]
  },
  {
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amountToken"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountETH"
          }
      ],
      "name": "removeLiquidityETH",
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "type": "uint256",
              "name": "amountTokenMin",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "name": "amountETHMin",
              "internalType": "uint256"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "to"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "deadline"
          }
      ]
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "tokenB"
          },
          {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
          },
          {
              "name": "amountAMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "amountBMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "deadline",
              "internalType": "uint256"
          },
          {
              "type": "bool",
              "internalType": "bool",
              "name": "approveMax"
          },
          {
              "type": "uint8",
              "name": "v",
              "internalType": "uint8"
          },
          {
              "name": "r",
              "internalType": "bytes32",
              "type": "bytes32"
          },
          {
              "name": "s",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [
          {
              "type": "uint256",
              "name": "amountA",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountB"
          }
      ],
      "name": "removeLiquidityWithPermit"
  },
  {
      "type": "function",
      "inputs": [
          {
              "name": "token",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "liquidity",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "amountTokenMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountETHMin"
          },
          {
              "type": "address",
              "name": "to",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          },
          {
              "type": "bool",
              "internalType": "bool",
              "name": "approveMax"
          },
          {
              "type": "uint8",
              "internalType": "uint8",
              "name": "v"
          },
          {
              "name": "r",
              "internalType": "bytes32",
              "type": "bytes32"
          },
          {
              "name": "s",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "name": "removeLiquidityETHWithPermit"
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "type": "uint256",
              "name": "liquidity",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountTokenMin"
          },
          {
              "name": "amountETHMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "address",
              "name": "to",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amountETH"
          }
      ]
  },
  {
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "token"
          },
          {
              "name": "liquidity",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "amountTokenMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "amountETHMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "to"
          },
          {
              "type": "uint256",
              "name": "deadline",
              "internalType": "uint256"
          },
          {
              "name": "approveMax",
              "internalType": "bool",
              "type": "bool"
          },
          {
              "name": "v",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "type": "bytes32",
              "internalType": "bytes32",
              "name": "r"
          },
          {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "name": "amountETH",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "swapExactTokensForTokens",
      "inputs": [
          {
              "type": "uint256",
              "name": "amountIn",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "type": "address[]",
              "name": "path"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "outputs": [
          {
              "type": "uint256[]",
              "internalType": "uint256[]",
              "name": "amounts"
          }
      ]
  },
  {
      "outputs": [
          {
              "name": "amounts",
              "type": "uint256[]",
              "internalType": "uint256[]"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "swapTokensForExactTokens",
      "inputs": [
          {
              "name": "amountOut",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amountInMax"
          },
          {
              "name": "path",
              "type": "address[]",
              "internalType": "address[]"
          },
          {
              "internalType": "address",
              "type": "address",
              "name": "to"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "outputs": [
          {
              "type": "uint256[]",
              "internalType": "uint256[]",
              "name": "amounts"
          }
      ],
      "stateMutability": "payable",
      "name": "swapExactETHForTokens",
      "inputs": [
          {
              "name": "amountOutMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "address[]",
              "internalType": "address[]",
              "name": "path"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "name": "deadline",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "outputs": [
          {
              "type": "uint256[]",
              "internalType": "uint256[]",
              "name": "amounts"
          }
      ],
      "type": "function",
      "stateMutability": "nonpayable",
      "name": "swapTokensForExactETH",
      "inputs": [
          {
              "name": "amountOut",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountInMax"
          },
          {
              "type": "address[]",
              "name": "path",
              "internalType": "address[]"
          },
          {
              "name": "to",
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "deadline"
          }
      ]
  },
  {
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "address[]",
              "name": "path",
              "internalType": "address[]"
          },
          {
              "name": "to",
              "internalType": "address",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "type": "function",
      "outputs": [
          {
              "type": "uint256[]",
              "internalType": "uint256[]",
              "name": "amounts"
          }
      ],
      "name": "swapExactTokensForETH"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "amountOut"
          },
          {
              "name": "path",
              "internalType": "address[]",
              "type": "address[]"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "to"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "deadline"
          }
      ],
      "type": "function",
      "stateMutability": "payable",
      "name": "swapETHForExactTokens",
      "outputs": [
          {
              "type": "uint256[]",
              "internalType": "uint256[]",
              "name": "amounts"
          }
      ]
  },
  {
      "outputs": [],
      "type": "function",
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          },
          {
              "name": "amountOutMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "address[]",
              "name": "path",
              "internalType": "address[]"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
          }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "stateMutability": "nonpayable"
  },
  {
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "type": "function",
      "inputs": [
          {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "address[]",
              "internalType": "address[]",
              "name": "path"
          },
          {
              "type": "address",
              "internalType": "address",
              "name": "to"
          },
          {
              "type": "uint256",
              "name": "deadline",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "payable"
  },
  {
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "type": "function",
      "stateMutability": "nonpayable",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountIn"
          },
          {
              "name": "amountOutMin",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "type": "address[]",
              "internalType": "address[]",
              "name": "path"
          },
          {
              "type": "address",
              "name": "to",
              "internalType": "address"
          },
          {
              "name": "deadline",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": []
  },
  {
      "stateMutability": "pure",
      "name": "quote",
      "type": "function",
      "inputs": [
          {
              "name": "amountA",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "reserveA",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "reserveB"
          }
      ],
      "outputs": [
          {
              "name": "amountB",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "outputs": [
          {
              "type": "uint256",
              "name": "amountOut",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "name": "getAmountOut",
      "stateMutability": "pure",
      "inputs": [
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "amountIn"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "reserveIn"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "reserveOut"
          }
      ]
  },
  {
      "type": "function",
      "name": "getAmountIn",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
          }
      ],
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "reserveIn"
          },
          {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
          }
      ],
      "stateMutability": "pure"
  },
  {
      "name": "getAmountsOut",
      "type": "function",
      "stateMutability": "view",
      "inputs": [
          {
              "name": "amountIn",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "type": "address[]",
              "internalType": "address[]",
              "name": "path"
          }
      ],
      "outputs": [
          {
              "name": "amounts",
              "type": "uint256[]",
              "internalType": "uint256[]"
          }
      ]
  },
  {
      "name": "getAmountsIn",
      "outputs": [
          {
              "name": "amounts",
              "internalType": "uint256[]",
              "type": "uint256[]"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "inputs": [
          {
              "name": "amountOut",
              "internalType": "uint256",
              "type": "uint256"
          },
          {
              "name": "path",
              "internalType": "address[]",
              "type": "address[]"
          }
      ]
  }
]
})