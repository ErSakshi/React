import React from 'react'
import { useState } from 'react';

const ShakeButton = () => {
    const [shake, setShake] = useState(false);

    const handleClick = (e) => {
      if (e.target.innerText !== 'Correct Button') {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
     
    };
  
    return (
      <div>
        <button
          onClick={handleClick}
          className={`px-6 py-3 bg-blue-500 text-white rounded-lg ${shake ? 'animate-shake' : ''}`}
        >
          Wrong Button
        </button>
        <button
          onClick={handleClick}
          className={`px-6 py-3 bg-green-500 text-white rounded-lg ${shake ? 'animate-shake' : ''}`}
        >
          Correct Button
        </button>
        {shake && <p className="text-red-500">Nope! Try harder!</p>}

      </div>
    );
}

export default ShakeButton