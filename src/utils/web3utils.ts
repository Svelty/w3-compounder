import Web3 from "web3";

export const getBalanceOf = async (web3: Web3 ,address: string, tokenAddress: string): Promise<number> => {
  const contract = new web3.eth.Contract(
    [{
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
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
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ]
    }],
    tokenAddress,
    {from: address}
  )

  return await contract.methods.balanceOf(address).call();
}