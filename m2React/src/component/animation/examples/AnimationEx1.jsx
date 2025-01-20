import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

//! gsap.to() with advanced easing and callbacks
//todo    gsap.to() is used to animate an element to a set of values
const AnimationEx1 = () => {
  let boxRef = useRef();

  useEffect(() => {
    console.log(boxRef.current);  // Check if the reference is correct.

    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 500,  // Move to the right by 500px
        rotation: 360,  // Rotate by 180 degrees
        duration: 2,  // Animation duration of 2 seconds
        ease: "power4.out",  // Easing function
        onComplete: () => {
          console.log("Animation Completed");
        },
        onStart: () => {
          console.log("Animation Started!");
        }
        
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="border border-blue-400 w-[100px] h-[100px] flex items-center justify-center">
       <img src="https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" />
      </div>
  )
}
export default AnimationEx1

   
