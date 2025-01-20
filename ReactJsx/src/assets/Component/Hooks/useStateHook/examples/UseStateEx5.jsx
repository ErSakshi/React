import { useState } from "react"


let UseStateEx5=()=>{
    // let courses=useState(["html","css","js","react"]);
   
    

    let obj={
        name:"Tinku",
        age:"16"
    }

    return(
        <div>
            {/* //! this is how we can strore arrays */}
              {/* {courses.map((ele,ind)=>(
                 <h1 key={ind}>
                    {ele}
                 </h1>
              ))} */}

              {/* //! this is how we store objects */}
              {obj.name}<br/>
              {obj.age}
        </div>
    )
}
export default UseStateEx5