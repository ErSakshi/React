import React from 'react'

const EventEx1 = () => {
    let demo=(name)=>{console.log("hello",name);
    }
  return (
    // <div className='bg-slate-500 h-11 text-cyan-300 w-[50%] text-2xl'>   
    //    EventEx1
    //    <input type="text" className='border-[1px] border-gray-300 rounded-md' />
    //    <button className='bg-slate-800 p-1 rounded-md'>click</button>
    //    </div>
       
    <div>
        {/* //! Button-Mouse Events */}
        {/* <button onClick={()=>{console.log("Button1 clicked");
        }} className='bg-slate-400 px-3 '>Click1</button><br/><br/>

<button onMouseEnter={()=>{console.log("Button2 clicked");
        }} className='bg-slate-400 px-3'>Click2</button><br/><br/>

<button onMouseLeave={()=>{console.log("Button3 clicked");
        }} className='bg-slate-400 px-3'>Click3</button><br/><br/>
         */}

{/* //todo  when we have to pass some aargument the we have take one arrow function and in that funnction we have to call our 
 //todo  required function */}
<button onClick={()=>{
    demo("sakshi");
        }} className='bg-slate-400 px-3 '>Click1</button>
    </div> 
  )
}

export default EventEx1