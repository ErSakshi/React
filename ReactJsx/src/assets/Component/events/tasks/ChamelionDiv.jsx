import React from 'react'
import { useState } from 'react';

const ChamelionDiv = () => {
    const [color, setColor] = useState("bg-blue-500");

    const changeColor = () => {
      setColor(`bg-${["red", "green", "blue", "yellow"][Math.floor(Math.random() * 4)]}-500`);
    };
  
    return (
      <div onClick={changeColor} className={`${color} p-10 text-white text-center`}>
        I’m a chameleon, can’t catch me!
      </div>
    );
}

export default ChamelionDiv