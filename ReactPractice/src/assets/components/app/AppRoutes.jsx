import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Help from './Help'
import HeroSection from './HeroSection'



//  export let router=createBrowserRouter([
//     {
//         path :"/home",
//         element :<Home/>
//     },
//     {
//         path :"/about",
//         element :<About/>
//     },
//     {
//         path :"/contact",
//         element :<Contact/>
//     },
//     {
//         path :"/login",
//         element :<Login/>
//     }
// ])


export let router =createBrowserRouter([
    {
        path :'/',
        element :<Login/>
    },
    {
        path :'/home',
        element :<Home/>,
        children :[
            {
                path :'/home',
                element :<HeroSection/>
            },
            {
                path :'/home/about',
                element :<About/>
            },
            {
                path :'/home/contact',
                element :<Contact/>
            },
            {
                path :'/home/help',
                element :<Help/>
            }

        ]
    },
    

]) 