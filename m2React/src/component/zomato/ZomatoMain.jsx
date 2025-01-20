import React from 'react'

const ZomatoMain = () => {
  return (
    <div>
        <div className='h-[100%] w-[100%]'> 
            <header 
            className='h-[60vh] w-[100%] border-[2px] border-slate-900  bg-slate-500 '>
                <a href="" className='text-lg absolute left-48 text-white'>Get the app</a>
              <div className='h-[8vh] w-[50vw] absolute right-5 flex gap-12 text-white'>
              <a href="" className='text-lg'>Invester Relation</a>
              <a href="" className='text-lg'>Add Restaurant</a>
              <a href="" className='text-lg'>Log in</a>
              <a href="" className='text-lg'>Sign up</a>
              </div>

                <div className='h-[32vh] flex flex-col justify-center my-16'>
                <h1 className='text-[85px] text-white flex justify-center  font-sans italic font-extrabold  h-[16vh]'>zomato</h1>
                 <h2 className='flex  justify-center  text-4xl h-[10vh] text-white'>Discover the best food & drinks in Pune</h2>

                </div>
               <div className='flex justify-center absolute top-64 left-1/4 right-1/4'>
               <img src="https://img.freepik.com/free-vector/location_53876-25530.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid" alt="" 
               className='h-[5%] w-[5%] relative left-20 top-1  p-0 '/>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" className='relative left-1/4 top-4'>
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
   />
</svg>
              
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" className='relative left-64 top-3'>
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
              
               <input type="text"  className='w-[20vw] h-[6vh] rounded shadow-xl' />
               <input type="text" placeholder='        Search for restaurant,cuisine or a dish' className='w-[40vw] h-[6vh] rounded shadow-mxl '/>
              
               
               
               </div>
            </header>

            <div className='h-[40vh] w-[100%]  flex flex-row justify-between  gap-1 '>
                <section className='h-[30vh] w-[33%] bg-slate-100 rounded-xl shadow-2xl m-10 border-[1px] border-gray-400'>
                    <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt=""  className='h-[20vh] w-[100vw] border-gray-800'/>
                </section>
                <section className='h-[30vh] w-[33%] bg-slate-100 rounded-xl shadow-2xl m-10 border-[1px] border-gray-400'>
                <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt=""  className='h-[20vh] w-[100vw] border-gray-800'/>
                </section>
                <section className='h-[30vh] w-[33%] bg-slate-100 rounded-xl shadow-2xl m-10 border-[1px] border-gray-400'>
                <img src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt=""  className='h-[20vh] w-[100vw] border-gray-800'/>
                </section>
            </div>
        </div>
         
    </div>
  )
}

export default ZomatoMain