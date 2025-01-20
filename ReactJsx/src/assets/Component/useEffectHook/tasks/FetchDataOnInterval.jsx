import React, { useEffect, useState } from 'react'

const FetchDataOnInterval = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(fetchWeather, 10000);
      fetchWeather(); // Fetch immediately
  
      return () => clearInterval(intervalId); // Cleanup
    }, []);
  
    return (
      <div>
        {loading ? <p>Loading...</p> : <p>{weather?.main?.temp}°C</p>}
      </div>
    );
}

export default FetchDataOnInterval