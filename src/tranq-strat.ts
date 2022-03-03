import Web3 from 'web3';
import BN from 'bn.js';
import { 
  tranqWBTCABI, 
  CLAIM_REWARDS_ABI, 
  COMPTROLLER_ABI,
  TRANQ_STAKING_PROXY_ABI,
  TRANQ_LOCKED_STAKING_ABI
} from './tranqABI';
import { MASTER_BREEDER_ABI } from './abi/viperABI';
import { SUSHI_ROUTER } from './sushiABI.js';
require('dotenv').config();

import { decrypt } from './security/crpyto.js'

//Create web3 instance
//testnet
const HMY_TESTNET_RPC_URL = 'https://api.s0.b.hmny.io';
const HMY_RPC_URL = 'https://api.s0.t.hmny.io/';
const web3 = new Web3(HMY_RPC_URL);

//tranqAddresses
const tqOneAddy = '0x34b9aa82d89ae04f0f546ca5ec9c93efe1288940';
const tranqUnitrollerAddress = '0x6a82a17b48ef6be278bbc56138f35d04594587e3';
const tranqStakingProxyAddress = '0x55ae07bb8bae1501f9aebf35801b5699eae63bb7';
const tranqLockedStakingAddress = '0xba20c40339bcda584985522da3f6e61c2cc1f96e';
const tranq1BTCLendingAddress = '0x481721b918c698ff5f253c56684bac8dca84346c';//mint uint256

const FIRA_TRANQ_LP_TOKEN = '0x5208345c1539348ceb0ba20d6f7cb23c1091ab05';

//Tokenaddresses
const ETH1Address = '0x6983d1e6def3690c4d616b13597a09e6193ea013';
const stOneAddress = '0x22d62b19b7039333ad773b7185bb61294f3adc19';
const USDT1Address = '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f';
const TRANQAddress = '0xcf1709ad76a79d5a60210f23e81ce2460542a836';
const USDC1Address = '0x985458e523db3d53125813ed68c274899e9dfab4';
const WBTC1Address = '0x3095c7557bcb296ccc6e363de01b760ba031f2d9';
const BTC1Address = '0xdc54046c0451f9269fee1840aec808d36015697d';
const WONEAddress = '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a';
const FIRA_ADDRESS = '0x2A719aF848bf365489E548BE5edbEC1D65858e59';
const DEFIRA_MC_ADDRESS = '0xE20d839e71aF41492bBB3e52Fb2C2A87A66D076a';

//sushi addresses
const sushiRouterAddress = '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506';
const DEFIRA_ROUTER_ADDRESS = '0x3c8bf7e25ebfaafb863256a4380a8a93490d8065';
const DEFIRA_CLAIM_REWARDS_ADDRESS = '0xfbb5c6C9E2EA2Ad46A49Ed96dc061168269df8F4';

let nonce: number = 0;

async function tranqStrat() {
  let account = web3.eth.accounts.privateKeyToAccount(decrypt(process.env.HMY_P_KEY));
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)
  nonce = await web3.eth.getTransactionCount(myAddress);

  //Claim Rewards
  await claimLendingRewards(myAddress);
  await claimLockedStakingRewards(myAddress);

  //TRANQ goes back in to the locked staking vault
  const tranqBalance = await getBalanceOf(myAddress, TRANQAddress);
  console.log('TRANQ balance: ', tranqBalance)
  if (tranqBalance > 1e17) {
    await depositTranqToLockedStaking(myAddress, tranqBalance)
  }

  await wrapOne(myAddress)
  await swapTokensFor1BTC(myAddress);
  await deposit1BTCToTranqLending(myAddress)

  await swapAndLPFira(myAddress);
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

const claimLendingRewards = async (myAddress: string) => {
  const unitrollerContract = new web3.eth.Contract(CLAIM_REWARDS_ABI, tranqUnitrollerAddress, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })

  const comptrollerAddy = await unitrollerContract.methods.comptrollerImplementation().call();
  console.log('Comptroller Addy: ', comptrollerAddy)

  const comptrollerContract = new web3.eth.Contract(COMPTROLLER_ABI, comptrollerAddy, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })

  //Get reward amounts before claiming to make sure it is worth the gas to claim NOT WORKING
  // console.log('Tranq Rewards pending: ', await comptrollerContract.methods.rewardAccrued('0', myAddress).call())

  // const callData = comptrollerContract.methods.rewardAccrued('0', myAddress).encodeABI();
  // const accruedResponse = await web3.eth.call({
  //   tranqUnitrollerAddress,
  //   callData
  // });
  // console.log(accruedResponse)

  //Claim pending TRANQ and ONE rewards
  const claimTranqCallData = comptrollerContract.methods.claimReward('0', myAddress).encodeABI();
  const claimTranqResponse = await web3.eth.sendTransaction({
    from: myAddress, 
    to: tranqUnitrollerAddress,
    data: claimTranqCallData,
    gasPrice: 0.000000031 * 1e18,
    gas: '1000000',
    nonce: nonce++
  })
  console.log('TRANQ lending rewards claimed!')

  const claimOneCallData = comptrollerContract.methods.claimReward('1', myAddress).encodeABI();
  const claimOneResponse = await web3.eth.sendTransaction({
    from: myAddress, 
    to: tranqUnitrollerAddress,
    data: claimOneCallData,//claimTranqRewards,
    gasPrice: 0.000000031 * 1e18,
    gas: '1000000',
    nonce: nonce++
  })
  console.log('ONE lending rewards claimed!')
}

