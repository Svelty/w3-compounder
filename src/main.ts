//TODO: call run functions from this file

import { comfyStrat } from "./comfyStrat/comfy-strat"
import { omniStrat } from "./omniStrat/omniStrat";
import { tranqStrat } from "./tranq-strat";
import { trisolStrat } from "./trisolarisStrat/trisolarisStrat";
import { viperStrat } from "./viperStrat/viperStrat";

async function run () {
  try {
    console.log("Running comfy strat")
    await comfyStrat();
    console.log("Comfy strat done")
  } catch (e) {
    console.log("Error while running comfy strat")
    console.log(e)
  }

  try {
    console.log("Running Omni Strat")
    await omniStrat();
    console.log("Omni strat success")
  } catch (e) {
    console.log("error running omni strat")
    console.log(e)
  }

  try {
    console.log("Running trisol Strat")
    await trisolStrat()
    console.log("trisol strat success")
  } catch (e) {
    console.log("error running trisol strat")
    console.log(e)
  }

  try {
    console.log("Running viper Strat")
    await viperStrat()
    console.log("viper strat success")
  } catch (e) {
    console.log("error running viper strat")
    console.log(e)
  }

  try {
    console.log("Running Tranq Strat")
    await tranqStrat()
    console.log("Tranq strat success")
  } catch (e) {
    console.log("error running Tranq strat")
    console.log(e)
  }
}

run()