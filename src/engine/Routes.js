import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import {
  LandingView,
  NotFoundView,
  ProductView,
  CategoryView,
  ProductDetailsView,
} from "../pages";
import NormalRoute from "../HOC/NormalRoute";
import { SingleView, GeneralView } from "../templates";

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
        <NormalRoute
          component={ProductView}
          exact
          layout={GeneralView}
          path="/products"
        />
        <NormalRoute
          component={CategoryView}
          exact
          layout={GeneralView}
          path="/category/:slug"
        />

        <NormalRoute
          component={ProductDetailsView}
          exact
          layout={GeneralView}
          path="/products/:slug"
        />

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
