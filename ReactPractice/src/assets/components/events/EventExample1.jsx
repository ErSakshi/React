import React, { useState } from 'react'

const EventExample1 = () => {
    let[state,setState]=useState({
        user:"",
        pass:"",
        id:Date.now(),
        skills:[],
        users:[]
    })
    let{user,pass,id,skills,users}=state
    let handleChange=(e)=>{
        let{name,value,checked}=e.target 
        setState({...state,[name]:value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj={
            user:user,
            pass:pass,
            id:id,
            skills:skills
            
        }
        setState({
            user:"",
            pass:"",
            id:Date.now(),
            skills:[],
            users:[...users,tempObj]
        })
        console.log(state);
        
    }
  

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div className='w-[30%] h-[40vh] m-auto p-8 py-5 my-40  bg-indigo-200 rounded shadow-xl'>
            <input type="text" onChange={handleChange} name='user' value={user} required placeholder='username' className='w-[100%] border-[1px] m-2 border-indigo-400 p-3 rounded shadow-lg' />
            <input type="text" onChange={handleChange} name='pass' value={pass} required placeholder='password' className='w-[100%] border-[1px] m-2 border-indigo-400 p-3 rounded shadow-lg' />
            <div className='flex justify-around p-1'>
            <label htmlFor=" " className='flex justify-between font-semibold'>Skills:</label>
            
            <input type="checkbox"  name="javaScript" value={skills.javaScript}  checked={skills.includes('javaScript')}
            onChange={handleChange} className=''/>
            <label htmlFor=""className=''  >javaScript</label>
            <input type="checkbox" name="react" value={skills.react}   checked={skills.includes('react')}
            onChange={handleChange} className=' '/>
            <label htmlFor="" className=' '>reacts</label>
            </div>
           
            <button className='w-[100%] border-[1px] m-2 p-3 bg-indigo-400 rounded-lg'>submit</button>
        </div>
        </form>

    </div>
  )
}

export default EventExample1