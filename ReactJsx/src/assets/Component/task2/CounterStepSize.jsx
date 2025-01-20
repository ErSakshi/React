import React, { useState } from 'react'

const CounterStepSize = () => {
    let[count,setCount]=useState(0)
    let[stepCount,setStepCount]=useState(2)
  return (
    <div className='absolute top-32 left-1/3 p-4'>
        <div className='flex gap-20'>
        <h1 className='text-2xl font-bold my-4'>Count : {count}</h1>
        <h1 className='text-2xl font-bold my-4'>Step-Count : {stepCount}</h1>
        </div>
        <button onClick={()=>{
            setCount(count+1)
            setStepCount(count+stepCount)
        }}
         className='bg-orange-400 text-white p-2 m-3 rounded-lg shadow-lg'>Increment</button>
        <button className='bg-blue-400 text-white p-2 m-3 rounded-lg shadow-lg'>Decrement</button>
        <button className='bg-green-400 text-white p-2 m-3 rounded-lg shadow-lg'>Reset</button>
    </div>
  )
}


export default CounterStepSize