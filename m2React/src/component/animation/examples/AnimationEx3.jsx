import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
gsap.registerPlugin()

//! Animations with Timeline
//todo Timeline provides control over playback and synchronization
const AnimationEx3 = () => {
    let boxRef = useRef()
    let boxRef2 = useRef()
    let boxRef3 = useRef()

    useEffect(() => {
        let tl = gsap.timeline();
        
        tl.to(boxRef.current, { x: 100, duration: 1 })
          .to(boxRef2.current, { y: 300, duration: 1 })
          .to(boxRef3.current, { x: 100, duration: 1 })
          .to(boxRef2.current, { rotation: 360, duration: 1 })
          .to(boxRef3.current, { scale: 1.5, duration: 1 })
          .to(boxRef.current, { scale: -1, rotation: 360, duration: 1 })
          .to([boxRef.current, boxRef2.current, boxRef3.current], {
            y: 100,
            stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
            duration: 1
        });

    }, [])

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
        </div>
    )
}

export default AnimationEx3
