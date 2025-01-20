import React, { useState } from 'react'

const ToogleVisiblity = () => {
    let[isVisible,setIsVisible]=useState(true)
  return (
    <div>
        <div className='m-24'>
            {isVisible && (<p className='text-2xl m-2'>It is component of toogle visiblity to check its working...!</p>)}
            <button onClick={(e)=>{
              setIsVisible(!isVisible)
                
            }}
            className='bg-slate-300 p-2 m-2 rounded-lg shadow-lg font-bold text-lg'>{isVisible && "Hide" || "Show"}</button>
        </div>
    </div>
  )
}

export default ToogleVisiblity