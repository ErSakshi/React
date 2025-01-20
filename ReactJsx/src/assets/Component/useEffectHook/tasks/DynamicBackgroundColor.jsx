import React, { useEffect, useState } from 'react'

const DynamicBackgroundColor = () => {
    let[bgColor,setBgColor]=useState()
    let[isPause,setPause]=useState(false)

    let handleMouseMove=(e)=>{
       if(isPause){
        let x=e.clientX;
        let y=e.clientY;
        let color=`rgb(${x%255} ,${y%255},100)`
        setBgColor(color)
       }
      }

    useEffect(()=>{
     clearInterval(bgColor)
    },[])
  return (
    <div onMouseMove={handleMouseMove} style={{background:bgColor,height:"100vh",fontSize:"30px"}}>
     Move your mouse...!

     <button onClick={()=>{setPause(!isPause)
          {isPause ? setBgColor("white") :{}}
     }} 
        className='bg-gray-600 text-white px-2 rounded-md m-7'>{isPause?"Pause":"Resume"}</button>
    </div>
  )
}

export default DynamicBackgroundColor