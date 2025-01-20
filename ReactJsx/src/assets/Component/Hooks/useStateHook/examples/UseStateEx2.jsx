import { useState } from "react"

let UseStateEx2=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                // setCount(count+10)
                // setCount(count+20)
                // setCount(count+30)

                setCount(count+10)
                setCount((pre)=pre+20)
                setCount((pre)=pre+30)
            }}>increment</button>
        </div>
    )
}
export default UseStateEx2