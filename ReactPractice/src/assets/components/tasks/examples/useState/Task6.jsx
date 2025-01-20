import React, { useState } from 'react'

const Task6 = () => {

    let[count,setCount] = useState(0)

  return (
    <div>
        <h1 className='text-xl'>Count : {count}</h1>
        <button onClick={()=>{
            setCount(count+=1)
        }}
         className='bg-blue-500 text-white p-2 rounded-md m-2'>Increment</button>
        <button onClick={(e)=>{
            if(count>0){
                setCount(count-=1)
            }else{
                e.target.disable = true
            }
        }}
        className='bg-blue-500 text-white p-2 rounded-md m-2'>Decrement</button>

        <button onClick={()=>{
            setCount(count=0)
        }}
        className='bg-blue-500 text-white p-2 rounded-md m-2'>Reset</button>
    </div>
  )
}

export default Task6