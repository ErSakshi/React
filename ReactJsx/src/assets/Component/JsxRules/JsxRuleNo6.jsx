import JsxExpressionRule2 from "./JsxExpression/JsxExpression2"
import JsxExpressionRule1 from "./JsxExpression/JsxExpressionRule1"
import JsxExpressionRule3 from "./JsxExpression/JsxExpressionRule3"

let JsxRuleNo6=()=>{
    let price=99
    return(
        <div>
            <div>
            //! Jsx Expression is the expression in which we can write javascript
            <h3>RuleNo6 : {price}</h3>
            </div>
             <JsxExpressionRule1></JsxExpressionRule1>
             <JsxExpressionRule2></JsxExpressionRule2>
             <JsxExpressionRule3></JsxExpressionRule3>
            <div>
            </div>
        </div>
    )
}
export default JsxRuleNo6