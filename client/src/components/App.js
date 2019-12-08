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
import Restaurant from "./Templates/Restaurant"

import DisplaySite from "./Business/DisplaySite";

import Four0Four from "./ComfortOrder/Four0Four";
import Splash from "./ComfortOrder/Splash";

const App = () => {
  return (
    <HashRouter>
      <div>
        {/* <Nav /> */}
        {/* <h1>Comfort Order</h1> */}
        <Switch>
          <AuthRoute exact path="/register" component={Register} routeType="auth" />
          <AuthRoute exact path="/login" component={Login} routeType="auth" />
          <AuthRoute exact path="/Master" component={MasterLanding} routeType="auth" />

          <AuthRoute exact path="/BusinessLogin" component={BusinessLanding} routeType="auth" />
          <AuthRoute exact path="/Profile" component={Profile} routeType="auth" />
          <AuthRoute exact path="/Support" component={Support} routeType="auth" />
          <AuthRoute exact path="/POS" component={Pos} routeType="auth" />
          <AuthRoute exact path="/Inventory" component={Inventory} routeType="auth" />

          <AuthRoute exact path="/UserLanding" component={UserLanding} routeType="auth" />
          <AuthRoute exact path="/UserProfile" component={UserProfile} routeType="auth" />
          <AuthRoute exact path="/UserSupport" component={UserSupport} routeType="auth" />


          <Route exact path="/site/:id" component={DisplaySite} />
          <Route exact path="/restdummy" component={Restaurant} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;