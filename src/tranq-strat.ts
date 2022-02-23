const Web3 = require('web3');
const BN = require('bn.js');
const { 
  tranqWBTCABI, 
  CLAIM_REWARDS_ABI, 
  COMPTROLLER_ABI,
  TRANQ_STAKING_PROXY_ABI,
  TRANQ_LOCKED_STAKING_ABI
} = require('./tranqABI');
const { SUSHI_ROUTER } = require('./sushiABI.js');
require('dotenv').config();

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

//Tokenaddresses
const ETH1Address = '0x6983d1e6def3690c4d616b13597a09e6193ea013';
const stOneAddress = '0x22d62b19b7039333ad773b7185bb61294f3adc19';
const USDT1Address = '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f';
const TRANQAddress = '0xcf1709ad76a79d5a60210f23e81ce2460542a836';
const USDC1Address = '0x985458e523db3d53125813ed68c274899e9dfab4';
const WBTC1Address = '0x3095c7557bcb296ccc6e363de01b760ba031f2d9';
const BTC1Address = '0xdc54046c0451f9269fee1840aec808d36015697d';
const WONEAddress = '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a'

//sushi addresses
const sushiRouterAddress = '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506';

let nonce: number = 0;

async function run() {
  let account = web3.eth.accounts.privateKeyToAccount(process.env.HMY_P_KEY);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)
  nonce = await web3.eth.getTransactionCount(myAddress);

  //Claim Rewards
  await claimLendingRewards(myAddress);
  await claimLockedStakingRewards(myAddress);

  // //TRANQ goes back in to the locked staking vault
  const tranqBalance = await getBalanceOf(myAddress, TRANQAddress);
  console.log('TRANQ balance: ', tranqBalance)
  if (tranqBalance > 1e17) {
    await depositTranqToLockedStaking(myAddress, tranqBalance)
  }

  await wrapOne(myAddress)
  await swapTokensFor1BTC(myAddress);
  await deposit1BTCToTranqLending(myAddress)
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
    gasPrice: 0.000000031 * 1e18
  })

  const comptrollerAddy = await unitrollerContract.methods.comptrollerImplementation().call();
  console.log('Comptroller Addy: ', comptrollerAddy)

  const comptrollerContract = new web3.eth.Contract(COMPTROLLER_ABI, comptrollerAddy, {
    from: myAddress,
    gasPrice: 0.000000031 * 1e18
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
    gasPrice: 0.000000031 * 1e18
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
    gasPrice: 0.000000031 * 1e18
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
      gas: '1000000',
      from: myAddress,
      gasPrice: 0.000000031 * 1e18
    });

  const wrapValue = oneBal - 1e18;
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
    gasPrice: 0.000000031 * 1e18
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
  //get balance of other tokens
  //SWAP all other rewards to 1BTC
  const tokens = [WONEAddress, ETH1Address, stOneAddress, USDT1Address, USDC1Address, WBTC1Address]
  let nonce = await web3.eth.getTransactionCount(myAddress);

  //TODO: check that this works as expected
  for (const token in tokens) {
    const bal = await getBalanceOf(myAddress, token)
    console.log(token, ' balance: ', bal)
    if (bal > 0) {
      try {
        await sushiSwapTokens(myAddress, bal, [token, BTC1Address])
      } catch (error) {
        try {
          console.log("failed to get value for direct swap from, trying WONE route: ", token )
          await sushiSwapTokens(myAddress, bal, [token, WONEAddress, BTC1Address])
        } catch (e) {
          console.log('Unable to get price for: ', token)
          // console.log(e)
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
    gas: '1000000',
    from: myAddress,
    gasPrice: 0.000000031 * 1e18
  });

  await BTC1LendingContract.methods.mint(BTC1Bal).send({
    gas: '1000000',
    nonce: nonce++
  })
  console.log("1BTC deposited to tranq lending!")
}

run()




