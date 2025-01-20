import React, { useState } from 'react'

const CounterApp = () => {
    let[count,setCount]=useState(0)
    let[disable,setDisabled]=useState(false)

  return (
    <div>
           <h1 className='text-4xl font-semibold flex justify-center align-middle  absolute top-36 left-1/3 underline p-1 '>CounterApp</h1>
        <div className=' absolute top-52 left-1/3  m-auto p-5 border-[2px] border-gray-800'>
     
        <h1 className='font-bold text-2xl m-4'>Count : {count}</h1>
        <button onClick={()=>{setCount(count+1)}}
        className='bg-orange-500 text-white p-2  m-2 rounded-md'>Increment</button>
        <button onClick={(e)=>{
            if(count>0){
                setCount(count-1)
            }else{
                setDisabled(true)
            }
        }}
        className='bg-blue-500 text-white p-2 m-2 rounded-md'>Decrement</button>
        <button onClick={()=>{setCount(count=0)}}
        className='bg-green-500 text-white p-2 m-2 rounded-md'>Reset</button>
    </div>
    </div>
  )
}

export default CounterApp