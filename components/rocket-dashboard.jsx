import React, {useState, useEffect} from 'react'
import { ArrowRightIcon, ChevronsRight, Github, Rocket } from "lucide-react";
import Prometheus from '@/utils/prometheus';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


const Rocketdashboard = ({ avgPing, connectablePeers }) => {

    return (
        <div>
            <div className='flex justify-center p-5'>
                <div className='p-5 border border-[#0EFF00] bg-[#0EFF00] bg-opacity-5 h-96 w-full flex space-x-20'>
                    <div className='w-8/12 mt-10'>
                        <h1 className='text-[#0EFF00] text-xs mb-10'>// Leaderboard</h1>

                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[80%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <HoverCard>
                                            <HoverCardTrigger><img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <div className='flex space-x-5 items-center'>
                                                <img className="w-8 h-8" src="https://api.dicebear.com/8.x/identicon/svg?seed=0x..abc" />
<h1>0x...abc</h1>
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">1000km</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[60%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">700km</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[30%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">400km</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[30%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">400km</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[30%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">400km</span>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-4/12'>
                        <div className='border border-[#0EFF00] bg-[#0EFF00] bg-opacity-5 h-92 w-full p-5 text-[#0EFF00] '>
                            <h1 className='text-[#0EFF00] text-xs'>// Process</h1>
                            <div className='text-[#0EFF00] mt-5 text-sm'>Initializing the node... [Success]</div>
                            <div className='text-[#0EFF00] mt-2 text-sm'>Discovering and connecting to peers... [Success]</div>
                            <div className='text-[#0EFF00] mt-2 text-sm'>Initializing encoders and decoders... [Success]</div>
                            <div className='text-[#0EFF00] mt-2 text-sm'>Setting up Telemetry... [Success]</div>
                            <div className='border border-[#0EFF00] bg-[#0EFF00] bg-opacity-5 h-32 w-full  mt-7 p-5 text-[#0EFF00] '>
                            <h1 className='text-[#0EFF00] text-xs'>// Your spaceship</h1>
                            <div className="flex items-center gap-2 mt-7">
                                <div className="relative w-full h-2 bg-gray-200 rounded-none dark:bg-transparent">
                                    <div className="absolute left-0 top-0 h-full rounded-none w-[10%] flex items-center justify-end pr-2 border-b-2 border-dashed border-opacity-30 border-green-500">
                                        <img className='w-10 h-10 rotate-90' src='rocket.svg' />
                                    </div>
                                </div>
                                <span className="text-sm  text-[#0EFF00]">400km</span>
                            </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-5 space-x-10'>
                <div className='p-5 border border-[#0EFF00] h-96 w-1/2'>
                    <h1 className='text-[#0EFF00] text-xs'>// Benchmarks</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// Number of nodes</h3>
                                <p className="text-[#0EFF00] text-xl">{connectablePeers}</p>
                            </div>
                        </div>
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// Latency in messages</h3>
                                <p className="text-[#0EFF00] text-xl">{avgPing}</p>
                            </div>
                        </div>
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// Connected peers</h3>
                                <p className="text-[#0EFF00] text-xl">742</p>
                            </div>
                        </div>
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// % of succesful delivery</h3>
                                <p className="text-[#0EFF00] text-xl">742</p>
                            </div>
                        </div>
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// % of failed delivery</h3>
                                <p className="text-[#0EFF00] text-xl">742</p>
                            </div>
                        </div>
                        <div className="border-[#0EFF00] border hover:bg-[#0EFF00] hover:bg-opacity-10">
                            <div className="p-4 space-y-7">
                                <h3 className="text-xs text-[#0EFF00]">// Sucess : Failure</h3>
                                <p className="text-[#0EFF00] text-xl">742</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5 border border-[#0EFF00] h-96 w-1/2 space-y-4'>
                    <h1 className='text-[#0EFF00] text-xs'>// Status</h1>
                    <div className=' border border-[#0EFF00] flex justify-between'>
                        <div className='m-5'>
                            <h1 className='text-[#0EFF00]'>Node status</h1>
                        </div>
                        <div className='bg-[#0EFF00] h-full p-5 text-[#032B00] w-40'>Active</div>
                    </div>
                    <div className=' border border-[#0EFF00] flex justify-between'>
                        <div className='m-5'>
                            <h1 className='text-[#0EFF00]'>Peer discovery</h1>
                        </div>
                        <div className='bg-[#0EFF00] h-full p-5 text-[#032B00] w-40'>Completed</div>
                    </div>
                    <div className=' border border-[#0EFF00] flex justify-between'>
                        <div className='m-5'>
                            <h1 className='text-[#0EFF00]'>Initializing encoders and decoders</h1>
                        </div>
                        <div className='bg-[#0EFF00] h-full p-5 text-[#032B00] w-40'>Completed</div>
                    </div>
                    <div className=' border border-[#0EFF00] flex justify-between'>
                        <div className='m-5'>
                            <h1 className='text-[#0EFF00]'>Telemetry</h1>
                        </div>
                        <div className='bg-[#0EFF00] h-full p-5 text-[#032B00] w-40'>Ready</div>
                    </div>
                </div>
            </div>
        </div>
    )
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


export default Rocketdashboard;