import React from 'react'

const EventExample4 = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        
           <div className='w-[30%] h-[50vh]  my-8 border-gray-950 border-[2px] bg-indigo-300'>
           <header className='text-xl font-bold absolute top-12 m-0'>To-Do-List</header>
            <div className='w-[30%] h-[50vh]  flex  my-8'>
            <input type="text"  className='w-[25vw] h-[5vh]  px-6 mx-2 my-8 '/>
            <button className='bg-indigo-500 px-5 text-white h-[5vh] rounded-md my-8 mx-14'>Add</button>
           </div>
        </div>
    </div>
  )
}

export default EventExample4