import React from 'react'
//! 2. Build a profile card component to display user details like name,age  and location using props 
const Task2 = ({props}) => {
    console.log(props);
    
  return (
    <div>
     <h1> Name : {props.data.name}</h1>
     <h1> Age : {props.data.age}</h1>
     <h1> Location : {props.data.location}</h1>
    </div>
  )
}

export default Task2