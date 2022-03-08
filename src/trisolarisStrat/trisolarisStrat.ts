

import { getBalanceOf } from '../utils/web3utils';
import Web3 from 'web3';
import { TRISOL_MCHEF_V2 } from '../abi/trisolABI';
import { decrypt } from '../security/crpyto.js';
import { SUSHI_ROUTER } from '../sushiABI'
require('dotenv').config();

const web3 = new Web3('https://mainnet.aurora.dev');

const TRISOL_MCHEF_ADDY = '0x3838956710bcc9D122Dd23863a0549ca8D5675D6';
const AURORA_ADDY = '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79';
const TRISOL_ADDY = '0xFa94348467f64D5A457F75F8bc40495D33c65aBB';
const WETH_ADDY = '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb';
const TRISOL_ROUTER_ADDY = '0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B';
const TRI_AUR_LP_ADDY = '0xd1654a7713617d41a8c9530fb9b948d00e162194';

let nonce: number = 0;

export async function trisolStrat() {
  let account = web3.eth.accounts.privateKeyToAccount(decrypt(process.env.NA_P_KEY));
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)
  nonce = await web3.eth.getTransactionCount(myAddress);

  await harvestLPRewards(myAddress);
  await new Promise(r => setTimeout(r, 2000))
  await swap(myAddress);
  console.log("sleep for 2 seconds")
  await new Promise(r => setTimeout(r, 2000))
  await pool(myAddress);
  await farm(myAddress)
}


const swap = async (myAddress: string) => {
  console.log("swaping for equal balances")
  const trisolContract = new web3.eth.Contract(SUSHI_ROUTER, TRISOL_ROUTER_ADDY, {
    from: myAddress, 
    gasPrice: (0.03 * 1e9).toString(),
    gas: 1000000,
  })

  //TODO: issue where balance is not correct when this is called, this is probably caused because
  //call only queries a local node, and the harvest transaction has not yet propegated 
  const auroraBal = await getBalanceOf(web3, myAddress, AURORA_ADDY);
  const triBal = await getBalanceOf(web3, myAddress, TRISOL_ADDY);
  console.log("Aurora: ", auroraBal)
  console.log("trisol: ", triBal)

  if (triBal > 0) {
    const triValOfAurora = await trisolContract.methods.getAmountsOut(auroraBal, [AURORA_ADDY, TRISOL_ADDY]).call();
    console.log(triValOfAurora)
    const triToSwap = Math.floor((triBal - triValOfAurora[1])/2).toString();
    console.log(triToSwap)
    const auroraTarget = await trisolContract.methods.getAmountsOut(triToSwap, [TRISOL_ADDY, AURORA_ADDY]).call();

    try {
      await trisolContract.methods.swapExactTokensForTokens(
        triToSwap, 
        Math.floor(auroraTarget[1] * 0.95).toString(),
        [TRISOL_ADDY, AURORA_ADDY], 
        myAddress, 
        Math.round(Date.now() / 1000) + 60
      ).send({ nonce: nonce++ })

      console.log("Swap success!")
    } catch (e) {
      console.log("Swap failed")
      console.log(e)
    }
  }
}

const pool = async (myAddress: string) => {
  console.log('Deposting tokesn to LP')
  const trisolContract = new web3.eth.Contract(SUSHI_ROUTER, TRISOL_ROUTER_ADDY, {
    from: myAddress, 
    gasPrice: (0.03 * 1e9).toString(),
    gas: 1000000,
  })

  const triBal = await getBalanceOf(web3, myAddress, TRISOL_ADDY);
  const auroraBal = await getBalanceOf(web3, myAddress, AURORA_ADDY);
  console.log("tri bal: ", triBal)
  console.log("auroraBal: ", auroraBal)

  const amounts = await trisolContract.methods.getAmountsOut(triBal, [TRISOL_ADDY, AURORA_ADDY]).call();
  // const amounts = await trisolContract.methods.getAmountsOut(auroraBal, [AURORA_ADDY, TRISOL_ADDY]).call();
  console.log("aurora -> tri: ", amounts)
  if (triBal > 0 && auroraBal > 0) {
    try {
      await trisolContract.methods.addLiquidity(
        TRISOL_ADDY,
        AURORA_ADDY,
        triBal,
        amounts[1],
        Math.floor(triBal * 0.95).toString(),
        Math.floor(amounts[1] * 0.95).toString(),
        myAddress,
        Math.round(Date.now() / 1000) + 60,
      ).send({ nonce: nonce++ })
      console.log("Liquidity add for TRI AURORA pool")
    } catch (e) {
      console.log("Failed to add liquidity")
      console.log(e)
    }
  } else {
    console.log("No tokens to pool")
  }

}

const farm = async (myAddress: string) => {
  console.log("Deposit LP to farm")
  const mchefContract = new web3.eth.Contract(TRISOL_MCHEF_V2, TRISOL_MCHEF_ADDY, {
    from: myAddress, 
    gasPrice: (0.03 * 1e9).toString(),
    gas: 1000000,
  })

  const bal = await getBalanceOf(web3, myAddress, TRI_AUR_LP_ADDY);
  console.log(bal, " LP tokesn to deposit")
  await mchefContract.methods.deposit(1, bal, myAddress).send({ nonce: nonce++ })
  console.log("LP deposited!")
}

const harvestLPRewards = async (myAddress: string) => {
  console.log("Harvest LP rewards")
  const mchefContract = new web3.eth.Contract(TRISOL_MCHEF_V2, TRISOL_MCHEF_ADDY, {
    from: myAddress, 
    gasPrice: (0.03 * 1e9).toString(),
    gas: 1000000,
  })

  await mchefContract.methods.harvest(1, myAddress).send({ nonce: nonce++ })
  console.log("Rewards harvested")
}
