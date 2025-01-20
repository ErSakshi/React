import React, { useState } from 'react'
import HocEx1Child from './HocEx1Child'

const HocEx1 = () => {
    let[state,setState]=useState(0)
    console.log("Parent");
    
    let orange={
        backgroundColor:"linear-gradient(orange,yellow)",
        color:"white",
        padding:"0px 20px 3px 0px",
        borderRadius:"20px"  
    }
    
    let purple={
      backgroundColor:"linear-gradient(purple,blue)",
      color:"white",
      padding:"0px 20px 3px 0px",
      borderRadius:"20px"  
  }
  
  return (
    <div>
        <button style={state % 2==0 ? purple : orange}
          onClick={()=>{setState(state + 1)}}
        className='bg-orange-500 text-white px-5 rounded-md m-5 '
        >State : {state}</button>
        <br /><hr /><br />
        <HocEx1Child />
        {/* <HocEx1Child props={state}/> */}
    </div>
  )
}

export default HocEx1