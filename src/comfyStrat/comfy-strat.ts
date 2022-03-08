//comfy strat
import { getBalanceOf } from '../utils/web3utils';
import Web3 from 'web3';
import { CSHARE_REWARD_POOL_ABI, ZEN_DEN_ABI } from '../abi/comfyABI';
import { VIPER_ROUTER_ABI } from '../abi/viperABI';
import { decrypt } from '../security/crpyto.js';
require('dotenv').config();

//Viper strat
const CSHARE_REWARD_POOL_ADDRESS = '0x53efc025d19270b899ebf89dd89a1f58ce1cd66f';
const ZEN_DEN_ADDRESS = '0x108426718e67da46e09e841bc4e8430a824bdafc';
const CSHARE_ADDRESS = '0x3cb98cacd44ee77eb35e99eb74ace91bf550c964';
const COMFY_ADDRESS = '0x702f78e81cf3dfae89648b5a9e2e1aa8db1de546';
const VIPER_ROUTER_ADDRESS = '0xf012702a5f0e54015362cBCA26a26fc90AA832a3';
const WONE_ADDRESS = '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a';
const CSHARE_WONE_LP_ADDRESS = '0x8fd44a4fb89e26a97b0edf99535236d415d03e50';
const COMFY_WONE_LP_ADDRESS = '0xf2d9e493a280545699e3c07aee22eae9ef24ddb7';

const COMFY_WONE_FARM = 0;
const CSHARE_WONE_FARM = 1;

const HMY_RPC_URL = 'https://api.s0.t.hmny.io/';
const web3 = new Web3(HMY_RPC_URL);

//claim comfy/wone and cshare/won farm rewards
//claim zenden rewards
//deposit half of cshare to zenden
//sell half of cshare for wone
//sell half of comfy for wone
//pool cshare/wone
//pool comfy/wone
//deposit LP tokens back to comfy farms
let nonce: number = 0;

//TODO: If this runs too often few rewards will be deposited to zenden - may change it to deposit all to zenden if available, else provide LP
export async function comfyStrat() {
  let account = web3.eth.accounts.privateKeyToAccount(decrypt(process.env.VIPER_P_KEY));
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)
  nonce = await web3.eth.getTransactionCount(myAddress);

  await claimComfyFarmRewards(myAddress);

  if (await zenDenCanWithdraw(myAddress)) {
    await claimZenDenRewards(myAddress);
    const cshareBalance = await getBalanceOf(web3, myAddress, CSHARE_ADDRESS)
    // console.log(cshareBalance, " cshare, depositing half to zenden")
    // const halfOfCshare = Math.floor(cshareBalance / 2);
    await depositToZenDen(myAddress, cshareBalance)
  }


  await swapAndPool(myAddress, COMFY_ADDRESS);
  await swapAndPool(myAddress, CSHARE_ADDRESS);

  await depositToComfyFarm(myAddress, COMFY_WONE_LP_ADDRESS, COMFY_WONE_FARM);
  await depositToComfyFarm(myAddress, CSHARE_WONE_LP_ADDRESS, CSHARE_WONE_FARM);
}

const depositToComfyFarm = async (myAddress: string, token: string, poolIndex: number) => {
  console.log("Depositing LP to comfy farm")
  const cshareRewardsContract = new web3.eth.Contract(CSHARE_REWARD_POOL_ABI, CSHARE_REWARD_POOL_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })
  const balance: number = await getBalanceOf(web3, myAddress, token);
  console.log(balance, "tokens to deposit")
  if (balance > 0) {
    try {
      await cshareRewardsContract.methods.deposit(poolIndex, balance).send({ nonce: nonce++ });
      console.log(token, ' LP token deposited to comfy farm')
    } catch (e) {
      console.log("Error depositing LP")
      console.log(e)
    }
  }
}

const swapAndPool = async (myAddress: string, token: string) => {
  await swapHalfToWONE(myAddress, token);
  await poolWithWONE(myAddress, token);
}

