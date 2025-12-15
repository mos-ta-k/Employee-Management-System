import React, { useEffect, useState } from 'react'
import Login from './component/Auth/Login.jsx'
import './App.css'
import EmployeeDashboard from './component/dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './component/dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'

function App() {
  useEffect(() => {
    setLocalStorage()
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log("this is admin");
    }else if(email == 'user@me.com' && password == '123'){
      setUser('user')
      console.log("this is user")
    }
    else{
      setUser(null)
      alert("vag sudanir poya!!")
    }
  }

  return (
    <div className='min-h-screen bg-gray-900'>
      
      {!user ? <Login handleLogin= {handleLogin}/>: user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/> }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App