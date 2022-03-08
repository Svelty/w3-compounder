import { getBalanceOf } from '../utils/web3utils';
import Web3 from 'web3';
import { TRISOL_MCHEF_V2 } from '../abi/trisolABI';
import { decrypt } from '../security/crpyto.js';
import { SUSHI_ROUTER } from '../sushiABI'
require('dotenv').config();

const web3 = new Web3('https://mainnet.telos.net/evm');

const ROUTER_ADDRESS = '0xF9678db1CE83f6f51E5df348E2Cc842Ca51EfEc1'
const OMNI_FARM_ADDRESS = '0x79f5A8BD0d6a00A41EA62cdA426CEf0115117a61'
const CHARM_ADDRESS = '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df'
const TLOS_ADDRESS = '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E'
const LP_TOKEN_ADDRESS = '0x933F83735f26e51c61955b4fCA88F13fbd423A0C'

let nonce: number = 0;

export async function omniStrat() {
  let account = web3.eth.accounts.privateKeyToAccount(decrypt(process.env.OMNI_KEY));
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const myAddress = web3.eth.defaultAccount;
  console.log(myAddress)
  nonce = await web3.eth.getTransactionCount(myAddress);

  await harvestLPRewards(myAddress);

  await swap(myAddress);
  await pool(myAddress);
  await farm(myAddress)
}


const swap = async (myAddress: string) => {
  console.log("swaping for equal balances")
  const contract = new web3.eth.Contract(SUSHI_ROUTER, ROUTER_ADDRESS, {
    from: myAddress, 
    gasPrice: (525 * 1e9).toString(),
    gas: 1000000,
  })

  const charmBal = await getBalanceOf(web3, myAddress, CHARM_ADDRESS);
  console.log("Charm: ", charmBal)
  const half = Math.floor(charmBal/2).toString()

  if (charmBal > 0) {
    const amounts = await contract.methods.getAmountsOut(half, [CHARM_ADDRESS, TLOS_ADDRESS]).call();
    console.log('charm -> tlos', amounts)
    try {
      await contract.methods.swapExactTokensForETH(
        half, 
        Math.floor(amounts[1] * 0.95).toString(),
        [CHARM_ADDRESS, TLOS_ADDRESS], 
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
  const omniContract = new web3.eth.Contract(SUSHI_ROUTER, ROUTER_ADDRESS, {
    from: myAddress, 
    gasPrice: (525 * 1e9).toString(),
    gas: 1000000,
  })

  const charmBal = await getBalanceOf(web3, myAddress, CHARM_ADDRESS);
  const tlosBal = await web3.eth.getBalance(myAddress);
  console.log("charm bal: ", charmBal)
  console.log("tlosBal: ", tlosBal)

  const amounts = await omniContract.methods.getAmountsOut(charmBal, [CHARM_ADDRESS, TLOS_ADDRESS]).call();
  console.log("charm -> tlos: ", amounts)
  if (charmBal > 0 && Number(tlosBal) > Number(amounts[1])) {
    try {
      await omniContract.methods.addLiquidityETH(
        CHARM_ADDRESS,
        charmBal,
        Math.floor(charmBal * 0.95).toString(),
        Math.floor(amounts[1] * 0.95).toString(),
        myAddress,
        Math.round(Date.now() / 1000) + 60,
      ).send({ 
        nonce: nonce++,
        value: amounts[1]
      })//TODO: DO I NEED TO SEND A VALUE WIth this?
      console.log("Liquidity add for Charm tlos pool")
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
  const farmContract = new web3.eth.Contract([{
    "name": "deposit",
    "payable": false,
    "type": "function",
    "inputs": [
      {
          "internalType": "uint256",
          "name": "account",
          "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      }
    ]
  }], OMNI_FARM_ADDRESS, {
      from: myAddress, 
      gasPrice: (525 * 1e9).toString(),
      gas: 1000000,
    })

  const bal = await getBalanceOf(web3, myAddress, LP_TOKEN_ADDRESS);
  console.log(bal, " LP tokesn to deposit")
  await farmContract.methods.deposit(1, bal).send({ nonce: nonce++ })
  console.log("LP deposited!")
}

const harvestLPRewards = async (myAddress: string) => {
  console.log("Harvest LP rewards")
  const farmContract = new web3.eth.Contract([{
    "name": "deposit",
    "payable": false,
    "type": "function",
    "inputs": [
      {
          "internalType": "uint256",
          "name": "account",
          "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      }
    ]
}], OMNI_FARM_ADDRESS, {
    from: myAddress, 
    gasPrice: (525 * 1e9).toString(),
    gas: 1000000,
  })

  await farmContract.methods.deposit(1, 0).send({ nonce: nonce++ })
  console.log("Rewards harvested")
}
