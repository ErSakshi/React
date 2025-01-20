import React from 'react'

const EventsEx2 = () => {
    // let demo=()=>{
    //     console.log("hello");
        
    //}
  return (
    <div>
        <button onClick={(e)=>{console.log(e);
         e.target.textContent="you clicked button...!"
         e.target.style.backgroundColor="pink"
         
        }}
        className='bg-purple-300 px-3 rounded-md '>Click me!!!</button>
    </div>
  )
}

export default EventsEx2