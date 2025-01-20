let JsxRuleNo5Fragment=()=>{
    //! React Fragment are simply a pair of empty angular braces <></>
    //! by using react fragments we are avoiding the creation of extra nodes so that it
    //! will help to boost the app performance
    return(
        <>
         <h1>Fragment</h1>
         <p>React Fragment are simply a pair of empty angular braces <></>
      by using react fragments we are avoiding the creation of extra nodes so that it
      will help to boost the app performance</p>
        </>
     )
     //! we can write fragments in three different ways
       //? 1. with empty angular braces <></>
       //? 2. with empty angular braces we cannot use the key
          /*
        return(
        <>
        <h1> Fragment<h1/>
        <p><p/>
        </>
        )
       */
 
       //? 2. As React.Fragment 
       //? we can use key with this
       
       /*
        return(
        <React.Fragment>
        <h1> Fragment<h1/>
        </React.Fragment>
        )
       */
      //?3. As fragment only but for this you need to import fragment from react like..
      //? we can use key with this
      /*import {Fragment} from "react"*/
       /*
        return(
        <Fragment>
        <h1> Fragment<h1/>
        </Fragment>
        )
       */
}
export default JsxRuleNo5Fragment