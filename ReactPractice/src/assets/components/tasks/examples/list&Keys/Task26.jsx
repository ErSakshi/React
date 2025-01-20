import React from 'react'

const Task26 = () => {

    let colorsArray=['red','orange','yellow','blue','purple','green']
  return (
    <div>
         {Array.isArray(colorsArray) && colorsArray.length > 0 && colorsArray.map((ele,ind)=>{
            return(
                <div key={ind} style={{color : ele }}>
                    <ol >
                        <li  className=' text-xl font-bold' >{ele}</li>
                    </ol>
                </div>
            )
        })} 
        
    </div>
  )
}

export default Task26