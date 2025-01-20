import React, { useState } from 'react'

const Task21 = () => {

    let[state,setState]=useState({username:""})
    let[isSubmit,setISSubmit]=useState(false)

   let handleChange = (e)=>{
      let{name,value}=e.target 
      setState({...state,[name]:value})
   }

   let handleClick = (e)=>{
     e.preventDefault()
     setState({username : state.username})
     setISSubmit(true)
   }

  return (
    <div>
        <form action="">
            <input type="text"  onChange={handleChange} name='username' value={state.username} className='border-black border-[1px]'/>
            <button onClick={handleClick} className='p-2 bg-blue-400
            text-white rounded-md m-2'>Submit</button>
            {/* <h1 className='m-5'>{isSubmit && state.username != ''? (`Welcome ${state.username}`) : "Enter something"}</h1> */}
            {isSubmit && state.username !== '' ? (<h1>Welcome {state.username}</h1>):''}
        </form>
    </div>
  )
}

export default Task21