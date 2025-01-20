import React from 'react'
import { useState } from 'react'

const EventExample3 = () => {
  let[theme,setTheme]=useState('☀️')
  let user=[{
    id: 1,
    firstname: "Emily",
    lastname: "Johnson",
    gender: "female",
    image: "data:image/jpeg;base64,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",
    email: "emilyjohnson@x.com",
    phone: "+81 965-431-3024",
    work: "Sales Manager at Dooley, Kozey and Cronin" ,
},
  {
    id: 2,
    firstname: "Michael",
    lastname: "Williams",
    gender: "male",
    image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    email: "michaelwilliams@x.com",
    phone: "+49 258-627-6644",
    work: "Support Specialist at Spinka - Dickinson",
  },
  {
    id: 3,
    firstname: "Sophia",
    lastname: "Brown",
    gender: "female",
    image: "data:image/jpeg;base64,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",
    email: "sophiabrown@x.com",
    phone: "+81 210-652-2785",
    work: "Accountant at Schiller - Zieme" ,
},
  {
    id: 4,
    firstname: "James",
    lastname: "Davis",
    gender: "male",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI15LkenSjl_MCgw4h5K2Ev-oeHBOsOXKmw&s",
    email: "jamesdavis@x.com",
    phone:"+49 614-958-9364",
    work:"Research Analyst at Pagac and Sons"
  },
  {
    id: 5,
    firstname: "Emma",
    lastname: "Miller",
    gender: "female",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI29kVOzp-A-XNfuo-1q5bPNr5tlTO8213yw&s",
    email: "emma.miller@x.com",
    phone: "+91 759-776-1614",
    work: "Quality Assurance Engineer at Graham - Gulgowski"
  },
   ];

   let[state,setState]=useState({
      firstname:"",
      lastname:"",
      email:"",
      image:"https://wallpapers.com/images/hd/white-dog-pictures-ftoemlblu4f37xcb.jpg",
      users:user
   })
   let handleChange=(e)=>{
     let{name,value}=e.target 
     setState({...state,[name]:value});
     console.log(state);
     
   }
   let{firstname,lastname,email,image,users}=state

   let handleSubmit=(e)=>{
     e.preventDefault()
     let tempobj={
      firstname:firstname,
      lastname:lastname,
      email:email,
      image:image
     }
      setState({
        firstname:"",
        lastname:"",
        email:"",
        image:"https://wallpapers.com/images/hd/white-dog-pictures-ftoemlblu4f37xcb.jpg",
        users:[...users,tempobj]
      })
      console.log(state);
      
   }
  return (
    <div  style={theme=="☀️"?{width:"100%",height:"100%"}:{backgroundColor:"black",color:"white",width:"100%",height:"100%"}} 
    className='w-[100%] h-[100vh] '>
   
    <header 
    className='bg-indigo-600 w-[100%] h-[8vh] rounded shadow-2xl'
    >
        
        <input type="text" placeholder="Search" className='w-[30%] left-10  border-indigo-700 border-[2px] m-1 top-4 rounded-lg shadow-2xl absolute text-black' />
        
        <button onClick={()=>{setTheme(theme ==="☀️"?"🌙":"☀️")}}
         className=' w-[2%] absolute right-1 p-1 text-2xl'>{theme ==="☀️"?"🌙":"☀️"}</button>
         
   </header>

       <div className='flex justify-between w-[100%] h-[90%] m-5'>
       <form action="" onSubmit={handleSubmit}
       >
        <div className='w-[25%] h-[50vh] bg-indigo-200 border-[2px] p-7  absolute left-10 bottom-1/4 rounded-md shadow-xl '>
        <input type="text" onChange={handleChange} required placeholder='firstname' name="firstname" value={firstname} className='relative h-[6vh] w-[100%] px-1 my-4  rounded shadow-2xl text-black'/>
        <input type="text" onChange={handleChange} required placeholder='lastname' name="lastname" value={lastname} className='relative h-[6vh] w-[100%] px-1 my-4 rounded shadow-2xl text-black'/>
        <input type="text" onChange={handleChange} required placeholder='E-mail' name="email" value={email} className='relative h-[6vh] w-[100%] px-1 my-4 rounded shadow-2xl text-black'/>
        
        <button  className='relative h-[6vh] w-[100%] px-5 rounded shadow-2xl my-4 bg-indigo-500 text-white'>submit</button>
        </div>
       </form>

       <main className='w-[60%]  right-2  bg-indigo-200  mx-6 rounded shadow-xl'>
         <div className='flex flex-wrap text-gray-950'>
          {users.length>0 && users.map((ele,ind)=>{
            return(
              <div key={ind} className='w-[21%]  p-3 m-4 bg-indigo-400  rounded-md h-[40%]'>
                <img src={ele.image} alt=""  className='w-[85%] h-[85%] p-2'/>
                <h1 className='font-semibold'>{ele.firstname}{" "}{ele.lastname}</h1>
                <p className='text-md'>{ele.gender}</p>
                <p className='text-md p-0 m-0'>{ele.email}</p>
              </div>
            )
          })}
         </div>
       </main>
       </div>
   
    </div>
  )
}

export default EventExample3