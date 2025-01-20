import React, { useEffect, useRef, useState } from 'react'

const AnimationEx6 = () => {
    let[triggerAnimation,setTriggerAnimation]=useState(false);
    let boxRef = useRef()

    useEffect(()=>{
        if(triggerAnimation)
        {
            gsap.to(boxRef.current,{
                x:500,rotation:360,duration :2
            }),[triggerAnimation]
        }
    })
  return (
    <div>
        <button onClick={()=>{setTriggerAnimation(!triggerAnimation)}}
            className='bg-slate-700 rounded-lg text-white p-3 m-4'>Trigger Animation</button>
        <div ref={boxRef} className='w-40 h-10 bg-indigo-400 px-5'>Animate Me!</div>
    </div>
  )
}

export default AnimationEx6