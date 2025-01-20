import React from 'react'
import { useState,useEffect } from 'react';

const WindowResize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 bg-gray-700 text-white p-2 w-full text-center">
      Window size: {size.width} x {size.height}
    </div>
  );
}

export default WindowResize
//nhi hua