import { useState } from "react"

let UseStateEx4=()=>{
    let[radius,changeRadius]=useState(false);

    return(
        <div>
             <h2>Changing the shape</h2>
              <button onClick={()=>{
               changeRadius(!radius) 
            }}>click</button>
< div style={{
    borderRadius:radius?"50%":"0%",
    border:"1px solid black",
    height:"100px",
    width:"100px"
}}></div>

        </div>
    )
}
export default UseStateEx4