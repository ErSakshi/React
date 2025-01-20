import React, { useState } from 'react'

const EventEx3 = () => {
    let[state,setState]=useState({
        username:"",
        password:""
    })
    //here {...state is spread operator}
    let handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value});
      console.log(state);
      
    }
  return (
    <div className='p-10'>
        <form action="" className='border-[1px] border-gray-800 px-10 py-5 w-[50%]'>
            <input name='username'
            value={state.username}
            onChange={handleChange}
            placeholder='username'
            className='border-[2px] border-gray-800 rounded-md'
             type="text" /><br/><br/>
               <input name='password'
               value={state.password}
                onChange={handleChange}
               placeholder='password'
                className='border-[2px] border-gray-800 rounded-md'
             type="text" /><br/><br/>
             <button className='border-[2px] border-gray-100 rounded-md px-5 bg-slate-700 text-white'>click</button>
        </form>
        <br />
        <hr />
        <p>username:{state.username}</p>
        <p>password:{state.password}</p>
    </div>
  )
}

export default EventEx3