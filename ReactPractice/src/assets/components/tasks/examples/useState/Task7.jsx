import React, { useState } from 'react'


const Task7 = () => {
    let[theme,setTheme]=useState('light')

      let handleClick =(e)=>{
        setTheme(!theme)
      }
  return (
    <div style={theme? {}:{background:"black" , color:"white"}} className='h-[100vh]'>
        <button type='toggel' onClick={handleClick}
        className='text-4xl' >
         {theme ? "🌙":"☀️"}
        </button>
    </div>
  )
}

export default Task7