import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import AuthRoute from "../utils/route_util";
import Nav from "./Nav/Nav";

import DisplaySite from "./DisplaySite/DisplaySite";

import Four0Four from "../Pages/Four0Four";
import Splash from "../Pages/Splash";

import "@comfort-order/dry/dist/index.css";

require("dotenv").config();

const App = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Nav} />
        <AuthRoute exact path="/register" component={Nav} routeType="auth" />
        <AuthRoute exact path="/login" component={Nav} routeType="auth" />
        <Switch>
          <AuthRoute
            exact
            path="/register"
            component={Register}
            routeType="auth"
          />
          <AuthRoute exact path="/login" component={Login} routeType="auth" />

          <Route exact path="/site/:id" component={DisplaySite} />

          {/* <AuthRoute exact path="/" component={BusinessLanding} routeType="Business"/> */}
          <Route path="/home" component={Splash} />
          <AuthRoute path="/" routeType="auth" />
          {/* <AuthRoute exact path="/" component={UserLanding} routeType="EndUser" /> */}
          <Route path="/" component={Four0Four} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
