import React from 'react'
import { useState } from 'react'

const About = (props) => {
   
   let [theme,setTheme]=useState('dark') 
  return (
    <div>
        <div style={theme=="light"?{}:{backgroundColor:"black",color:"white",height:"100vh"}}>
        <h1>AboutPage</h1>
        <p>Welcome {props.props}</p>
        </div>
    </div>
  )
}

export default About