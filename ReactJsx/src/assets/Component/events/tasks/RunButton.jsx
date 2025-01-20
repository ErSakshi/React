import React, { useState } from 'react'

const RunButton = () => {
  let[position,setPosition]=useState({top:0,left:0})
  let hadleMoveButton=(e)=>{
     console.log(e);
    let randomTop=Math.random()*80;
    let randomLeft=Math.random()*80;
    setPosition({top:randomTop,left:randomLeft})

  }
  return (
    <div>
      <div className='relative'>
        <button onMouseEnter={hadleMoveButton}
        style={{ top: `${position.top}%`, left: `${position.left}%` }}
        className='h-8 bg-purple-950 text-white p-1 rounded-lg  absolute'> Catch me 😜if you can!</button>
      </div>
    </div>
  )
}

export default RunButton