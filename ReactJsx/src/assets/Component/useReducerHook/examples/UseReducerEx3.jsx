import React, { useReducer } from 'react'

const UseReducerEx3 = () => {
  let initialState ={
    count:0,
    isLoading:true
  };
     let reducer=(state,action)=>{
        switch (action.type) {
         case "add": return {count : state.count + action.value};
            break;
        
            case "sub": {
                if(state.count==0){
                    return state.count;
                }
                else{
                return {count :state.count - action.value}}};
            break;
         default:
           break;
        }
     }
     let[state,dispatch]=useReducer(reducer,initialState);
   return (
     <div>
         <h1 className='font-bold text-4xl my-3'>State :{state.isLoading ?"Loading.....":( state.count)}</h1>
         <button onClick={()=>{dispatch({type :"add",value:10})}}
          className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Add</button>
        
        <button onClick={()=>{dispatch({type :"sub" ,value:5})}}
          
          className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Sub</button>
 
     </div>
   )
}

export default UseReducerEx3