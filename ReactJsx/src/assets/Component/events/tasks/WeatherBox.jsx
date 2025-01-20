import React from 'react'
import { useState } from 'react';

const WeatherBox = () => {
    const [message, setMessage] = useState("Cloudy vibes today.");

    return (
      <div 
        onContextMenu={() => setMessage("Storm incoming!")} 
        onDoubleClick={() => setMessage("Sunny and happy!")} 
        onMouseEnter={() => setMessage("Cloudy vibes today.")}
        className="p-10 bg-blue-400 text-white text-center"
      >
        {message}
      </div>
    );
}

export default WeatherBox