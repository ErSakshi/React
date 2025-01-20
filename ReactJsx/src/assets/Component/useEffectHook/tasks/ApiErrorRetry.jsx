import React, { useEffect, useState } from 'react'

const ApiErrorRetry = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [retrying, setRetrying] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
        setError(null);
        setRetrying(false);
        
        
      } catch (error) {
        setError('Failed to load data..');
        console.error(error);
      }
    
      
    };
  
    useEffect(() => {
      if (retrying) {
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId); // Cleanup
      }
    }, [retrying]);
  
    return (
      <div>
        {error && <p>{error}</p>}
        {data && <p>{Json.stringify(data, null, 2)}</p>}
        <button onClick={() => setRetrying(false)} className='bg-green-600 text-white px-3 rounded-md'>Stop Retry</button>
      </div>
    );
}

export default ApiErrorRetry