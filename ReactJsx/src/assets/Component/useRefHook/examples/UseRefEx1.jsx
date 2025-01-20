import React, { useRef } from 'react'

const UseRefEx1 = () => {
    let headingRef =useRef()

     let handleClick=()=>{
       // e.myHeading.background='red'
       headingRef.current.textContent="useRef kam kar raha hai...!"
       headingRef.current.style.backgroundColor='red'
       headingRef.current.style.color='white'
       headingRef.current.style.border='5px solid black '
       headingRef.current.style.padding='20px'
       headingRef.current.style.borderRadius='10px'
       console.log(heading.current.textContent);
       
     }
  return (
    <div className='flex flex-col h-[100vh] justify-center items-center'>
        <h1 ref={headingRef} >Heading</h1>
        <button onClick={handleClick}
        className='bg-orange-400 text-white rounded-md px-2 m-2'>click</button>
    </div>
  )
}

export default UseRefEx1