const claimLockedStakingRewards = async (myAddress: string) => {
  //Claim rewards from locked TRANQ
  const lockedTranqContract = new web3.eth.Contract(TRANQ_LOCKED_STAKING_ABI, tranqLockedStakingAddress, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })

  //TODO: THIS DOES NOT SEEM TO WORK
  // const rewardTokenCount = lockedTranqContract.methods.rewardTokenCount().encodeABI();
  // const claimableRewards = await web3.eth.call({
  //   tranqStakingProxyAddress,
  //   rewardTokenCount
  // });
  // console.log(claimableRewards);

  const claimRewards = lockedTranqContract.methods.claimRewards().encodeABI();
  const claimLockedStakingRewardsResponse = await web3.eth.sendTransaction({
    from: myAddress, 
    to: tranqStakingProxyAddress,
    data: claimRewards,
    gasPrice: 0.000000031 * 1e18,
    gas: '1000000',
    nonce: nonce++
  })
  console.log("Locked staking rewards claimed!")
}

const depositTranqToLockedStaking = async (myAddress: string, amount: number) => {
  const lockedTranqContract = new web3.eth.Contract(TRANQ_LOCKED_STAKING_ABI, tranqLockedStakingAddress, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })
  const deposit = lockedTranqContract.methods.deposit(amount).encodeABI();
  const claimLockedStakingRewardsResponse = await web3.eth.sendTransaction({
    from: myAddress, 
    to: tranqStakingProxyAddress,
    data: deposit,
    gasPrice: 0.000000031 * 1e18,
    gas: '1000000',
    nonce: nonce++
  })
  console.log("TRANQ deposited to locked staking!")
}

const wrapOne = async (myAddress: string): Promise<string> => {
  const oneBal = await web3.eth.getBalance(myAddress);
  console.log('One Balance: ', oneBal);
  const woneContract = new web3.eth.Contract([{
    "stateMutability": "payable",
    "inputs": [],
    "type": "function",
    "name": "deposit",
    "outputs": []
    }],
    WONEAddress,
    { 
      gas: 1000000,
      from: myAddress,
      gasPrice: (0.000000031 * 1e18).toString()
    });

  const wrapValue = Number(oneBal) - 1e18;
  if (wrapValue > 1e17) {
    return await woneContract.methods.deposit().send({ 
      value: wrapValue,
      nonce: nonce++ 
    });
  } else {
    return "No tokens wrapped, one balance too low"
  }
}

const sushiSwapTokens = async (myAddress: string, bal: number, swapRoute: string[]) => {
  const sushiContract = new web3.eth.Contract(SUSHI_ROUTER, sushiRouterAddress, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })

  const amounts = await sushiContract.methods.getAmountsOut(bal, swapRoute).call();
  console.log(bal, ' of ', swapRoute[0], ' is worth ', amounts, '1BTC');

  if (amounts[amounts.length - 1] > 10) {
    try {
      const success = await sushiContract.methods.swapExactTokensForTokens(
        bal, 
        Math.floor(amounts[amounts.length - 1] * 0.95),
        swapRoute, 
        myAddress, 
        Math.round(Date.now() / 1000) + 60
      ).send({ 
        gas: '1000000',
        nonce: nonce++
      })

      console.log(swapRoute[0], " Swap success!")
    } catch (e) {
      console.log("Swap failed")
      // console.log(e)
    }
  }
}

const swapTokensFor1BTC = async (myAddress: string) => {
  console.log("Swap reward tokens for 1BTC")
  //get balance of other tokens
  //SWAP all other rewards to 1BTC
  const tokens = [WONEAddress, ETH1Address, stOneAddress, USDT1Address, USDC1Address, WBTC1Address]

  for (const i in tokens) {
    console.log(tokens[i])
    const bal = await getBalanceOf(myAddress, tokens[i])
    console.log(tokens[i], ' balance: ', bal)
    if (bal > 0) {
      try {
        await sushiSwapTokens(myAddress, bal, [tokens[i], BTC1Address])
      } catch (error) {
        try {
          console.log("failed to get value for direct swap from, trying WONE route: ", tokens[i] )
          await sushiSwapTokens(myAddress, bal, [tokens[i], WONEAddress, BTC1Address])
        } catch (e) {
          console.log('Unable to get price for: ', tokens[i])
        }
      }
    }
  }
  console.log("Tokens swapped for 1BTC")
}

