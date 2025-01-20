import React from 'react'

const Cart = (props,x) => {
  console.log(props.data);
  console.log(x.goBack);
  
  
  
  
  return (
    <div>
      <h1>Cart</h1><br/>
      {props.data.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div >
          {props.data.map((product, index) => (
            <div key={index} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
              <h3>{product.title}</h3>
              <img src={product.images[0]} alt={product.title} style={{ width: "150px" }} />
              <p><h3>Price: ${product.price}</h3></p>
              <p><b>Rating :</b>{product.rating }
             {product.rating >="4"?<p>⭐⭐⭐⭐</p>:<p>⭐⭐⭐</p>}
           </p>
              <p><b>Description :</b>{ product.description}</p>
              
            </div>
          ))}
          <button onClick={()=>{x.goBack}} style={{ padding: "10px", marginTop: "20px" }}>
        Back to Home
      </button>
        </div>
      )}
    </div>
  )
}

export default Cart