import React from 'react'
import { Children } from 'react';
//! when we use opening and closing tag and we write any html tag between it then to access it in child component 
//! it will become children tag to access it we have to use props.children
//! we have to write it as in the destructuring format like {children}
const PropsEx2Child = ({children })=> {
  console.log(children);
  //todo let{name,age}=props.data.obj   if we are receiving object from parent to child 
  
  return (
    <div>PropsEx2Child
   <div>
    {/* //! destructuring the object
    //  <h1>Name: {name}</h1>
    <h1>Age: {age}</h1> */}
   </div>
   <div>
    {children}
   </div>
    <div>
      {/*//!when we use opening and closing tag and we write any html tag between it 
       //! then to access it in child component  it will get store in children */}
    </div>
    </div>
  )
}

export default PropsEx2Child