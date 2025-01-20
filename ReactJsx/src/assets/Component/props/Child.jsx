let Child=(props)=>{
    //console.log(props.data.name);  // for accessing only one variable 
    
    // let{name,degree}=props.data
    let[a,b,c,d]=props.data
    return(
        <div>
         
        {/* {props.data.name}   //! for object we do destructuring
         */} 
         {/* {name} */}
         {a}
        </div>
    )
}
export default Child