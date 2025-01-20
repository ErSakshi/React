import React from 'react'
import { useState } from 'react';


const TimerBomb = () => {
  const [timer, setTimer] = useState(5);
  const [defused, setDefused] = useState(false);

  const startTimer = () => {
    if (timer === 5) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
        if (timer === 0) {
          clearInterval(interval);
          alert("BOOM!");
        }
      }, 1000);
    }
  };

  const defuseBomb = () => {
    setDefused(true);
    setTimer(5);
  };

  return (
    <div className="p-6 text-center">
      <button 
        onClick={startTimer} 
        onDoubleClick={defuseBomb} 
        className="px-6 py-3 bg-red-500 text-white rounded-md"
      >
        Defuse the Bomb
      </button>
      <div className="mt-4">
        {defused ? "Bomb defused!" : `Time left: ${timer}s`}
      </div>
    </div>
  );
}

export default TimerBomb