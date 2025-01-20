import React from 'react'


const EventsTask2 = () => {
    let handleMouseEnter=(e)=>{
      console.log(e);
      
       e.target.style.backgroundColor="rgb(192, 162, 192)"
    }
    let handleMouseLeave=(e)=>{
        e.target.style.backgroundColor="rgb(152, 102, 152)"
     }
  return (
    <div>
        <div id="eventsTask2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}></div>
    </div>
  )
}

export default EventsTask2