import React from 'react'

function TaskListNumbers() {
  return (
    <div id="tasklist" className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl text-white w-[45%] py-5 px-10 bg-red-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task </h3>
        </div>

        <div className='rounded-xl text-white w-[45%] py-5 px-10 bg-blue-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task </h3>
        </div>

        <div className='rounded-xl text-white w-[45%] py-5 px-10 bg-green-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task </h3>
        </div>

        <div className='rounded-xl text-white w-[45%] py-5 px-10 bg-pink-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task </h3>
        </div>
    </div>
  )
}

export default TaskListNumbers