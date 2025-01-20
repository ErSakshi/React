import React, { useState } from 'react'

const MagicPlant = () => {
    let[size,setSize]=useState('text-4xl')
    let handleMouseEnter=(e)=>{
       
        setSize('text-8xl')
    }
   
    let handleMouseLeave=(e)=>{
        setSize('text-4xl')
    }

  return (
    <div>
        <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={size}>{"🌱"}</div>
        
    </div>
  )
}

export default MagicPlant