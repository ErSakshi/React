import React from 'react'
import { useState } from 'react';

const ShakeBox = () => {
    const [text, setText] = useState("Hover over me!");

    const handleMouseEnter = () => {
      setText("Stop tickling me!");
    };
  
    const handleMouseLeave = () => {
      setText("Hover over me!");
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-10 py-5 border bg-gray-200 hover:animate-shake cursor-pointer transition-all"
      >
        {text}
      </div>
    );
}

export default ShakeBox