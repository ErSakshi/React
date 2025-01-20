import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {
    let[state,setState]=useState(0);

   //! useEffect hook without any array dependancy is useless it is like normal block 
   //! it will get executes every time without change in state
   //! we done this example to check can we use useEffect hook without any dependancy array
   //! we must pass empty dependancy array otherwise useEffect hook is of no use  
    useEffect(()=>{
        console.log("useEffect callback function is called");
        
    })

  return (
    <div>
        <h1>Count:{state}</h1>
        <button onClick={()=>{setState(state+1)}} className='bg-orange-400 text-white px-3 rounded-md'>Increment</button>
    </div>
  )
}

export default UseEffectEx1