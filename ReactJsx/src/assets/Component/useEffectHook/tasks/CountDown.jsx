import React, { useEffect, useState } from 'react'

const CountDown = () => {
    let[count,setCount]=useState(10)

    useEffect(()=>{
       let timer=setInterval(()=>{
        setCount((e)=>{
            if(e==0){
                clearInterval(timer)
                return 0;
            }
            return e-1
        })
       },1000)
       return clearInterval(count)
    },[])
  return (
    <div className='w-[30vw] m-5' >
       <h1 className='h-[5vh] w-[30vw] bg-indigo-400 text-4xl px-4 rounded-md'> {count==0?"Time's Up":count}</h1>
        <p className='bg-red-500 font-bold rounded-md px-3'> seconds remaining...
        </p>
        </div>
  )
}

export default CountDown