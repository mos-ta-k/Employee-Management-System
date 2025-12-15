import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/createTask'
import AllTask from '../others/allTask'

function AdminDashboard() {
  return (
    <div className='h-screen bg-[#111] text-white w-full p-10 '>
        <Header/>

        <CreateTask/>
        <AllTask/>  
        
    </div>
  )
}

export default AdminDashboard