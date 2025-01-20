import { useState } from "react"
// console.log(this); //! this prints undefined in FBC

let UseStateEx1=()=>{
    let[state,setState]=useState(0)
    return(
        <div>
       <h1>UseStateEx1</h1>
        <h2>Count :{state}</h2>
         <button onClick={()=>{setState(state+1)}}>increment</button>
         
        </div>
    )
}
export default UseStateEx1


/* //! here we are destructuring the setState()
 ! let[x,y]=setState()
! here x=udefined , y=function
! so in this example we are using two variables state and setState  so when we are not initializing state 
 */
/*
 ! This is how we create our own useState
   let useStateEx1=()=>{
    let myUseState=(a)=>{
        let setState=(a)>{
            ? modify current state
           };
            return (a,setState)}};
    
            let [state,setState]=useMyState(0)
            console.log(state)
            console.log("hello")
*/ 