const deposit1BTCToTranqLending = async (myAddress: string) => {
  const BTC1Bal = await getBalanceOf(myAddress, BTC1Address)
  console.log(BTC1Bal)
  //Deposit 1BTC to tranq lending contract
  const BTC1LendingContract = new web3.eth.Contract([{
    "outputs": [
        {
            "name": "",
            "internalType": "uint256",
            "type": "uint256"
        }
    ],
    "payable": false,
    "inputs": [
        {
            "type": "uint256",
            "name": "mintAmount",
            "internalType": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "name": "mint",
    "type": "function",
    "constant": false
  }],
  tranq1BTCLendingAddress,
  { 
    gas: 1000000,
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  });

  await BTC1LendingContract.methods.mint(BTC1Bal).send({
    gas: '1000000',
    nonce: nonce++
  })
  console.log("1BTC deposited to tranq lending!")
}

const swapAndLPFira = async (myAddress: string) => {
  await claimDefiraRewards(myAddress)
  await defiraSwapTokens(myAddress);
  await addFIRATRANQLPToDefira(myAddress);
  await farmFIRATRANQ(myAddress);

}

const claimDefiraRewards = async (myAddress: string) => {
  console.log("Claiming defira LP rewards")
  const claimRewardsContract = new web3.eth.Contract([{
    "payable": false,
    "inputs": [
        {
            "type": "address",
            "name": "pool",
            "internalType": "address"
        }
    ],
    "stateMutability": "nonpayable",
    "name": "claimRewards",
    "type": "function",
    "constant": false
  }], DEFIRA_CLAIM_REWARDS_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  await claimRewardsContract.methods.claimRewards(myAddress).send({ nonce: nonce++ });
  console.log("Defira LP rewards claimed!")
}

const defiraSwapTokens = async (myAddress: string) => {
  const defiraContract = new web3.eth.Contract(SUSHI_ROUTER, DEFIRA_ROUTER_ADDRESS, {
    from: myAddress,
    gasPrice: (0.000000031 * 1e18).toString()
  })

  //calc equal amounts
  const firaBal = await getBalanceOf(myAddress, FIRA_ADDRESS);
  const tranqBal = await getBalanceOf(myAddress, TRANQAddress);
  console.log("Fira balance: ", firaBal);
  console.log("tranq balance: ", tranqBal)
  let tranqValInFira;
  if (tranqBal > 0) {
    const res = await defiraContract.methods.getAmountsOut(tranqBal.toString(), [TRANQAddress, FIRA_ADDRESS]).call();
    tranqValInFira = res[1]
  } else {
    tranqValInFira = 0
  }
  
  if (firaBal > 0) {
    const amountIn = Math.floor((firaBal - tranqValInFira)/2).toString();
    const amounts = await defiraContract.methods.getAmountsOut(amountIn, [FIRA_ADDRESS, TRANQAddress]).call();
    console.log(FIRA_ADDRESS, ' to ', TRANQAddress, ' is worth ', amounts);

    if (amounts[amounts.length - 1] > 10) {
      try {
        const success = await defiraContract.methods.swapExactTokensForTokens(
          amountIn, 
          Math.floor(amounts[amounts.length - 1] * 0.95).toString(),
          [FIRA_ADDRESS, TRANQAddress], 
          myAddress, 
          Math.round(Date.now() / 1000) + 60
        ).send({ 
          gas: '1000000',
          nonce: nonce++
        })

        console.log(FIRA_ADDRESS, "Defira Swap success!")
      } catch (e) {
        console.log("Defira Swap failed")
        // console.log(e)
      }
    }
  } else {
    console.log("No fira to swap")
  }
}

const addFIRATRANQLPToDefira = async (myAddress: string) => {
  console.log('pooling fira and tranq')
  const viperContract = new web3.eth.Contract(SUSHI_ROUTER, DEFIRA_ROUTER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const balance: number = await getBalanceOf(myAddress, FIRA_ADDRESS);
  if (balance > 0) {
    const amounts = await viperContract.methods.getAmountsOut(balance, [FIRA_ADDRESS, TRANQAddress]).call();

    try {
      await viperContract.methods.addLiquidity(
        FIRA_ADDRESS,
        TRANQAddress,
        balance,
        amounts[1],
        Math.floor(balance * 0.95).toString(),
        Math.floor(amounts[1] * 0.95).toString(),
        myAddress,
        Math.round(Date.now() / 1000) + 60,
      ).send({ nonce: nonce++ })
      console.log("Liquidity add FIRA-TRANQ pool")
    } catch (e) {
      console.log("Failed to add liquidity")
      console.log(e)
    }
  } else {
    console.log("No fira to pool")
  }
  
}

const farmFIRATRANQ = async (myAddress: string) => {
  console.log("Deposit LP to farm")
  const mchefContract = new web3.eth.Contract([{
    "payable": false,
    "inputs": [
        {
            "type": "uint256",
            "name": "pool",
            "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "name": "deposit",
    "type": "function",
    "constant": false
  }], DEFIRA_MC_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const bal = await getBalanceOf(myAddress, FIRA_TRANQ_LP_TOKEN);
  console.log(bal, " LP tokesn to deposit")
  if (bal > 0) {
    await mchefContract.methods.deposit(10, bal).send({ nonce: nonce++ })
    console.log("LP deposited!")
  }
  
}

tranqStrat()




