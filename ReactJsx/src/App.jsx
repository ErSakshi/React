
import JsxCIntro from "./assets/Component/JsxIntroduction/JsxCIntro"
import ClassBasedComponentIntro from "./assets/Component/TypesOfComponent/ClassBasedComponent/ClassBasedComponentIntro"
import UseStateIntro from "./assets/Component/Hooks/useStateHook/UseStateIntro"
import PropsIntro from "./assets/Component/props/PropsIntro"
import ModuleIntro from "./assets/Component/moduleCss/ModuleIntro"
import ConditionalIntro from "./assets/Component/conditionalRendering/ConditionalIntro"
import EventsIntro from "./assets/Component/events/EventsIntro"
import UseEffectIntro from "./assets/Component/useEffectHook/UseEffectIntro"
import ContextApiIntro from "./assets/Component/contextApi/ContextApiIntro"
import AppContext from "./assets/Component/contextApi/AppContext"
import DataFlowIntro from "./assets/Component/dataFlow/DataFlowIntro"
import Task2Intro from "./assets/Component/task2/Task2Intro"
import UseRefIntro from "./assets/Component/useRefHook/UseRefIntro"
import UseReducerIntro from "./assets/Component/useReducerHook/UseReducerIntro"
import UseMemoIntro from "./assets/Component/useMemoHook/UseMemoIntro"
import TaskIntro from "./assets/Component/useEffectHook/tasks/TaskIntro"
import HocIntro from "./assets/Component/hoc/HocIntro"
import UseCallBackIntro from "./assets/Component/useCallBackHook/UseCallBackIntro"
import Button from 'react-bootstrap/Button';
import Crud from "./assets/Component/crud/Crud"
import CrudIntro from "./assets/Component/crud/CrudIntro"
import Task1 from "./assets/Component/tasks/Task1"
import Task2 from "./assets/Component/tasks/Task2"
import Task3 from "./assets/Component/tasks/Task3"
import Task4 from "./assets/Component/tasks/Task4"
import Task5 from "./assets/Component/tasks/Task5"
import Task6 from "./assets/Component/tasks/Task6"


let App=()=>{
  return(
    <div>
      {/* <Button variant="primary">Primary</Button> */}
      {/* <button className="text-primary">Click</button> */}
      
      {/* //! Jsx Intro */}
    <div> {/* <JsxCIntro/> */}</div>

     {/*//! types of component */}
     <div> 
     {/* <ClassBasedComponentIntro></ClassBasedComponentIntro> */}
     </div>
     
      {/* //! hooks */}
      {/* //? use */}
    <div> {/* <UseStateIntro/> */}</div>

     {/* //! Props */}
     {/* <div><PropsIntro /></div> */}

     {/* //! Module Intro */}
     {/* <div><ModuleIntro/></div> */}
    
    <div>
      {/* //! Conditional Rendering */}
      {/* <ConditionalIntro/> */}
    </div>
    <div>
      {/* //! Events Intro */}
      {/* <EventsIntro/> */}
    </div>

    <div>
      {/* <UseEffectIntro/> */}
      {/* <TaskIntro></TaskIntro> */}
    </div>

     <div>
      {/* <AppContext>
      <ContextApiIntro/>
      </AppContext> */}
     </div>
     <div>
      {/* <DataFlowIntro></DataFlowIntro> */}
     </div>
     <div>
      {/* <Task2Intro></Task2Intro> */}
     </div>
     <div>
      {/* <UseRefIntro></UseRefIntro> */}
     </div>
     <div>
      {/* <UseReducerIntro></UseReducerIntro> */}
     </div>
     <div>
      {/* <UseMemoIntro></UseMemoIntro> */}
     </div>
     <div>
      {/* <HocIntro></HocIntro> */}
     </div>
     <div>
      {/* < UseCallBackIntro></ UseCallBackIntro> */}

     </div>
     <div>
      {/* <Crud></Crud> */}
      {/* <CrudIntro></CrudIntro> */}

  </div>
     <div>
      {/* <Task1></Task1> */}
      {/* <Task2></Task2>  */}
      {/* <Task3></Task3> */}
      {/* <Task4></Task4> */}
      {/* <Task5></Task5> */}
      <Task6></Task6>
     </div>
    </div>
  )
}
export default App