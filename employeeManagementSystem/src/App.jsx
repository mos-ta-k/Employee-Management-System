import React from 'react'
import Login from './component/Auth/Login.jsx'
import './App.css'
import EmployeeDashboard from './component/dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './component/dashboard/AdminDashboard.jsx'

function App() {
  return (
    <div className='min-h-screen bg-gray-900'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </div>
  )
}

export default App