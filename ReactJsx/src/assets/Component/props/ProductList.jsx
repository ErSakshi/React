let ProductList=(props)=>{
    console.log(props);
    
    return(
        <div>
             <h1><i><u>List of Products : </u></i></h1>
            <div style={{display:"flex", gap:"20px" }}>
           
           {props.data.map((ele,ind)=>{
              return(<div  key={ind} style={
                {
                    height:"400px",
                    width:"300px",
                    border:"1px solid black",
                    justifyContent:"center",
                    textAlign:"center"
                }
              }>
                <img src={ele.images} height="200px" />
                <h2>{ele.title}</h2>
                 <h3><b>Price : </b>{ele.price}</h3>
                 <h4><b>rating : </b>{ele.rating}</h4>
              </div>)
           })}

        </div>
        </div>
        
    )
}
export default ProductList