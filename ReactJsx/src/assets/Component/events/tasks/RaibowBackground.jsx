import React from 'react'

const RaibowBackground = () => {
    const [isRainbow, setIsRainbow] = useState(false);

    useEffect(() => {
      if (isRainbow) {
        const interval = setInterval(() => {
          document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }, 500);
        return () => clearInterval(interval);
      }
    }, [isRainbow]);
  
    return (
      <div>
        <button onClick={() => setIsRainbow(!isRainbow)}>
          The rainbow respects your vibe.
        </button>
      </div>
    );
}

export default RaibowBackground