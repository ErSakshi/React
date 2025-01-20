import React from 'react'

const EventTask1 = () => {
  let handleClick=(e)=>{
    e.target.disabled=true
    e.target.style.backgroundColor="red"
    e.target.style.color="white"
    e.target.textContent="Warning..!!☠️ Now button is disabled"
  }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <button onClick={handleClick}
      className='bg-cyan-500 px-5 rounded-md '>Think before you click...!</button>
    </div>
  )
}

export default EventTask1