import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        
        <header className='h-[8vh] bg-slate-700 w-[100%] flex gap-20 fixed top-0 left-0 z-10'>
            {/* <h1 className='text-2xl text-white'>Navbar</h1> */}
            <div className='py-3'>
                <Link to='/home' className='text-white px-4 py-5'>Home</Link>
            </div>
            <div className='py-3'>
                <Link to='/home/about' className='text-white px-4 py-5'>About</Link>
            </div>
            <div className='py-3'>
                <Link to='/home/contact' className='text-white px-4'>Contact</Link>
            </div>
            <div className='py-3'>
                <Link to='/home/help' className='text-white px-4 '>Help</Link>
            </div>
           
        </header>
         <Outlet/>
     
    </div> 
  )
}

export default Home