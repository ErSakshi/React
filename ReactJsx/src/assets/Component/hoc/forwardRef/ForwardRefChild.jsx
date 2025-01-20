import React from 'react'

const ForwardRefChild = ({props}) => {

    let handleClick=()=>{
     props.current.style.background="red"
    }
  return (
    <div>
        <h1>Child</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ForwardRefChild