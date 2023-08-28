// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");
async function main() {
  const randomWinnerContract = await hre.ethers.deployContract("RandomWinnerGame",[VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]);
  await randomWinnerContract.waitForDeployment();
  console.log("Verify Contract Address:", randomWinnerContract.target);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  await hre.run("verify:verify",{address:randomWinnerContract.target,   constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]})
}

function sleep(ms){
  return new Promise((resolve)=> setTimeout(resolve,ms))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
