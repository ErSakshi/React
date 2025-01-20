import React from 'react'
import { useState } from 'react';

const LazyButton = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
      setTimeout(() => setMessage("Huh? Oh, sorry, I was on a break."), 2000);
    };
  
    return (
      <div>
        <button onClick={handleClick} className="px-6 py-3 bg-green-500 text-white rounded-md">
          Click Me
        </button>
        {message && <p>{message}</p>}
      </div>
    );
}

export default LazyButton