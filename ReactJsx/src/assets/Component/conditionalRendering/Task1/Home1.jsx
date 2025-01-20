
import React from 'react'
import { useState } from 'react'

const Home1 = (props) => {
  let [theme,setTheme]=useState('dark') 
  return (
    <div>
       <div  style={theme=="light"?{}:{backgroundColor:"black",color:"white",height:"100vh"}}>
       <h1 >HomePage</h1>
       <p>Welcome {props.props}</p>
       </div>
    </div>
  )
}

export default Home1