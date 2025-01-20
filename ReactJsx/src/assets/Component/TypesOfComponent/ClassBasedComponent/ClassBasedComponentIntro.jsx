import React,{Component} from "react";
import ClassBasedCompExample1 from "./ClassBasedCompExample1";
import ClassBasedCompEx from "./ClassBasedCompEx";

export default class ClassBasedComponentIntro extends Component{
    render(){
        return(
            <div>
                <ClassBasedCompEx/>
               {/* <ClassBasedCompExample1></ClassBasedCompExample1> */}
            </div>
        )
    }
}