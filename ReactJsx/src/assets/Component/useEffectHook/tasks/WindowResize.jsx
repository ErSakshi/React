import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    let[dimension,setDimension]=useState({
        width:0,
        height:0
    })
   useEffect((e)=>{
    let handleClick =(e)=>{
    setDimension((e)=>{
    e.target.innerWidth;
    e.target.innerHeight;
    })
    }
    e.addEventListener('resize',handleClick);

    return()=>{
        e.removeEventListner('resize',handleClick)
    }
   },[])

  return (
    <div >
      Height : {dimension.height}  width :{dimension.width}
    </div>
  )
}

export default WindowResize