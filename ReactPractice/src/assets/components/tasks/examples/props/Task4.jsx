import React, { useRef, useState } from 'react'

//! Pass a default prop value for a component that displays a user's favorite color
const Task4 = ({props}) => {
  console.log(props);
  
  let divRef = useRef()
  
  return (
    <div ref={divRef} className='w-full h-[500px]'>
     <button
    onClick={()=>{
        divRef.current.style.background=props
    }} className='bg-slate-900 text-white p-2 '>click</button>
    </div>
  )
}

export default Task4