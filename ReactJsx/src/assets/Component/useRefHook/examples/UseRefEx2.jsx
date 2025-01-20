import React, { useRef, useState } from 'react'

const UseRefEx2 = () => {
    let inputRef=useRef();
    let[state,setState]=useState("");

    let handleClick=((e)=>{
        e.preventDefault()
        console.log(inputRef.current.value);
        setState(inputRef.current.value)
        
    })
  return (
    <div>
        <form action="">
        <input type="text" ref={inputRef}  className='border-[1px]'/>
        <button onClick={handleClick}
         className='bg-orange-400 text-white rounded-md px-2 m-2'>click</button>
         <p>{state}</p>
        </form>
    </div>
  )
}

export default UseRefEx2