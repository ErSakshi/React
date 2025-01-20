import React from 'react'

const Task5Child = ({props}) => {
  return (
    <div>
        <h1 className=' text-md text-center'>1 : {props.movie1}</h1>
        <h1 className=' text-md text-center'>2 : {props.movie2}</h1>
        <h1 className=' text-md text-center'>3 : {props.movie3}</h1>
        <h1 className=' text-md text-center'>4 : {props.movie4}</h1>
        <h1 className=' text-md text-center'>5 : {props.movie5}</h1>
    </div>
  )
}

export default Task5Child