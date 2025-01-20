import React, { useEffect, useState } from 'react'

const NotificationPopUp = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShow(true);
      }, 5000);
  
      return () => clearTimeout(timeoutId); // Cleanup
    }, []);
  
    const handleDismiss = () => {
      setShow(false);
    };
  
    return (
      <div>
        {show && (
          <div className='w-[10vw] h-[20vh] px-4 bg-yellow-300 my-4 mx-4'>
            <p className='px-3 my-4 font-semibold text-xl'>Notification!</p>
            <button onClick={handleDismiss} className='px-3 bg-yellow-900 text-white rounded-lg'>Dismiss</button>
          </div>
        )}
      </div>
    );
}

export default NotificationPopUp