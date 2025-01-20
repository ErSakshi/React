import React from 'react'

const UseStateEx1 = (x) => {
    console.log(x);
    
  return (
   <div>
      <h1><i><u>Cart-Items</u></i></h1>
     <div style={{display:"flex"}}> 
      
        {x.data.map((ele,ind)=>{
            return(
            <div key={ind} style={{
                height:"400px",
                width:"300px",
                border:"1px solid black",
                justifyContent:"center",
                textAlign:"center"
            }}>
                <img src={ele.thumbnail}  height="200px" />
                <h3>{ele.title}</h3>
                <h4>Price :{ ele.price}</h4>
            </div>)
        })}
        
    </div>
   </div>
  )
}

export default UseStateEx1 
