import { useState } from "react"

let UseStateEx3=()=>{
    let[changeBackground,setChangeBackground]=useState(false);
    return(
        <div>
            <button onClick={()=>{
                setChangeBackground(!changeBackground)
            }}>click</button>
            <h1 
            style={{backgroundColor:changeBackground?"red":"white"}}>
             hello</h1>
        </div>
    )
}
export default UseStateEx3