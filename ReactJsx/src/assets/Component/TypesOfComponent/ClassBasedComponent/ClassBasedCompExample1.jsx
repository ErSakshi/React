import { Component } from "react";

class ClassBasedCompExample1 extends Component{
    //let count=0;  //! here we cannot use var,let ,const for declaring variables 
    //we can declare state outside the constructor
    // state={
     //  count:0
   // }
    constructor(){
        // we can declare state inside the constructor(recommended)
        super()
        this.state={
            count:0,
        };
    }
    render(){
        return(
            <div>
              <h2>ClassBasedCompExample1</h2>
              <h1>Count :{this.state.count}</h1>
              <button onClick={()=>{
                 this.setState({count : this.state.count+1})   //! without setState we cannot update state
              }}>increment</button>

               <button onClick={()=>{
                 this.setState({count : this.state.count-1})   //! without setState we cannot update state
              }}>decrement</button>
            </div>
        )
    }
}
export default ClassBasedCompExample1


// class ClassBasedCompExample1 extends Component{
//     //let count=0;  //! here we cannot use var,let ,const for declaring variables 
//     //we can declare state outside the constructor
//     // state={
//      //  count:0
//    // }
//     constructor(){
//         // we can declare state inside the constructor(recommended)
//         super()
//         this.state={
//             count:2,
//         };
//     }
//     render(){
//         return(
//             <div>
//               <h2>ClassBasedCompExample1</h2>
//               <h1>Count :{this.state.count}</h1>
//               <button onClick={()=>{
//                  this.setState({count : this.state.count*2})   //! without setState we cannot update state
//               }}>multiply</button>
              
//                <button onClick={()=>{
//                  this.setState({count : this.state.count/2})   //! without setState we cannot update state
//               }}>division</button>
//               <button onClick={()=>{
//                  this.setState({count : this.state.count%2})   //! without setState we cannot update state
//               }}>Modulus</button>
//             </div>
//         )
//     }
// }
// export default ClassBasedCompExample1