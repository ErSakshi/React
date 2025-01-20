import React from "react"


let JsxExpressionRule3=()=>{
    //! In jsx we cannot write looping structure  inside jsx expression .
   //! we  can use only the higher order fuction .but all hof are also not useful only those hof are useful
    //! that can return jsx like map() ,filter(),reduce()
    let names=["ram","sham","sita","geeta","meena"]
    return(
        <div>
            <h1>JsxExpressionRule3</h1>
            {/* //! we can   */}
            {/* <p>the names of students are {names.map((element,i)=>{
                 return <React.Fragment key={i}>{element}</React.Fragment>
            })}</p> */}

            {/*//! here we are displaying /filtering only those names that ends with "a"  */}
            <div>The +names of students are {names.filter((ele,i)=>{
                
                return(
                    ele.endsWith('a') && (
                        <div>{ele}</div>
                    )
                )
            })}</div>
        </div>
    )
}
export default JsxExpressionRule3

//! return statement expect to return any thing that should be return on same line with return
 //todo  we have write it as 
   //?  return(
    //? <div></div>      
//?  )

//? return <div>

// ?  </div>

//! if we are writing any tag name in upper case then it will be treat as Component tag 