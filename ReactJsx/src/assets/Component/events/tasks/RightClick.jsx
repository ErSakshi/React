import React from 'react'

const RightClick = () => {
    let handleRightClick=(e)=>{
        console.log(e);
       
       alert("Ha! You thought you could outsmart React?")
    }
  return (
    <div>
        <button onContextMenu={handleRightClick}
        className='h-6 bg-slate-600 text-white' >Right-Click-me</button>
    </div>
  )
}

export default RightClick