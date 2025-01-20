import React, { useState } from 'react'
import Home1 from './Home1';
import Contact from './Contact';
import About from './About';
import PageNotFound from './PageNotFound';
import Home from '../../props/propsDriling/Home';

const ContionalRenderingEx2 = () => {
  let userName=prompt("Enter username ");
   let pageName=prompt("Enter Page Name");
   //localStorage.setItem("uName","sakshi")
    
    
   switch (pageName) {
    case 'home':return <Home1 props={userName} />;
    case "contact": return <Contact props={userName}/> ;
    case "about":return <About props={userName}/>;
    default:return <PageNotFound/>
        
   }
}

export default ContionalRenderingEx2