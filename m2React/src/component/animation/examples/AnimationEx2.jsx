import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';

//todo  gsap.to() used to animate an element from a set of value to its current state
//todo  it allows to define both starting and ending values for an animation

const AnimationEx2 = () => {

    let boxRef =useRef();

   useEffect(()=>{
    gsap.fromTo(boxRef.current,
        { opacity :0 ,scale :0 },
       {opacity:1,scale:1,duration:2,delay:0.5,ease:"back.out(1.7)"})
   },[])

  return (
    <div
    ref={boxRef}
    className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
     <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
    </div>
  )
}

export default AnimationEx2