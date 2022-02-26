module.exports = Object.freeze({
  CSHARE_REWARD_POOL_ABI: [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "name": "_cshare",
                "type": "address"
            },
            {
                "type": "uint256",
                "name": "_poolStartTime",
                "internalType": "uint256"
            }
        ]
    },
    {
        "anonymous": false,
        "type": "event",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "name": "pid",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "Deposit"
    },
    {
        "type": "event",
        "name": "EmergencyWithdraw",
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "type": "address",
                "name": "user"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "pid",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false,
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false,
        "name": "RewardPaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "internalType": "address",
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "indexed": true,
                "type": "uint256",
                "name": "pid"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "name": "TOTAL_REWARDS",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "inputs": [],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "stateMutability": "view",
        "name": "cSharePerSecond",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ],
        "type": "function",
        "inputs": []
    },
    {
        "name": "cshare",
        "outputs": [
            {
                "type": "address",
                "internalType": "contract IERC20",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "inputs": []
    },
    {
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "operator"
    },
    {
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "inputs": [],
        "name": "poolEndTime"
    },
    {
        "name": "poolInfo",
        "outputs": [
            {
                "name": "token",
                "internalType": "contract IERC20",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allocPoint",
                "type": "uint256"
            },
            {
                "name": "lastRewardTime",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "accCSharePerShare"
            },
            {
                "name": "isStarted",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "type": "function",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "name": "poolStartTime"
    },
    {
        "name": "runningTime",
        "stateMutability": "view",
        "inputs": [],
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
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "totalAllocPoint",
        "type": "function",
        "inputs": []
    },
    {
        "name": "userInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "rewardDebt"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "inputs": [],
        "name": "poolLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "pools",
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "add",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "name": "_allocPoint",
                "internalType": "uint256"
            },
            {
                "name": "_token",
                "type": "address",
                "internalType": "contract IERC20"
            },
            {
                "type": "bool",
                "name": "_withUpdate",
                "internalType": "bool"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_lastRewardTime"
            }
        ]
    },
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_pid",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "_allocPoint",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "name": "set",
        "outputs": []
    },
    {
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_fromTime"
            },
            {
                "name": "_toTime",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "getGeneratedReward",
        "stateMutability": "view",
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
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            },
            {
                "name": "_user",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "pendingShare",
        "stateMutability": "view",
        "type": "function",
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
        "name": "massUpdatePools",
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "outputs": [],
        "name": "updatePool",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_pid",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "outputs": [],
        "name": "deposit",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "_pid"
            },
            {
                "type": "uint256",
                "name": "_amount",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            },
            {
                "name": "_amount",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": [],
        "name": "withdraw",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "outputs": [],
        "name": "emergencyWithdraw",
        "inputs": [
            {
                "type": "uint256",
                "name": "_pid",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "name": "_pids",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "name": "claimRewards"
    },
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_operator",
                "internalType": "address",
                "type": "address"
            }
        ],
        "outputs": [],
        "name": "setOperator",
        "type": "function"
    },
    {
        "stateMutability": "nonpayable",
        "name": "governanceRecoverUnsupported",
        "type": "function",
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "outputs": []
    }
],
ZEN_DEN_ABI: [
  {
      "type": "event",
      "inputs": [
          {
              "name": "executor",
              "internalType": "address",
              "type": "address",
              "indexed": true
          },
          {
              "name": "at",
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false
          }
      ],
      "anonymous": false,
      "name": "Initialized"
  },
  {
      "inputs": [
          {
              "name": "user",
              "type": "address",
              "internalType": "address",
              "indexed": true
          },
          {
              "name": "reward",
              "indexed": false,
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "name": "RewardAdded",
      "type": "event",
      "anonymous": false
  },
  {
      "anonymous": false,
      "name": "RewardPaid",
      "type": "event",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "indexed": true,
              "name": "user"
          },
          {
              "indexed": false,
              "name": "reward",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "event",
      "inputs": [
          {
              "name": "user",
              "indexed": true,
              "internalType": "address",
              "type": "address"
          },
          {
              "type": "uint256",
              "indexed": false,
              "name": "amount",
              "internalType": "uint256"
          }
      ],
      "name": "Staked",
      "anonymous": false
  },
  {
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "type": "address",
              "name": "user"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "indexed": false,
              "name": "amount"
          }
      ],
      "anonymous": false,
      "name": "Withdrawn",
      "type": "event"
  },
  {
      "name": "balanceOf",
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
              "name": "",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "stateMutability": "view"
  },
  {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "contract IERC20",
              "type": "address",
              "name": ""
          }
      ],
      "name": "comfy",
      "inputs": []
  },
  {
      "type": "function",
      "stateMutability": "view",
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "enjoyers",
      "outputs": [
          {
              "name": "lastSnapshotIndex",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": "rewardEarned"
          },
          {
              "name": "epochTimerStart",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "function",
      "inputs": [],
      "name": "initialized",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "internalType": "bool",
              "type": "bool"
          }
      ]
  },
  {
      "type": "function",
      "name": "operator",
      "stateMutability": "view",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "internalType": "address",
              "type": "address"
          }
      ]
  },
  {
      "name": "rewardLockupEpochs",
      "inputs": [],
      "outputs": [
          {
              "internalType": "uint256",
              "type": "uint256",
              "name": ""
          }
      ],
      "type": "function",
      "stateMutability": "view"
  },
  {
      "outputs": [
          {
              "type": "address",
              "name": "",
              "internalType": "contract IERC20"
          }
      ],
      "name": "share",
      "type": "function",
      "stateMutability": "view",
      "inputs": []
  },
  {
      "type": "function",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "name": "totalSupply",
      "inputs": []
  },
  {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "type": "address",
              "internalType": "contract ITreasury",
              "name": ""
          }
      ],
      "name": "treasury",
      "inputs": []
  },
  {
      "stateMutability": "view",
      "inputs": [],
      "type": "function",
      "name": "withdrawLockupEpochs",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ]
  },
  {
      "stateMutability": "view",
      "name": "zenDenHistory",
      "type": "function",
      "outputs": [
          {
              "type": "uint256",
              "name": "time",
              "internalType": "uint256"
          },
          {
              "name": "rewardReceived",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "rewardPerShare",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "name": "initialize",
      "type": "function",
      "inputs": [
          {
              "internalType": "contract IERC20",
              "type": "address",
              "name": "_comfy"
          },
          {
              "internalType": "contract IERC20",
              "name": "_share",
              "type": "address"
          },
          {
              "type": "address",
              "internalType": "contract ITreasury",
              "name": "_treasury"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "inputs": [
          {
              "type": "address",
              "name": "_operator",
              "internalType": "address"
          }
      ],
      "name": "setOperator"
  },
  {
      "outputs": [],
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_withdrawLockupEpochs",
              "type": "uint256"
          },
          {
              "name": "_rewardLockupEpochs",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setLockUp"
  },
  {
      "name": "latestSnapshotIndex",
      "stateMutability": "view",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "inputs": [],
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
      "inputs": [
          {
              "name": "enjoyer",
              "type": "address",
              "internalType": "address"
          }
      ],
      "name": "getLastSnapshotIndexOf",
      "type": "function",
      "stateMutability": "view"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "type": "address",
              "name": "enjoyer"
          }
      ],
      "name": "canWithdraw",
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ]
  },
  {
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "internalType": "address",
              "name": "enjoyer"
          }
      ],
      "name": "canClaimReward",
      "stateMutability": "view",
      "outputs": [
          {
              "type": "bool",
              "name": "",
              "internalType": "bool"
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
      "name": "epoch",
      "inputs": []
  },
  {
      "inputs": [],
      "type": "function",
      "stateMutability": "view",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "nextEpochPoint"
  },
  {
      "stateMutability": "view",
      "inputs": [],
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "name": "getComfyPrice"
  },
  {
      "name": "rewardPerShare",
      "type": "function",
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view",
      "inputs": []
  },
  {
      "type": "function",
      "name": "earned",
      "inputs": [
          {
              "internalType": "address",
              "name": "enjoyer",
              "type": "address"
          }
      ],
      "outputs": [
          {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
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
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "stake"
  },
  {
      "name": "withdraw",
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": []
  },
  {
      "stateMutability": "nonpayable",
      "inputs": [],
      "outputs": [],
      "name": "exit",
      "type": "function"
  },
  {
      "stateMutability": "nonpayable",
      "type": "function",
      "inputs": [],
      "name": "claimReward",
      "outputs": []
  },
  {
      "outputs": [],
      "name": "allocateSeigniorage",
      "inputs": [
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "type": "function",
      "stateMutability": "nonpayable"
  },
  {
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "governanceRecoverUnsupported",
      "type": "function",
      "inputs": [
          {
              "type": "address",
              "name": "_token",
              "internalType": "contract IERC20"
          },
          {
              "type": "uint256",
              "internalType": "uint256",
              "name": "_amount"
          },
          {
              "name": "_to",
              "type": "address",
              "internalType": "address"
          }
      ]
  }
]
})