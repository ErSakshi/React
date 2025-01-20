import React, { useState } from 'react'

const Task4 = () => {
   let[state,setState] =useState(0)
   let[isRunning,setIsRunning]=useState(false)
   

   
  let handleClick = ()=>{

   if(isRunning){

    clearInterval();
    setIsRunning(false);
   }

   else if(isRunning ){
     setIsRunning(false)
   }
    else{ 
      setInterval(()=>{
      setState(state+=1)
     },1000)
    setIsRunning(true);
 }}
    

  
   
  

    
  

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={handleClick} className='bg-sky-300 p-1 '>{state ? "stop" : "start"}</button>
    </div>
  )
}

export default Task4

// import React, { useState, useEffect } from 'react';

// const Task4 = () => {
//   const [state, setState] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [intervalId, setIntervalId] = useState(null);

//   const handleClick = () => {
//     if (isRunning) {
//       // Stop the counter
//       clearInterval(intervalId);
//       setIsRunning(false);
//     } else {
//       // Start the counter
//       const id = setInterval(() => {
//         setState(prevState => prevState + 1);
//       }, 1000);
//       setIntervalId(id);
//       setIsRunning(true);
//     }
//   };

//   useEffect(() => {
//     // Cleanup interval on component unmount
//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [intervalId]);

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleClick} className='bg-sky-300 p-1'>
//         {isRunning ? "Stop" : "Start"}
//       </button>
//     </div>
//   );
// };

// export default Task4;
