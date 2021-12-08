import "./Routing.css";
import Youtube from "../Youtube/Youtube";
import {Redirect, Route, Switch } from "react-router";

function Routing(){
    return (
        <div className="Routing">
            <Route path="/youtube" component={Youtube} exact />
			<Redirect from="/" to="/youtube" exact />
        </div>
    );
}

export default Routing;
