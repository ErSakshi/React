
// ! GSAP plugins
// todo  ScrollTrigger : Creates animations that are triggered when an element  scrolls into view 
// todo  ScrollSmoother : Provides smooth scrolling effects
// todo  MotionPathPlugin : Makes it easy to animate element along a motion path(SVG or other)
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimationEx5 = () => {
    let boxRef = useRef()
    let boxRef2 = useRef()
    let boxRef3 = useRef()

    useEffect(() => {
        // Animation for box 1
        gsap.to(boxRef.current, {
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true
            },
            x: 500,
            rotation: 360,
            duration: 1
        })

        // Animation for box 2
        gsap.to(boxRef2.current, {
            scrollTrigger: {
                trigger: boxRef2.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true
            },
            x: 500,
            rotation: 360,
            duration: 2
        })

        // Animation for box 3
        gsap.to(boxRef3.current, {
            scrollTrigger: {
                trigger: boxRef3.current,
                start: "top 100%",
                end: "bottom 20%",
                scrub: true,
                markers: true
            },
            x: 500,
            rotation: 360,
            duration: 3
        })
    }, [])

    return (
        <div>
            <div
                ref={boxRef}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>

            <div className="text-xl text-gray-600 py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, numquam ex...
            </div>

            <div
                ref={boxRef2}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>

            <div className="text-xl text-gray-600 py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis mollitia quasi dolor...
            </div>

            <div
                ref={boxRef3}
                className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
            </div>
        </div>
    )
}

export default AnimationEx5
