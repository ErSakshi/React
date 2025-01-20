let JsxExpressionRule2=()=>{
  //!In jsx we cannot write any operator except ternary and short-circuit operator
    let mode="light"
    let api={}
    let username="xyz";
    let pass="123"
    return(
        <div>
          <h2>JsxExpressionRule2 :</h2>
          <p>in jsx we cannot write any conditional statement except ternary operator </p>
          <p>In jsx we cannot write any operator except ternary and short-circuit operator</p>
          <h2>
            {/*  conditional statements are allowed inside jsx expression */}
            {mode=="dark" ? <p>☀️</p>:<p>🌙</p>}
            {/* if-else statement are not allowed */}
            {/* if(mode=="dark"){
            return <p>☀️</p>}
            else 
            return <p>🌙</p> */}

            {/* //todo :  short-circuit  && operator
             //!here firstly condition is check that is first sattement is check if it is true 
             //! then it will check second statement otherwise it will skip the second statement
              <h1>
               {Array.isArray(api) && api.map((val)=>{
                console.log(val)})}
              </h1>
            */}
            {/*//todo  short-circuit || operator */}
             {/* //! inshort-circuit || if first statement is true then second statement is not check */}
             
             {/* if all the credentials are true it will display welcome user */}
             {username=="xyz" && pass=="123" && "Welcome user" || "Wrong credentials"}<br/>

             {/* if all the credentials are not true then it will display wrong credentials */}
             {username=="xyz" && pass=="1234" && "Welcome user" || "Wrong credentials"}
          </h2>
        </div>
    )
}
export default JsxExpressionRule2