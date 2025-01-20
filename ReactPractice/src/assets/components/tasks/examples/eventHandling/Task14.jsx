import React, { useState } from 'react'

const Task14 = () => {
    let[isVisible,setIsVisible]=useState(false)
   let handleClick = (e)=>{
     setIsVisible(!isVisible)
   }

  return (
    <div>
    
      <button onClick={handleClick} className='bg-green-900 text-white p-1 rounded-md '>
        {isVisible ? "hide paragraph" : "show paragraph"}
      </button>
      {isVisible &&   <p>On clicking the button paragraph is visible</p>}
    </div>
  )
}

export default Task14