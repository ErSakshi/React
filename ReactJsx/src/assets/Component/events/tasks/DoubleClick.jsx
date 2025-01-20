import React from 'react'

const DoubleClick = () => {
    let handleDoubleClick=(e)=>{
      e.target.textContent="Shh! I'm a React Developer undercover!"
      
    }
  return (
    <div>
        <button onDoubleClick={handleDoubleClick}
        className='h-12 bg-slate-500 rounded-md'>Click Me...!!!</button>
    </div>
  )
}

export default DoubleClick