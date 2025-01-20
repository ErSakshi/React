import React from 'react'
//! 3. Create a component that takes list of hobbies  as props and display them as list
const Task3 = ({props}) => {

  return (
    <div>
       <div className='w-[30%]'>
        {listOfHobbies.map((val,i)=>{
            <h1>{val}</h1>
        })}
       </div>
    </div>
  )
}

export default Task3