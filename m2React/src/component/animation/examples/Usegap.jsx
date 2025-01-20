import React from 'react'

import gsap from 'gsap';
//!using timeline

const UsegsapEx4 = () => {

  let tl=gsap.timeline()
  tl.to("#full",{
    right:-180,
    duration:0.8 
  })
  tl.from("#full h4",{
    x:-50,
    duration:0.6,
    stagger:0.2,
    opacity:0,
    scale:0
  })
  tl.from("#full i",{
    opacity:0
  })


  return (
    <div style={{overflowX:"hidden",height:"100vh",width:"100vw"}}>
      <main style={{height:"100%",width:"100%",backgroundImage:"url(https://img.freepik.com/free-photo/green-grass-blue-sky_1048-7528.jpg?t=st=1736274064~exp=1736277664~hmac=bd4bafc82bc96ef77b9669dcf2aacf95fa201c542c99b6402a7f047bb46aff10&w=900)"}}>
      <div id='nav' style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"40px 50px",color:"#fff"}}>
        <h2 style={{fontSize:"30px"}}>logo</h2>
       <i id='dots' style={{fontSize:"20px", fontWeight:"800",}}  className="fa-solid fa-ellipsis"></i>
      </div>
      <div id='full' style={{height:"100%",width:"40%",position:"absolute",backgroundColor:"rgba(255,255,255,0.459)",top:"0px",right:"-900px",backdropFilter:"blur(10px)",padding:"150px 50px"}}>
        <h4 style={{fontSize:"50px",fontWeight:"500",marginBottom:"5px"}}>Work</h4>
        <h4 style={{fontSize:"50px",fontWeight:"500",marginBottom:"5px"}}>About</h4>
        <h4 style={{fontSize:"50px",fontWeight:"500",marginBottom:"5px"}}>Services</h4>
        <h4 style={{fontSize:"50px",fontWeight:"500",marginBottom:"5px"}}>Courses</h4>
        <h4 style={{fontSize:"50px",fontWeight:"500",marginBottom:"5px"}}>Contact us</h4>
        <i style={{position:"absolute",top:"5%",right:"10%" ,backgroundColor:"white",borderRadius:"50% ",padding:"5px",fontWeight:"600",fontSize:"25px",cursor:"pointer"}} className="fa-regular fa-circle-xmark" ></i>
      </div>
      </main>
      </div>
  )
}

export default UsegsapEx4
