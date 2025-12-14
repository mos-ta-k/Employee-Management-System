import React from 'react'

function CreateTask() {
  return (
    <div>

        <div className='mt-10'>
            <form className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto'>
                <h3 className='text-white text-2xl font-semibold mb-6'>Create New Task</h3>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <div className='mb-4'>
                            <label className='block text-gray-300 mb-2'>Task Title</label>
                            <input 
                                type="text" 
                                placeholder='Make a UI design'
                                className='w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label className='block text-gray-300 mb-2'>Assign To</label>
                            <input 
                                type="text" 
                                placeholder='Employee Name'
                                className='w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label className='block text-gray-300 mb-2'>Category</label>
                            <input 
                                type="text" 
                                placeholder='Design, Dev, etc'
                                className='w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label className='block text-gray-300 mb-2'>Due Date</label>
                            <input 
                                type="date" 
                                className='w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                    </div>
                    
                    <div>
                        <div className='mb-4'>
                            <label className='block text-gray-300 mb-2'>Description</label>
                            <textarea 
                                placeholder='Enter task description' 
                                className='w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500 h-40 resize-none'
                            ></textarea>
                        </div>
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition duration-200 mt-6'
                >
                    Create Task
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask