import React from 'react'

const PageTracker = () => {
    const [message, setMessage] = useState('Oh, you’re back! 😍');

    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          setMessage("Don’t leave me! 😢");
        } else {
          setMessage('Oh, you’re back! 😍');
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  
    return <div>{message}</div>;
}

export default PageTracker