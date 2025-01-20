import React, { useEffect, useState } from 'react'

//! we can pass multiple dependancies.
//! if there is any change in any of the dependancy value the call-back function will get called 
//! the sequence of multiple dependencies does not matter
const UseEffectEx4 = () => {
    let[state,setState]=useState(0)
    let[state2,setState2]=useState(0)

    useEffect(()=>{
        console.log("useEffect function is called");
        
    },[state,state2])

  return (
    <div>
        <button onClick={()=>{setState(state+1)}} className='bg-orange-400 px-4 rounded-md'>state :{state}</button>
        <button onClick={()=>{setState2(state2+1)}} className='bg-orange-400 px-4 rounded-md'>state2 :{state2}</button>
    </div>
  )
}

export default UseEffectEx4