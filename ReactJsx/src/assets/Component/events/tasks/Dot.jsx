import React from 'react'
import { useState } from 'react';

const Dot = () => {
  let [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  let handleMouseMove = (e) => {
    setDotPosition({ x: e.clientX, y: e.clientY });
  };
   return(
    <div onMouseMove={handleMouseMove} className="relative h-screen bg-gray-200">
    <div 
      className="absolute w-4 h-4 bg-black rounded-full"
      style={{ top: dotPosition.y - 2, left: dotPosition.x - 2 }}
    />
    <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-xl text-red-600">
      Wow, such skills! The dot is impressed.
    </p>
  </div>
   )
}

export default Dot