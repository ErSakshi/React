import React, { useEffect, useState } from 'react'


const UseEffectEx5 = () => {
    let[cartItem,setCartItem]=useState(0);
    let[total,setTotal]=useState(1000);

    useEffect(()=>{
        setTotal(total+100)
    },[cartItem])

    useEffect(()=>{
       
        console.log("we are checking for free delivery");
        
    },[total])

  return (
    <div>
        <h1>cart Items :{cartItem} </h1>
        <h1>Total :{total}</h1>

        <button onClick={()=>{
            setCartItem(cartItem+1)
        }} className='bg-orange-500 text-white px-4 rounded-md'>Add to cart</button>

        <div>
          {total >2000 && "Updatedtotal : "}
         {total >2000  && total }
        </div>
    </div>
  )
}

export default UseEffectEx5


 