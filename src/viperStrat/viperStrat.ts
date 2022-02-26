import Web3 from 'web3';
import { MASTER_BREEDER_ABI, VIPER_ABI, XVIPER_ABI } from '../abi/viperABI';
import { decrypt } from '../security/crpyto.js';
require('dotenv').config();

//Viper strat

const HMY_RPC_URL = 'https://api.s0.t.hmny.io/';
const web3 = new Web3(HMY_RPC_URL);

const MASTER_BREEDER_ADDRESS = '0x7abc67c8d4b248a38b0dc5756300630108cb48b4';
const VIPER_ADDRESS = '0xea589e93ff18b1a1f1e9bac7ef3e86ab62addc79';
const WSWAGMI_VIPER_VIPER_NEST_ADDRESS = '0x249a360CeC6687e145D76444Af176335F7C2F818';
const XVIPER_ADDRESS = '0xE064a68994e9380250CfEE3E8C0e2AC5C0924548';
const XVIPER_WSWAGMI_VIPER_NEST_ADDRESS = '0x88b0daAef8e729D415d8AA502915527A9425878C';
const WSWAGMI_ADDRESS = '0xbb948620fa9cd554ef9a331b13edea9b181f9d45';


//viper nest, claim rewards from wsWAGMI -> viper
//viper pit, deposit viper to pit
//viper nest, deposit xViper to xVIPER -> wsWAGMI pool (this should auto claim wsWAGMI rewards)
//viper nest, depoist wsWAGAMI to wsWAGMI -> viper pool


async function viperStrat() {
  let account = web3.eth.accounts.privateKeyToAccount(decrypt(process.env.VIPER_P_KEY));
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)

  await claimLPPoolRewards(myAddress);
  await claimLockedViper(myAddress);
  // deposit of 0 will claim rewards
  await depositToViperNest(myAddress, WSWAGMI_VIPER_VIPER_NEST_ADDRESS, 0);
  await depositToViperPit(myAddress);

  const xViperAmount = await getBalanceOf(myAddress, XVIPER_ADDRESS)
  console.log(xViperAmount, " xViper")
  await depositToViperNest(myAddress, XVIPER_WSWAGMI_VIPER_NEST_ADDRESS, xViperAmount)

  const wsWAGAMIAmount = await getBalanceOf(myAddress, WSWAGMI_ADDRESS)
  console.log(wsWAGAMIAmount, " wsWAGMI")
  await depositToViperNest(myAddress, WSWAGMI_VIPER_VIPER_NEST_ADDRESS, wsWAGAMIAmount)
  
}

const getBalanceOf = async (address: string, tokenAddress: string): Promise<number> => {
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

  const balance = await contract.methods.balanceOf(address).call();
  return balance;
}

const depositToViperPit = async (myAddress: string) => {
  console.log("Deposit viper to pit")
  const viperPitContract = new web3.eth.Contract(XVIPER_ABI, XVIPER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const viperContract = new web3.eth.Contract(VIPER_ABI, VIPER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const viperBalance = await viperContract.methods.balanceOf(myAddress).call();
  console.log("viper balance: ", viperBalance);

  await viperPitContract.methods.enter(viperBalance).send()
  console.log("Viper deposited to pit")
}

const depositToViperNest = async (myAddress: string, contractAddress: string, amount: number) => {
  console.log("Deposit ", amount, "to Viper nest ", contractAddress);
  const wsWAGMIVIPERViperNestContract = new web3.eth.Contract([
    {
      "inputs": [
        {
            "internalType": "uint256",
            "type": "uint256",
            "name": "amount"
        }
      ],
      "name": "deposit",
      "type": "function",
    }
  ], 
  contractAddress, 
  {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  //TODO: I should think about wrapping all method calls in try/catch
  await wsWAGMIVIPERViperNestContract.methods.deposit(amount).send();
  console.log("Deposit success")
}

const claimLockedViper = async (myAddress: string) => {
  console.log("Claiming unlocked viper")
  const viperContract = new web3.eth.Contract(VIPER_ABI, VIPER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const canUnlock = await viperContract.methods.canUnlockAmount(myAddress).call();
  console.log(canUnlock, " viper available to unlock")
  if (canUnlock > 0) {
    await viperContract.methods.unlock().send()
  }
  console.log("Viper unlocked!")
}

const claimLPPoolRewards = async (myAddress: string) => {
  console.log("Claiming rewards from LP pools")
  const masterBreederContract = new web3.eth.Contract(MASTER_BREEDER_ABI, MASTER_BREEDER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const poolLength = await masterBreederContract.methods.poolLength().call()

  let rewardPools: number[] = []
  for (let i = 0; i < poolLength; i++) {
    const pendingReward = await masterBreederContract.methods.pendingReward(i, myAddress).call();
    if (pendingReward > 0) {
      console.log(pendingReward, " available to claim from pool ", i)
      rewardPools.push(i);
    }
  }

  await masterBreederContract.methods.claimRewards(rewardPools).send();
  console.log("LP reards claimed!")
}

viperStrat()