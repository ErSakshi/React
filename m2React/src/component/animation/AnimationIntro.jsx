import React from 'react'
import AnimationEx1 from './examples/AnimationEx1'
import AnimationEx2 from './examples/AnimationEx2'
import AnimationEx3 from './examples/AnimationEx3'
import AnimationEx4 from './examples/AnimationEx4'
import AnimationEx5 from './examples/AnimationEx5'
import AnimationEx6 from './examples/AnimationEx6'
import PlantSlider from './examples/PlantSlider'
import PlantSlider2 from './examples/PlantSlider2'
import UsegsapEx4 from './examples/Usegap'

const AnimationIntro = () => {
  return (
    <div>
      {/* <AnimationEx1></AnimationEx1> */}
      {/* <AnimationEx2></AnimationEx2> */}
      {/* <AnimationEx3></AnimationEx3> */}
      {/* <AnimationEx4></AnimationEx4> */}
      {/* <AnimationEx5></AnimationEx5> */}
      {/* < AnimationEx6></ AnimationEx6> */}
      {/* <PlantSlider></PlantSlider> */}
      {/* <PlantSlider2></PlantSlider2> */}
     
    </div>
  )
}

export default AnimationIntro






// import React, { useEffect, useRef } from 'react'
// import {gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);






// const AnimationIntro = () => {
//     let headingRef=useRef()
//     let imageRef=useRef()

//   useEffect(()=>{
//     gsap.to('h1',{
//         x : 400,
//         duration : 1
//     })
//   },[])
//   // useEffect(()=>{
//   //   gsap.to(imageRef,{
//   //       x : 400,
     
//   //       duration : 1
//   //   })
//   // },[])
//   useEffect(() => {
//     gsap.to("#myElement", {
//       scrollTrigger: {
//         trigger: "#myElement",
//         start: "top center", // When the top of the element reaches the center of the viewport
//         end: "bottom top",   // When the bottom reaches the top of the viewport
//         scrub: true          // Smooth scrolling animation
//       },
//       x: 400,
//       duration: 2,
//     });
//   }, []);
//   return (
//     <div>
//       <div className='w-[50%] h-[20vh] bg-slate-400 px-3 my-6 mx-48 rounded-lg shadow-lg'>
//            <h1 ref={headingRef} className='text-green-700 font-semibold italic text-4xl'>The Green Corner</h1>
//           </div>
//          <div
//         id="myElement"
//         style={{
//           width: '200px',
//           height: '100px',
//           backgroundColor: '#ff6347',
//           color: 'white',
//           textAlign: 'center',
//           lineHeight: '100px',
//           marginTop: '200px', // To make sure it's not on top of the viewport initially
//         }}
//       >
//         Scroll to Animate
//       </div>
//     </div>
//   )
// }

// export default AnimationIntro


// /* <div className='w-[50%] h-[85vh] bg-slate-400 px-3 my-6 mx-48 rounded-lg shadow-lg'>
//            <h1 ref={headingRef} className='text-green-700 font-semibold italic text-4xl'>The Green Corner</h1>

//            {/* <img src="https://media.istockphoto.com/id/1186067529/photo/asian-tropical-rainforest-forest-trees-nature-green-wood-backgrounds.jpg?s=2048x2048&w=is&k=20&c=P_ek26id6_9aXRM2KScmi5WgYJrHeSMepLpiVhLRO84=" alt="" />
//            <img  ref={imageRef} src="https://media.istockphoto.com/id/1313430214/photo/get-your-mind-free-and-forest-therapy-concept-young-girl-is-hiking-through-the-green-forest.jpg?s=2048x2048&w=is&k=20&c=RP-xSNsEX6RFhBSY0_kpCvO1ag4HcEJLWWRmadsRJCE=" alt="" className='w-[10%] absolute bottom-28 left-1/3' /> 
//            </div> */