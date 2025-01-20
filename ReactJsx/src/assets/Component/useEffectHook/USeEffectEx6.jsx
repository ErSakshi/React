import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const USeEffectEx6 = () => {
    let[state1,setState1]=useState(0)
    let[state2,setState2]=useState(0)
    let[state3,setState3]=useState(0)
    let[state4,setState4]=useState(0)
   

    useEffect(()=>{
        setState2(state2+100)
    },[state1])

    useEffect(()=>{
        setState3(state3+50)
    },[state2])

    useEffect(()=>{
        setState4(state4+20)
    },[state3])
   

  return (
    <div>
        <span className='px-4'>state1 : {state1}</span>
        <span className='px-4'>state2 : {state2}</span>
        <span className='px-4'>state3 : {state3}</span>
        <span className='px-4'>state4 : {state4}</span><br /> <br />
        <button onClick={()=>{setState1(state1+1)}}
         className='bg-purple-600 text-white px-4 rounded-lg'>click</button>
         
    </div>
  )
}

export default USeEffectEx6