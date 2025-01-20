import React, { useState } from 'react'

const Task10 = () => {

    let[count,setCount]=useState(0);
   
    let handleClick = ()=>{
        setCount(count+=1)
    }

  return (
    <div className='flex flex-col'>
        <h1>Cart Count : {count} product added</h1>
        <button  onClick = {handleClick} className='bg-green-950 text-white p-1 rounded-lg w-[10%]'>ADD TO CART</button>
    </div>
  )
}

export default Task10