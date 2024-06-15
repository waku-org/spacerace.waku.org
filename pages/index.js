import Image from "next/image";
import { BackgroundBeams } from "@/components/background-beams";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChevronsRight, Github, Rocket } from "lucide-react";
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import Rocketlaunch from "@/components/rocket-launch";
import Rocketdashboard from "@/components/rocket-dashboard";
import {useState} from "react"

import Prometheus from '@/utils/prometheus';



export default function Home({ avgPing, connectablePeers }) {
  const { open } = useWeb3Modal()
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const [rocket, setRocket] = useState(true)


  return (
    <main
      className="min-h-screen bg-[#032B00] w-full"
    >
      {
          !isConnected ?
        <div className="z-30">

      <div className="flex justify-between items-center p-5">
        <Rocket className="text-[#0EFF00]" />
        <button onClick={() => open()} className="border-[#0EFF00] border text-[#0EFF00] p-2">{!isConnected ? "Connect Wallet" : address}</button>
      </div>
      <div>
        <h1 className="arcade text-center text-9xl mt-40 text-[#0EFF00]">SpaceRace</h1>
        <h3 className="text-center mt-5 text-xl text-[#0EFF00] space-mono">A gamified dogfooding campaign for improving Waku's reliability</h3>
      </div>
      <div className="flex justify-center mt-20 space-x-5">
        <button onClick={() => open()} className="text-[#032B00] bg-[#0EFF00] p-4">Connect Wallet</button>
        <button className="text-[#032B00] bg-[#0EFF00] p-4 flex items-center space-x-3">
          <Github />
          <h1>Github</h1></button>
      </div>
      <div className="flex space-x-10 justify-center items-center mt-20">
        <div className="border p-3 w-1/5 border-[#0EFF00]">
          <h1 className="arcade text-md mb-4 space-mono text-[#0EFF00]">Step 1</h1>
          <h3 className="text-xs text-[#0EFF00]">Get started by connecting your ETH Wallet</h3>
        </div>
        <ChevronsRight className="text-[#0EFF00]" />
        <div className="border p-3 w-1/5 border-[#0EFF00]">
          <h1 className="arcade text-md mb-4 space-mono text-[#0EFF00]">Step 2</h1>
          <h3 className="text-xs text-[#0EFF00]">Press the launch button to discover beyond the sky</h3>
        </div>
        <ChevronsRight className="text-[#0EFF00]" />

        <div className="border p-3 w-1/5 border-[#0EFF00]">
          <h1 className="arcade text-md mb-4 space-mono text-[#0EFF00]">Step 3</h1>
          <h3 className="text-xs text-[#0EFF00]">Top the leader board and win a surprise reward</h3>
        </div>

      </div>
      </div>
      :
      <div className="z-30">
              <div className="flex justify-between items-center p-5">
        <Rocket className="text-[#0EFF00]" />
        <button onClick={() => open()} className="border-[#0EFF00] items-center border text-[#0EFF00] p-2 flex space-x-3">{!isConnected ? <h1>Connect wallet</h1> : <h1>0x...{address.slice(-4)}</h1>}
        <img className="w-8 h-8" src="https://api.dicebear.com/8.x/identicon/svg?seed=${address}" />
        </button>
      </div>
      {rocket == false ?
      <Rocketlaunch /> :
      <Rocketdashboard avgPing={avgPing} connectablePeers={connectablePeers} />
      }
      </div>
  }
    </main>
  );
}

export const getServerSideProps = async () => {
  const avgPing = await Prometheus.getAvgPing();
  const connectablePeers = await Prometheus.getConnectablePeers();

  return {
    props: {
      avgPing,
      connectablePeers,
    },
  };
};
