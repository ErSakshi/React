import React, { useEffect, useState } from 'react'

//! it will also executes at end of mounting
//!if we pass any dependany into an dependancy array , useEffects() call-back function will get called only when
//!   there is some/any  change into the dependancy
//! this useEffect call-back function will get called every-time whenever there is change into the dependancy value 
const USeEffectEx3 = () => {
    let[state,setState]=useState(0)
    

    useEffect(()=>{
        console.log("useEffect function callback when function is called back");
        
    },[state])
  return (
    <div>
        <h1>Count :{state}</h1>
        <button onClick={()=>{setState(state+1)}} className='bg-orange-400 text-white px-3 rounded-md'>Increment</button>
    </div>
  )
}

export default USeEffectEx3