import React, { useCallback, useState } from 'react'
import UseCallBackEx1Child from './UseCallBackEx1Child'

const UseCallBackEx1 = () => {
  let [state1,setState1]=useState(0)
  let [state2,setState2]=useState(0)
  console.log("Parent");
  
  //! if this function is passed it will execute again and again as state changes
  // let funct =()=>{
  //   console.log("normalfunction");
    
  // }

  let funct=useCallback(()=>{
     console.log("kuch bhi nhi");
     
  },[state1])

  return (
    <div className=' d-flex '>
    <div>
        <p>Parent</p>
        <button onClick={()=>{setState1(state1+1)}}
        className='bg-slate-500 px-3 rounded-md text-white mx-3'>state1 : {state1}</button>
        <button onClick={()=>{setState2(state2+1)}}
        className='bg-slate-500 px-3 rounded-md text-white'>state2 : {state2}</button>
   
    </div>
    <hr />

      <div> 
         <UseCallBackEx1Child props={funct}></UseCallBackEx1Child>
      </div>
    </div>
  )
}

export default UseCallBackEx1