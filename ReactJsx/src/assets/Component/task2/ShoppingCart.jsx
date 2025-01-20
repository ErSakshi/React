import React from 'react'
import { useState } from 'react';

const ShoppingCart = () => {
    const [appleCount, setAppleCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    let[disabled,setDisabled]=useState(false)
  
    const handleAddApple = () => setAppleCount(appleCount + 1);
    const handleRemoveApple = (e) => {if(appleCount >0)
        {setAppleCount(appleCount-1)}
        else{
            setDisabled(true)
        }
         
        };
  
    const handleAddBanana = () => setBananaCount(bananaCount + 1);
    const handleRemoveBanana = (e) => {if(bananaCount >0)
        {setBananaCount(bananaCount-1)}
        else{
            setDisabled(true)
        }
         
        };
  
    const totalItems = appleCount + bananaCount;
  
    return (
        <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg absolute top-1/4 left-1/3">
        <h1 className="text-2xl font-semibold text-center mb-6">Shopping Cart</h1>
  
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-lg font-medium mr-4">Apple: {appleCount}</p>
            <button
              onClick={handleAddApple}
              className="bg-green-500 text-white px-4 py-2 rounded-md my-2 mx-2"
            >
              Add Apple
            </button>
            <button
              onClick={handleRemoveApple}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove Apple
            </button>
          </div>
        </div>
  
        <div className="m-4 gap-2 flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-lg font-medium mx-2 my-2">Banana: {bananaCount}</p>
            <button
              onClick={handleAddBanana}
              className="bg-yellow-500 text-white px-4 py-2 mx-2 rounded-md "
            >
              Add Banana
            </button>
            <button
              onClick={handleRemoveBanana}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove Banana
            </button>
          </div>
        </div>
  
        <div className="text-center bg-slate-400">
          <p className="text-xl font-semibold">Total items in cart: {totalItems}</p>
        </div>
      </div>
    );
    
}

export default ShoppingCart