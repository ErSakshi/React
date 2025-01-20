import React, { useState } from 'react'

const SpyGlass = () => {
  let[coordinates,setCoordinates]=useState({x:0,y:0});

  let handleMouseMove=(e)=>{
    setCoordinates({x:e.clientX,y:e.clientY});
  }
   return(
    <div onMouseMove={handleMouseMove} className="relative p-10">
    <div className="absolute top-0 left-0 p-2 bg-white text-black rounded-md">
      X: {coordinates.x}, Y: {coordinates.y}
    </div>
    <p className=" text-xl font-bold text-red-500">
      You’re being watched!
    </p>
  </div>
   )
}

export default SpyGlass