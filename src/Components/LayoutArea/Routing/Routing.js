import "./Routing.css";
import Youtube from "../Youtube/Youtube";
import {Redirect, Switch } from "react-router";
import { Navigate, Routes, Route, } from 'react-router-dom';
import {  } from "react-router-dom";

function Routing(){
    return (
        <div className="Routing">
      
            
            
            <Routes>

            {/* <Route path="/youtube" element={<Youtube />}/> */}
            {/* <Route path="/youtube" component={Youtube} exact /> */}


            <Route path="youtube" element={<Youtube />}/>
           
            <Route path="/" element={<Navigate to ="youtube" />}/>
            </Routes>

           
        </div>
    );
}

export default Routing;
