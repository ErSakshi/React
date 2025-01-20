import UseStateEx1 from "./useState/UseStateEx1"
import { useState } from "react";

let UseStateIntro=()=>{
    let [count,setCount]=useState(0);
    let cartsData = [
        {
          "id": 1,
          "products": [
            {
              "id": 168,
              "title": "Charger SXT RWD",
              "price": 32999.99,
              "quantity": 3,
              "total": 98999.97,
              "discountPercentage": 13.39,
              "discountedTotal": 85743.87,
              "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
            },
            {
              "id": 78,
              "title": "Apple MacBook Pro 14 Inch Space Grey",
              "price": 1999.99,
              "quantity": 2,
              "total": 3999.98,
              "discountPercentage": 18.52,
              "discountedTotal": 3259.18,
              "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
            },
            {
              "id": 183,
              "title": "Green Oval Earring",
              "price": 24.99,
              "quantity": 5,
              "total": 124.95,
              "discountPercentage": 6.28,
              "discountedTotal": 117.1,
              "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
            },
            {
              "id": 100,
              "title": "Apple Airpods",
              "price": 129.99,
              "quantity": 5,
              "total": 649.95,
              "discountPercentage": 12.84,
              "discountedTotal": 566.5,
              "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
            }
          ],
          "total": 103774.85,
          "discountedTotal": 89686.65,
          "userId": 33,
          "totalProducts": 4,
          "totalQuantity": 15
        },
        {
          "id": 2,
          "products": [
            {
              "id": 144,
              "title": "Cricket Helmet",
              "price": 44.99,
              "quantity": 4,
              "total": 179.96,
              "discountPercentage": 11.47,
              "discountedTotal": 159.32,
              "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
            },
            {
              "id": 124,
              "title": "iPhone X",
              "price": 899.99,
              "quantity": 4,
              "total": 3599.96,
              "discountPercentage": 8.03,
              "discountedTotal": 3310.88,
              "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
            }
            // Add more products if necessary
          ],
          "total": 4794.8,
          "discountedTotal": 4288.95,
          "userId": 142,
          "totalProducts": 5,
          "totalQuantity": 20
        }
        // Add more carts if necessary
      ];
    
    return(
        <div>
          
           
       <UseStateEx1 data={cartsData}/>
        </div>
    )
}

export default UseStateIntro