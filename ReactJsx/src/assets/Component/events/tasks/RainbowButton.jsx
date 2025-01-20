import React, { useState } from 'react'

const RainbowButton = () => {
    let[isRainbow,setIsRainbow]=useState(false)
    let toggleButton=(e)=>{
        setIsRainbow(!isRainbow)

    }
   

  return (
    <div>
        <button onClick={toggleButton}
              className={`px-6 py-3 bg-gradient-to-r ${isRainbow ? 'from-red-500 via-yellow-500 to-green-500' : 'from-blue-500 to-purple-500'} text-white rounded-full`}>
            The rainbow respects your vibe 🌈</button>
    </div>
  )
}

export default RainbowButton