module.exports = Object.freeze({
  SUSHI_ROUTER: [
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_factory",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "_WETH",
                "type": "address",
                "internalType": "address"
            }
        ],
        "type": "constructor"
    },
    {
        "stateMutability": "view",
        "name": "WETH",
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "type": "function",
        "inputs": []
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "name": "factory",
        "type": "function",
        "stateMutability": "view",
        "inputs": []
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "tokenA"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "tokenB"
            },
            {
                "name": "amountADesired",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBDesired",
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
        "name": "addLiquidity",
        "outputs": [
            {
                "name": "amountA",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "amountB",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "liquidity",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "stateMutability": "payable",
        "name": "addLiquidityETH",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "token"
            },
            {
                "name": "amountTokenDesired",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountTokenMin",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountETHMin",
                "type": "uint256"
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
        ],
        "type": "function",
        "outputs": [
            {
                "name": "amountToken",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountETH",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "liquidity",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "name": "tokenA",
                "internalType": "address",
                "type": "address"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "tokenB"
            },
            {
                "type": "uint256",
                "name": "liquidity",
                "internalType": "uint256"
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
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "deadline"
            }
        ],
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
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "removeLiquidity"
    },
    {
        "name": "removeLiquidityETH",
        "type": "function",
        "stateMutability": "nonpayable",
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
                "internalType": "uint256",
                "name": "amountTokenMin",
                "type": "uint256"
            },
            {
                "name": "amountETHMin",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "to",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "deadline",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountToken",
                "internalType": "uint256"
            },
            {
                "name": "amountETH",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "tokenA"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "tokenB"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "liquidity"
            },
            {
                "internalType": "uint256",
                "name": "amountAMin",
                "type": "uint256"
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
                "type": "uint256",
                "name": "deadline",
                "internalType": "uint256"
            },
            {
                "type": "bool",
                "name": "approveMax",
                "internalType": "bool"
            },
            {
                "type": "uint8",
                "internalType": "uint8",
                "name": "v"
            },
            {
                "name": "r",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "type": "bytes32",
                "internalType": "bytes32",
                "name": "s"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "name": "amountA",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "amountB"
            }
        ],
        "type": "function",
        "name": "removeLiquidityWithPermit"
    },
    {
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
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
                "internalType": "uint256",
                "name": "amountETHMin"
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
                "internalType": "bool",
                "name": "approveMax",
                "type": "bool"
            },
            {
                "name": "v",
                "type": "uint8",
                "internalType": "uint8"
            },
            {
                "name": "r",
                "internalType": "bytes32",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "amountToken",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountETH",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "removeLiquidityETHWithPermit",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
        "type": "function",
        "inputs": [
            {
                "type": "address",
                "name": "token",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "liquidity"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "amountTokenMin"
            },
            {
                "name": "amountETHMin",
                "type": "uint256",
                "internalType": "uint256"
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
        ],
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "name": "amountETH",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        "outputs": [
            {
                "name": "amountETH",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
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
                "name": "amountTokenMin",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountETHMin",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "deadline",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "approveMax",
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
                "type": "bytes32",
                "name": "s"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "name": "swapExactTokensForTokens",
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "internalType": "uint256[]",
                "type": "uint256[]",
                "name": "amounts"
            }
        ],
        "type": "function",
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "amountIn"
            },
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "name": "path",
                "internalType": "address[]",
                "type": "address[]"
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
        "stateMutability": "nonpayable",
        "name": "swapTokensForExactTokens",
        "inputs": [
            {
                "name": "amountOut",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "amountInMax",
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
                "type": "uint256",
                "internalType": "uint256",
                "name": "deadline"
            }
        ],
        "outputs": [
            {
                "name": "amounts",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "name": "swapExactETHForTokens",
        "outputs": [
            {
                "type": "uint256[]",
                "internalType": "uint256[]",
                "name": "amounts"
            }
        ],
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "type": "address[]",
                "internalType": "address[]",
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
        "inputs": [
            {
                "name": "amountOut",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "amountInMax",
                "internalType": "uint256"
            },
            {
                "type": "address[]",
                "name": "path",
                "internalType": "address[]"
            },
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "name": "deadline",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "name": "swapTokensForExactETH"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "swapExactTokensForETH",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "amountIn"
            },
            {
                "type": "uint256",
                "name": "amountOutMin",
                "internalType": "uint256"
            },
            {
                "type": "address[]",
                "name": "path",
                "internalType": "address[]"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "to"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "amounts",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "amounts",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "payable",
        "name": "swapETHForExactTokens",
        "inputs": [
            {
                "name": "amountOut",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "path",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "deadline",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        "stateMutability": "nonpayable",
        "outputs": [],
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
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            },
            {
                "name": "to",
                "type": "address",
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
        "type": "function",
        "outputs": [],
        "stateMutability": "payable",
        "inputs": [
            {
                "type": "uint256",
                "name": "amountOutMin",
                "internalType": "uint256"
            },
            {
                "name": "path",
                "type": "address[]",
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
        "name": "swapExactETHForTokensSupportingFeeOnTransferTokens"
    },
    {
        "type": "function",
        "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "amountIn",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "amountOutMin",
                "internalType": "uint256"
            },
            {
                "internalType": "address[]",
                "type": "address[]",
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
        ],
        "outputs": []
    },
    {
        "stateMutability": "pure",
        "inputs": [
            {
                "name": "amountA",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "reserveA"
            },
            {
                "name": "reserveB",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "amountB"
            }
        ],
        "name": "quote"
    },
    {
        "name": "getAmountOut",
        "stateMutability": "pure",
        "type": "function",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "name": "reserveIn",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "reserveOut",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOut",
                "internalType": "uint256"
            }
        ]
    },
    {
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserveIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserveOut",
                "type": "uint256"
            }
        ],
        "name": "getAmountIn"
    },
    {
        "name": "getAmountsOut",
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "amountIn"
            },
            {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "amounts",
                "internalType": "uint256[]"
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
        "stateMutability": "view",
        "name": "getAmountsIn",
        "type": "function",
        "inputs": [
            {
                "name": "amountOut",
                "type": "uint256",
                "internalType": "uint256"
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