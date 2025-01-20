import React, { useEffect, useRef } from 'react'


//! Controlling TimeLine Playback
//todo   play() : Starts or resumes the timeline
//todo   pause() : Pauses the timeLine
//todo   reverse() : Reverses the timeLine's direction
//todo   seek(time) : Jumps to a specific point in the timeline
const AnimationEx4 = () => {
        let boxRef = useRef()
        let boxRef2 = useRef()
        let boxRef3 = useRef()

  useEffect(()=>{
    let tl=gsap.timeline({paused : true});
    tl.to(boxRef.current,{x:200,duration:1});
    tl.to(boxRef2.current,{y:300,duration:1});
    tl.to(boxRef3.current,{x :600 ,y : 200,duration : 1});
    
    document.getElementById("playBtn").addEventListener("click",()=>{tl.play();})
   
    let tl1=gsap.timeline({play : true});
    tl1.to('playBtn',{rotate : 360 , duration : 1})
    tl1.to(boxRef.current,{rotate : 360 ,duration:1});
    tl1.to(boxRef2.current,{rotate : 360 ,duration:1});
    tl1.to(boxRef3.current,{rotate : 360 ,duration : 1});
    
  },[])
    
  return (
    <div>
         <div
                ref={boxRef}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>
            <div
                ref={boxRef2}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>
            <div
                ref={boxRef3}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>
            <button id="playBtn">Click Me 🙃</button>
    </div>
  )
}

export default AnimationEx4