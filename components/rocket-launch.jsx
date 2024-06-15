import React from 'react'

export default function Rocketlaunch() {
  return (
    <div>
        <div className="mt-20 flex justify-center">
        <img className='w-60 h-60' src='rocket.svg' />
        </div>
        <div className="mt-10 flex justify-center">
        <button className="text-[#032B00] bg-[#0EFF00] p-4">Launch spaceship</button>
        </div>
        <div className='flex justify-evenly mt-20'>
            <div className='border-[#0EFF00] p-4 border text-[#0EFF00] w-1/2'>
                <h1 className='arcade mb-4'>How to play?</h1>
                <div className='space-y-2'>
                <h3>- Press the 'Launch spaceship' button to begin</h3>
                <h3>- A Waku light node automatically starts running in your device</h3>
                <h3>- For every 10s, your Waku node automatically sends fuel for spaceship to travel 1km</h3>
                <h3>- Keep your browser tab open to make the spaceship travel farther</h3>
                <h3>- The spaceship traveling to the farthest distance would be on the top of the leaderboard</h3>
                </div>
            </div>
            <div className='border-[#0EFF00] p-4 border text-[#0EFF00] w-1/3'>
            <h1 className='arcade mb-4'>But why?</h1>
                <div className='space-y-2'>
                <h3>This is a dogfooding experiment to aggregate data related to Waku's reliability. Data collected by this experiment would be helpful in analyzing and benchmarking Waku's communicaiton reliability.</h3>
                </div>
                <h1 className='arcade mb-4 mt-8'>Is there a reward?</h1>
                <div className='space-y-2'>
                <h3>No, this campaign is voluntary and does not promise any kind of reward</h3>
                </div>
</div>
        </div>
    </div>
  )
}
