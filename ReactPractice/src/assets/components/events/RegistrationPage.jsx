import React, { useState } from 'react'

const RegistrationPage = () => {
    let[state,setState]=useState({
        firstn:"",
        lastn:"",
        dob:"",
        age:"",
        email:"",
        bloodG:"",
        mob1:"",
        mob2:"",
        gender:"",
        deg:"",
        yop:"",
        skill:[],
        lang:[],
        users:[]
    })

    let handleChange=(e)=>{
        let{name,value,type,checked}=e.target
        if(type=="radio"){
            setState({ ...state, gender: value });
            
        } else if (type === 'checkbox') {
            setState((prevState) => {
              const updatedArray = checked
                ? [...prevState[name], value]
                : prevState[name].filter((item) => item !== value);
      
              return { ...prevState, [name]: updatedArray };
           
           });
          } 
          else {
            setState({ ...state, [name]: value });
          }
       
        console.log(state);
        
    }
    let{firstn,lastn,dob,age,email,bloodG,mob1,mob2,gender,deg,yop,skill,lang,users}=state
    let handleSubmit=(e)=>{
        e.preventDefault()
       let tempObj={
        firstn,lastn,dob,age,email,bloodG,mob1,mob2,gender,deg,yop,skill,lang,users
       }
       setState({
         firstn:"",
         lastn:"",
         dob:"",
         age:"",
         email:"",
         bloodG:"",
         mob1:"",
         mob2:"",
         gender:"",
         deg:"",
         yop:"",
         skill:[],
         lang:[],
         users:[...users,tempObj]
        
         
       })
       console.log(state);
       
    }
    let[html,css,javaScript,react]=skill
    let[english,hindi,other]=lang

  return (
    <div className='bg-purple-100 '>
         <h1 className='text-2xl font-extrabold flex justify-center  py-4 text-purple-600 bg-purple-200 border-dashed border-[4px] ' >Registration</h1>
      
           
            <form action="" onSubmit={handleSubmit }
            className='w-[50vw] h-[80vh] border-[4px] border-purple-900 bg-[#9b84c4]
                m-auto my-5 font-bold rounded shadow-2xl border-double'>
                <div className='border-s-violet-400 b-[2px] flex  justify-around h-[8%]  py-2 m-3'>
                    <label htmlFor="">Firstname :</label>
                    <input type="text" name="firstn" value={firstn} onChange={handleChange} required className='border-s-violet-400 b-[2px] w-[30%] rounded-md' />
                    <label htmlFor="">Lastname :</label>
                    <input type="text" name="lastn" value={lastn} onChange={handleChange}  required className='border-s-violet-400 b-[2px] w-[30%] rounded-md' />
                    
                </div>
                <div className='flex justify-around m-auto font-bold'>
                <label htmlFor="date">DOB: </label>
                <input type="date" name="dob" value={dob} onChange={handleChange}  required className='border-purple-700 px-2 m-2' />
                <label htmlFor="date">Age: </label>
                <input type="text" name="age" value={age} onChange={handleChange}  className='border-slate-700 px-2 m-2 rounded-md' />
                </div>

                <div className='flex justify-around m-auto p-5 font-bold'>
                    <label htmlFor="">Email: </label>
                    <input type="text"  name="email" value={email} onChange={handleChange}  required className='w-[40%] rounded-md' />
                    <label htmlFor="">Blood-Group: </label>
                    <input type="text" name="bloodG"  value={bloodG} onChange={handleChange}  className='rounded-md' />
                </div>

                <div className='flex justify-around m-auto p-5 font-bold'>
                <label htmlFor="">Mobile1: </label>
                <input type="text" name="mob1" value={mob1} onChange={handleChange}   required className='w-[30%] rounded-md' />
                <label htmlFor="">Mobile2: </label>
                <input type="text" name='mob2' value={mob2} onChange={handleChange}   required className='w-[30%] rounded-md' />
                </div>

                <div className='flex justify-evenly  my-6 font-bold'>
                   
                   <div className='w-[50%] flex justify-between gap-1'> 
                   <label htmlFor="">Gender: </label>
                   <input  onChange={handleChange} checked={gender === 'male'} type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="">Male</label>
                    <input  onChange={handleChange} checked={gender === 'female'} type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="">Female</label>
                    <input   onChange={handleChange} checked={gender === 'other'} type="radio" id="other" name="gender" value="other"/>
                    <label htmlFor="">Others</label>
                    
                   </div>
                    <div className='px-12 flex gap-4'>
                    <label htmlFor="">Country: </label>
                    <select id="country" name="country">
                   <option value="india">India</option>
                   <option value="pakistan">Pakistan</option>
                   <option value="japan">Japan</option>
                   <option value="other">Other</option>
                   </select>
                    </div>
 
                </div>
                
                <div className='flex justify-around mx-auto p-5 font-bold'>
                    <label htmlFor="">Degree: </label>
                    <input  onChange={handleChange} name='deg' value={deg} type="text" className='rounded-md'/>
                    <label htmlFor="">YearOfPassing: </label>
                    <input  onChange={handleChange} name='yop' value={yop} type="text" className='rounded-md' />
                </div>
                
              
               
                   <div className='flex justify-around m-5 py-1 font-bold'>
                   <label htmlFor="">Skills: </label>
                   <label htmlFor="">Html </label>
                    <input   onChange={handleChange} name='skill' value={html}  checked={skill.includes('html')} type="checkBox" />
                    <label htmlFor="">css</label>
                    <input  onChange={handleChange} name='skill' value={css} checked={skill.includes('css')} type="checkBox" />
                    <label htmlFor="">javaScript</label>
                    <input  onChange={handleChange} name='skill' value={javaScript}  checked={skill.includes('javaScript')} type="checkBox" />
                    <label htmlFor="">react</label>
                    <input  onChange={handleChange}  name="skill" value={react}  checked={skill.includes('react')} type="checkBox" />
                   </div>
                   
                    
                    <div className='flex justify-between m-6 py-1 w-[70%] font-bold'>
                    <label htmlFor="">Language: </label>
                    <label htmlFor="">English</label>
                    <input   onChange={handleChange}  name="lang" value="english" type="checkBox" checked={lang.includes('english')} />
                    <label htmlFor="">Hindi</label>
                    <input  onChange={handleChange} name="lang" value="hindi" type="checkBox" checked={lang.includes('hindi')} />
                    <label htmlFor="">Other</label>
                    <input  onChange={handleChange}  name="lang" value="other" type="checkBox"  checked={lang.includes('other')}/>
                    </div>
                 
                <div className='flex justify-center'>
                <button className='w-[20%] border-purple-400 text-white bg-purple-500 p-3  rounded-md'>Register</button>
                </div>
             
            </form>

            <br /><hr /><br />

            <main className='w-[100%] bg-purple-300 '>
              <div className='p-2  flex flex-wrap text-gray-950'>
                {users.map((ele,ind)=>{
                  return(
                    <div className=' w-[18%] p-3 m-2 bg-purple-500 rounded-md'>
                    <h1 className='font-bold'>{ele.firstn}{" "}{ ele.lastn}</h1>
                    <p>{ele.dob}</p>
                    <p>{ele.age}</p>
                    <p>{ele.gender}</p>
                    <p>{ele.mob1}</p>
                    <p>{ele.email}</p>
                    <p>{ele.bloodG}</p>
                    <p>{ele.degree}</p>
                    <p>{ele.yop}</p>
                    <p>{ele.lang }</p>
                    <button className='bg-green-700 p-1 m-2 rounded-md'>update</button>
                    <button className='bg-red-700 p-1 m-2 rounded-md'>delete</button>
                   </div>
                  )
                })}

              </div>
            </main>
       
    </div>
  ) 
}

export default RegistrationPage



