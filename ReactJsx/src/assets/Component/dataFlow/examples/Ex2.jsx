import React from 'react'

const Ex2 = (props) => {
    console.log(props.props);
    let a=200
  return (
    
    <div>
        {/* <h1>{props.props.state}</h1>
     <button onClick={()=>{props.props.setState(a)}}>click</button> */}

     <button onClick={()=>{props.props(200)}}>click</button>
     
    </div>
  )
}

export default Ex2