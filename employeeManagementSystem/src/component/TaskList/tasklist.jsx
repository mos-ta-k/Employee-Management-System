import React from 'react'

function Tasklist() {
  return (
    <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 w-full flex-nowrap mt-10 py-5 overflow-x-auto text-white'>
        <div className='flex-shrink-0 h-full w-[300px] bg-purple-400 rounded-xl p-5 items-center'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded color-white'>High</h3>
                <h4>20feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta cupiditate atque reiciendis necessitatibus ab!</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 items-center'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded color-white'>High</h3>
                <h4>20feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta cupiditate atque reiciendis necessitatibus ab!</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5 items-center'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded color-white'>High</h3>
                <h4>20feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta cupiditate atque reiciendis necessitatibus ab!</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 items-center'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded color-white'>High</h3>
                <h4>20feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta cupiditate atque reiciendis necessitatibus ab!</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl p-5 items-center'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded color-white'>High</h3>
                <h4>20feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta cupiditate atque reiciendis necessitatibus ab!</p>
        </div>
        
    </div>
  )
}

export default Tasklist