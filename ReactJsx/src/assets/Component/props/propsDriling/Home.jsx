import React, { useState } from 'react'
import Header from './Header'
import HeaderEx from './HeaderEx'

const Home = () => {
  let[isLogin,setIsLogin]=useState(false);
  return (
    <div>
        {/* //! for practice */}
        {/* <Header name="sakshi"/> */}

        {/* //! HeaderEx1 */}
        <HeaderEx data={{isLogin,setIsLogin}} />
    </div>
  )
}

export default Home