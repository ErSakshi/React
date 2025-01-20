import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

   let navigate = useNavigate()
  let handleClick =()=>{
   
    if(true){
      navigate('/home')
    }
  }
  return (
    <div>Login
    <input type="text"  className='border-[2px] border-gray-900'/>
    {/* <Link to='/home' className='bg-slate-800 text-white px-2'>Login</Link>   */}
    <button onClick={handleClick} className='bg-blue-500 text-white px-2 rounded-md'>Login</button>
    </div>
  )
}

export default Login 