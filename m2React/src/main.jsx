import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './component/Home.jsx'
import Footer from './component/Footer.jsx'
import Navbar from './component/navbar.jsx'



createRoot(document.getElementById('root')).render(
  <div>
    {/* <Navbar/>
    <Home/>
    <Footer/> */}

    <App/>
  </div>
);
