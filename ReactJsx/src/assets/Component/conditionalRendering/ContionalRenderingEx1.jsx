import React from 'react'
import HomePage from './HomePage';
import PageNotFound from './Task1/PageNotFound';
import ThemeEx1 from './Task1/ThemeEx1';

const ContionalRenderingEx1 = () => {
 let username="xyz@123"
 
 if(username=="xyz@123"){
    console.log("Welcome User");
    return <HomePage/>
    
 }else{
    console.log("Invalid Credentials");
    //  return <PageNotFound/>
    return <ThemeEx1/>
 }
}

export default ContionalRenderingEx1