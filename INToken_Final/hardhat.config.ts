import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import accountUtils from "./utils/accountUtils";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: accountUtils.getAccounts(),
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: accountUtils.getAccounts(),
    },
    bsc_test: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: accountUtils.getAccounts(),
    },
    rinkeby: {
        url: 'https://eth-rinkeby.alchemyapi.io/v2/HMPrfE2qcKfHHfvUzhS3NZbHusO97Fnx',
        accounts: accountUtils.getAccounts(),
        // accounts: [privateKey]
      }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // typechain: {
  //   outDir: 'src/types', 
  //   target: 'ethers-v5',
  //   alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  //   externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  // },
};

export default config;
