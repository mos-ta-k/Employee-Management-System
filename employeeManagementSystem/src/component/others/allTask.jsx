import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-gray-100 p-5 mt-5 rounded h-48 overflow-auto'>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800 font-semibold'>Employee</h2>
            <h3 className='text-gray-800'>Task Title</h3>
            <h5 className='text-gray-800'>Status</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>John Doe</h2>
            <h3 className='text-gray-800'>Make a UI design</h3>
            <h5 className='text-green-600'>Completed</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>Jane Smith</h2>
            <h3 className='text-gray-800'>Develop backend API</h3>
            <h5 className='text-yellow-600'>In Progress</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>Bob Johnson</h2>
            <h3 className='text-gray-800'>Write documentation</h3>
            <h5 className='text-red-600'>Pending</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>Alice Brown</h2>
            <h3 className='text-gray-800'>Test application</h3>
            <h5 className='text-blue-600'>Review</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>Charlie Wilson</h2>
            <h3 className='text-gray-800'>Fix bugs</h3>
            <h5 className='text-yellow-600'>In Progress</h5>
        </div>
        <div className='bg-white flex justify-between py-2 px-4 rounded mb-2 shadow-sm'>
            <h2 className='text-gray-800'>Diana Lee</h2>
            <h3 className='text-gray-800'>Update database</h3>
            <h5 className='text-green-600'>Completed</h5>
        </div>
    </div>
  )
}

export default AllTask