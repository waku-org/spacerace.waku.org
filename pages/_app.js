import "@/styles/globals.css";
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'


export default function App({ Component, pageProps }) {

  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = "61dbe39faec65ada87d98ccd933ebdaa"

  // 2. Set chains
  const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  }

  // 3. Create a metadata object
  const metadata = {
    name: 'SpaceRace',
    description: 'Gamified dogfooding for Waku reliability',
    url: '', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
  }

  // 4. Create Ethers config
  const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1 // used for the Coinbase SDK
  })

  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
    enableOnramp: false // Optional - false as default
  })
  return <Component {...pageProps} />;
}
