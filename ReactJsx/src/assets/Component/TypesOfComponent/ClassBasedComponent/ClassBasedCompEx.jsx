import React, { Component } from 'react'

export default class ClassBasedCompEx extends Component {
    constructor(){
        super()
        this.state={
            a:20,
            b:10,
            sum:0,
            sub:0,
            multi:0,
            resetValue:0

        }
    }
  render() {
    return (
      <div  style={{height:"300px",
        width:"400px",
        border:"2px solid black",
        background:"lightgrey",
        justifyContent:"center",
        textAlign:"center",
        marginLeft:"35vw",
        marginTop:"20vh"
      }}>
        <h1><i><u>Class Based Component</u></i></h1>
        <h2>sum : {this.state.sum}</h2>
        <h2>sub : {this.state.sub}</h2>
        <h2>multi : {this.state.multi}</h2>
        <br />
        {/* //! button for addition */}
        <button style={{marginRight:"10px",height:"30px"}} onClick={()=>{
            this.setState({sum:this.state.a+this.state.b})
     }}>Addition </button>

       {/* //! button for substraction */}
    <button style={{marginRight:"10px",height:"30px"}} onClick={()=>{
            this.setState({sub:this.state.a-this.state.b})
        }}>Substraction</button>
        
      {/* //! button for multiplication */}
      <button  style={{marginRight:"10px",height:"30px"}} onClick={()=>{
            this.setState({multi:this.state.a*this.state.b})
        }}>Multiplication</button>

        <br /> <br />
        {/* //! button for reset */}
        <button  style={{marginRight:"10px",height:"30px",backgroundColor:"white"}}onClick={()=>{
            this.setState({sum:0,sub:0,multi:0})
        }}>Cancel</button>
        
        
      </div>
    )
  }
}


