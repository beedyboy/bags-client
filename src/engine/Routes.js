import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import {
  LandingView, 
  NotFoundView, 
} from "../pages"; 
import NormalRoute from '../HOC/NormalRoute';
import { SingleView } from "../templates";

const Routes = () => {
  
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
    
       <NormalRoute
        component={LandingView}
        exact
        layout={SingleView}
        path="/home"
      />
       {/* <NormalRoute
        component={ResetPasswordView}
        exact
        layout={NormalLayout}
        path="/reset-password/:token/:id"
      />
     */} 
     <NormalRoute
        component={NotFoundView}
        exact
        layout={SingleView}
        path="/not-found"
      /> 
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};
export default Routes;
