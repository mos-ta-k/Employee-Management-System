import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("email is" ,email)
    console.log("password is", password);

    setEmail("")
    setPassword("")
    
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 p-20 rounded-xl border-emerald-600'>
        <form 
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>
          
          <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value )
              }
            }
            required
            type="email"
            className='border-2 border-emerald-600 px-3 text-xl text-black outline-none bg-transparent placeholder-gray-400 py-3 rounded-full'
            placeholder='enter your email' />

          <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
            type="password"
            className='border-2 border-emerald-600 px-3 text-xl text-black outline-none bg-transparent mt-5 placeholder-gray-400 py-3 rounded-full'
            placeholder='enter your password' />

          <button type="submit" className='border-2 rounded-full bg-emerald-600 mt-5 text-white px-12 py-5 outline-none text-xl'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login