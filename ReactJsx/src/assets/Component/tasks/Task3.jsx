import React, { useRef, useState } from 'react'

const Task3 = () => {

    let[state,setState]=useState()



    

    let handleChange = (e)=>{

         if(e.target.value.length = 1){
        setState(e.target.value.length * 10)
        }
       
    }
  return (
    <div>
      
        <main >
        <input type="text" className='border-[2px] w-[10vw]' onChange={handleChange}/>
        
            <div style={{height:"100%", width:{state}}}   >
         </div>
        </main>
    </div>
  )
}

export default Task3