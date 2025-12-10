import React from 'react'
import Header from "../others/header"
import TaskListNumbers from '../others/taskListNumbers'
import Tasklist from '../TaskList/tasklist'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen'>


            <Header/>
            <TaskListNumbers/>
            <Tasklist/>
        </div>
    </div>
  )
}

export default EmployeeDashboard 