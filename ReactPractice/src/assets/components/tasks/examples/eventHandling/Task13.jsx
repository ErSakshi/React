import React, { useState } from 'react'

const Task13 = () => {

    let[state,setState]=useState('')

    let remainingChar = 12 - state.length

    let handleChange = (e)=>{
        let{name,value}=e.target 
        setState(value)
    }
    console.log(state);
    
  return (
    <div>
        <input type="text"  onChange={handleChange} name='para' value={state} className='border-black border-[1px] ' />
        <p>{state}</p>
        <p>length : {state.length}</p>
         <p className="text-red-500">
          Please enter {remainingChar} more character{remainingChar > 1 ? 's' : ''} to reach 12 characters.
        </p>
    </div>
  )
}

export default Task13