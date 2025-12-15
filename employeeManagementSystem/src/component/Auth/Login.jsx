import React, { useState } from 'react'
  
function Login({ handleLogin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()

    //passing password through handlogin so that it can compare user data from local storage when the submit button of the form is pressed!
    handleLogin(email, password)

    setEmail("")
    setPassword("")

    console.log(handleLogin)
    
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Login</h2>
        <form 
          onSubmit={submitHandler}
          className='flex flex-col'>
          
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input 
              value={email}
              onChange={(e)=>{
                  setEmail(e.target.value )
                }
              }
              required
              type="email"
              className='w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
              placeholder='Enter your email' />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
              type="password"
              className='w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
              placeholder='Enter your password' />
          </div>

          <button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition duration-200'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login