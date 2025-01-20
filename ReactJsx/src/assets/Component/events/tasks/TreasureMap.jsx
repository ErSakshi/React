import React from 'react'
import { useState } from 'react';

const TreasureMap = () => {
    const [blur, setBlur] = useState(true);

    return (
      <div 
        onMouseEnter={() => setBlur(false)} 
        onMouseLeave={() => setBlur(true)} 
        className={`transition-all duration-500 ${blur ? 'blur-2xl' : 'blur-0'}`}
      >
        <img src="treasure-map.jpg" alt="Treasure Map" className="w-full" />
        <p className="text-xl text-center">X marks the React component.</p>
      </div>
    );
}

export default TreasureMap