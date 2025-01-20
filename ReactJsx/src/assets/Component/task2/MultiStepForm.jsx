import React, { useState } from 'react'

const MultiStepForm = () => {
  let[username,setUsername]=useState('');
  let[email,setEmail]=useState('')

  let handleClick=(e)=>{
     e.preventDefault();
     confirm(`check your entered username as ${username} and email as ${email} are correct `)
     set
  }
  return (
    <div>
      <form action="">
         <input type="text"   name= "username" placeholder="username" onChange={(e)=>{e.target.username}} className='border-[1px] border-gray-800 px-2 my-2'/>
         <input type="email"  name="email" placeholder="password" onChange={(e)=>{e.target.email}} className='border-[1px] border-gray-800 px-2 my-2'/>
         <button onClick={handleClick}
         className='bg-blue-500 text-white px-3'>submit</button>
      </form>

    </div>
  )
}

export default MultiStepForm