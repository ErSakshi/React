let JsxExpressionRule1=()=>{
    return(
        <div>
          <h2>JsxExpressionRule1 :</h2>
          <p>we should not write console statement inside jsx expression because it will 
          not get displayed on ui</p>
          {/* Rule1 ==> we should not write console statement inside jsx expression because it will 
           not get displayed on ui*/}
           {/* <div>{console.log("hello world")} DIV</div> */}
        </div>
    )
}
export default JsxExpressionRule1