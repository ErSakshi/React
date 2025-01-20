let JsxRuleNo2=()=>{
   //! At a time we can return only one return one element if we want 
    //!to return more than one element then we have to wrap into one parent element

    //!it will work because we are returning more than one element wraping into one parent div
    return(
        <div>
           <div>
           <h3> <b><u>JsxRule2 :</u></b></h3> 
           </div>
           <div>
           it will work because we are returning more than one element wraping into one parent div
           </div>
        </div>
    )

    //! it is not working because we are returning more than one element without any parent div element
    // return(
    //     <div>
    //        JsxRule2

    //     </div>
    //     <div>
    //         it is not working because we are returning more than one element without any parent div element
    //     </div>
    // )
}
export default JsxRuleNo2