const poolWithWONE = async (myAddress: string, token: string) => {
  console.log('Deposting ', token, " to WONE LP")
  const viperContract = new web3.eth.Contract(VIPER_ROUTER_ABI, VIPER_ROUTER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const balance: number = await getBalanceOf(web3, myAddress, token);
  if (balance > 0) {
    const amounts = await viperContract.methods.getAmountsOut(balance, [token, WONE_ADDRESS]).call();

    try {
      await viperContract.methods.addLiquidity(
        token,
        WONE_ADDRESS,
        balance,
        amounts[1],
        Math.floor(balance * 0.95).toString(),
        Math.floor(amounts[1] * 0.95).toString(),
        myAddress,
        Math.round(Date.now() / 1000) + 60,
      ).send({ nonce: nonce++ })
      console.log("Liquidity add for WONE, ", token, " pool")
    } catch (e) {
      console.log("Failed to add liquidity")
      console.log(e)
    }
  }
}

const swapHalfToWONE = async (myAddress: string, token: string) => {
  console.log("swaping half of ", token, " for wone and depositing to LP");

  const viperContract = new web3.eth.Contract(VIPER_ROUTER_ABI, VIPER_ROUTER_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const balance: number = await getBalanceOf(web3, myAddress, token);
  if (balance > 0) {
    const bal = Math.floor(balance / 2).toString()

    const amounts = await viperContract.methods.getAmountsOut(bal, [token, WONE_ADDRESS]).call();
    console.log(bal, ' of ', token, ' is worth ', amounts, 'wone');

    let success = null;
    if (amounts[amounts.length - 1] > 0) {
      try {
        success = await viperContract.methods.swapExactTokensForTokens(
          bal, 
          Math.floor(amounts[amounts.length - 1] * 0.95).toString(),
          [token, WONE_ADDRESS], 
          myAddress, 
          Math.round(Date.now() / 1000) + 60
        ).send({ nonce: nonce++ })

        console.log(token, " Swap success!")
      } catch (e) {
        console.log("Swap failed")
        console.log(e)
      }
    }
  } else {
    console.log("no balance to swap")
  }
}

const depositToZenDen = async (myAddress: string, amount: number) => {
  console.log("Depositing ", amount," Cshare to zen den")
  const zenDenContract = new web3.eth.Contract(ZEN_DEN_ABI, ZEN_DEN_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  await zenDenContract.methods.stake(Math.floor(amount).toString()).send({ nonce: nonce++ });
  console.log("Cshare deposited to zen den!")
}

const zenDenCanWithdraw = async (myAddress: string): Promise<boolean> => {
  const zenDenContract = new web3.eth.Contract(ZEN_DEN_ABI, ZEN_DEN_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  return await zenDenContract.methods.canWithdraw(myAddress).call();
}

const claimZenDenRewards = async (myAddress: string) => {
  console.log("Claiming zen den rewards")
  const zenDenContract = new web3.eth.Contract(ZEN_DEN_ABI, ZEN_DEN_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const earned = await zenDenContract.methods.earned(myAddress).call()
  console.log(earned, " comfy rewards earned")
  if (earned > 0) {
    await zenDenContract.methods.claimReward().send({ nonce: nonce++ })
    console.log("Zen den rewards claimed!")
  }
}

const claimComfyFarmRewards = async (myAddress: string) => {
  console.log("Claiming comfy lp rewards")
  const cshareRewardsContract = new web3.eth.Contract(CSHARE_REWARD_POOL_ABI, CSHARE_REWARD_POOL_ADDRESS, {
    from: myAddress, 
    gasPrice: (0.000000031 * 1e18).toString(),
    gas: 1000000,
  })

  const poolLength = await cshareRewardsContract.methods.poolLength().call()

  const rewardPools: number[] = []
  for (let i = 0; i < poolLength; i++) {
    const pendingShare = await cshareRewardsContract.methods.pendingShare(i, myAddress).call();
    if (pendingShare > 0) {
      console.log(pendingShare, " pending in pool ", i)
      rewardPools.push(i)
    }
  }

  console.log("claiming rewards for pools: ", rewardPools)
  await cshareRewardsContract.methods.claimRewards(rewardPools).send({ nonce: nonce++ });
  console.log("Comfy LP rewards claimed!")
}
