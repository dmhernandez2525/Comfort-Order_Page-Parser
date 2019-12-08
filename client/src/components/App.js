import React from "react";
import { HashRouter, Switch , Route} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";

import BusinessLanding from "./Business/BusinessLanding";
import Profile from "./Business/Profile/DisplayProfile";
import Support from "./Business/Support/DisplaySupport";
import Pos from "./Business/POS/DisplayPos";
import Inventory from "./Business/Inventory/DisplayInventory";

import UserLanding from "./EndUser/UserLanding";
import UserProfile from "./EndUser/UserProfile";
import UserSupport from "./EndUser/UserSupport";


import MasterLanding from "./MasterAccount/MasterLanding";
import AuthRoute from '../util/route_util'
import Nav from "./Nav";

import DisplaySite from "./Business/DisplaySite";

import Four0Four from "./ComfortOrder/Four0Four";
import Splash from "./ComfortOrder/Splash";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Nav />
        <Switch>
          <AuthRoute exact path="/register" component={Register} routeType="auth" />
          <AuthRoute exact path="/login" component={Login} routeType="auth" />
          <AuthRoute exact path="/Master" component={MasterLanding} routeType="protected" />

          <AuthRoute exact path="/BusinessLogin" component={BusinessLanding} routeType="protected" />
          <AuthRoute exact path="/Profile" component={Profile} routeType="protected" />
          <AuthRoute exact path="/Support" component={Support} routeType="protected" />
          <AuthRoute exact path="/POS" component={Pos} routeType="protected" />
          <AuthRoute exact path="/Inventory" component={Inventory} routeType="protected" />

          <AuthRoute exact path="/UserLanding" component={UserLanding} routeType="protected" />
          <AuthRoute exact path="/UserProfile" component={UserProfile} routeType="protected" />
          <AuthRoute exact path="/UserSupport" component={UserSupport} routeType="protected" />


          <Route exact path="/site/:id" component={DisplaySite} />
          <Route exact path="/" component={Splash} />
          <Route path="/" component={Four0Four} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;