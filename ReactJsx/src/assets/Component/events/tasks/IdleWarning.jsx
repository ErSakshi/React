import React from 'react'
import { useState ,useEffect} from 'react';

const IdleWarning = () => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeout;
    const handleActivity = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsIdle(true), 5000);
    };

    window.addEventListener('mousemove', handleActivity);
    return () => window.removeEventListener('mousemove', handleActivity);
  }, []);

  return (
    <div className="absolute top-0 left-0 p-4 bg-yellow-500 text-white">
      {isIdle ? "Hello? Are you there? React is getting lonely." : null}
    </div>
  );
}

export default IdleWarning
//nhi hua