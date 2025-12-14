import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/createTask'

function AdminDashboard() {
  return (
    <div className='h-screen bg-gray-900 text-white w-full p-10 '>
        <Header/>

        <CreateTask/>
        
    </div>
  )
}

export default AdminDashboard