const wallet = {
  address: "0x0e170E7Efe1458fe9049ACeC8B4433b79a0A7DBB",
  privateKey:
    "34b7cd0c29091919040ed9b8cc4b24f53611ba3f2311ea5028c114af88bf2cba",
};

const SpdxLicense = `// SPDX-License-Identifier: MIT`;

const explorerApiKeys = {
  bscScan: "CXXU62N3137QBRVC41ZNZB2V5FE37TITWB",
  etherScan: "9VMWSPHE8PNBHK7M37YP1BT3DWKFY7PN5Y",
  arbiscan: "CFI31Y3JNKUYH7P16ZSZ5I1RJV58NV3CVS",
  polygonScan: "Y5FC6F9DGZX7PTPA3U6CM46ZWYI34FJYGQ",
  ftmScan: "MH41STTU3QMC3QF25DISJN76VA4ATJAV61",
  avaxScan: "S18W8N1Q411AU68ZVIDXUKHNMNSQF51M3K",
};

const explorerApiUrl = {
  testnet: {
    etherum: "https://api-goerli.etherscan.io/api",
    binanceSmartChain: "https://api-testnet.bscscan.com/api",
    ftm: "https://api-testnet.ftmscan.com/api",
    arbitrum: "https://api-goerli.arbiscan.io/api",
    maticNetwork: "https://api-testnet.polygonscan.com/api",
    avaxNetwork: "https://api-testnet.snowtrace.io/api",
  },
  mainnet: {
    etherum: "",
    binanceSmartChain: "",
    ftm: "",
    arbitrum: "",
    maticNetwork: "",
    avaxNetwork: "",
  },
};

const RpcUrl = {
  testnet: {
    etherum: "https://rpc.ankr.com/eth_goerli",
    binanceSmartChain: "https://data-seed-prebsc-2-s3.binance.org:8545",
    ftm: "https://rpc.ankr.com/fantom_testnet",
    arbitrum: "https://goerli-rollup.arbitrum.io/rpc",
    maticNetwork: "https://matic-mumbai.chainstacklabs.com",
    avaxNetwork: "https://api.avax-test.network/ext/bc/C/rpc",
  },
  mainnet: {
    etherum: "",
    binanceSmartChain: "",
    ftm: "",
    arbitrum: "",
    maticNetwork: "",
    avaxNetwork: "",
  },
};

module.exports = {
  explorerApiUrl,
  wallet,
  explorerApiKeys,
  SpdxLicense,
  RpcUrl,
};
