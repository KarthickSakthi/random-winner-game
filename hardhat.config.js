require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const QUICKNODE_ENDPOINT = "";
const PRIVATE_KEY = ""
const POLYGON_MUMBAI_API_KEY = ""

module.exports = {
  solidity: "0.8.18",
  networks:{
    mumbai: {
      url: QUICKNODE_ENDPOINT, // mumbai RPC endpoint
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan:{
    apiKey: POLYGON_MUMBAI_API_KEY
  }
};