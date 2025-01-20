import React from 'react'

//! 1. Create welcome component that accepts a name prop and displays : "Hellow,[name]"
const Task1 = ({props}) => {
    
  return (
    <div>
      <h1>Welcome {props}</h1>
    </div>
  )
}

export default Task1