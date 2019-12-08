import React from "react";
import { HashRouter, Switch , Route} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";


import DisplaySite from "./business/DisplaySite";


import BusinessLanding from "./business/BusinessLanding";
import Profile from "./business/Profile/DisplayProfile";
import Support from "./business/Support/DisplaySupport";
import Pos from "./business/POS/DisplayPos";
import Inventory from "./business/Inventory/DisplayInventory";


import MasterLanding from "./MasterAccount/MasterLanding";
import AuthRoute from '../util/route_util'
import Nav from "./Nav";
import Restaurant from "./templates/Restaurant"

const App = () => {
  return (
    <HashRouter>
      <div>
        {/* <Nav /> */}
        {/* <h1>Comfort Order</h1> */}
        <Switch>
          <AuthRoute exact path="/register" component={Register} routeType="auth" />
          <AuthRoute exact path="/login" component={Login} routeType="auth" />
          <AuthRoute exact path="/mainLogin" component={MasterLanding} routeType="auth" />

          <AuthRoute exact path="/businessLogin" component={BusinessLanding} routeType="auth" />
          <AuthRoute exact path="/Profile" component={Profile} routeType="auth" />
          <AuthRoute exact path="/Support" component={Support} routeType="auth" />
          <AuthRoute exact path="/POS" component={Pos} routeType="auth" />
          <AuthRoute exact path="/Inventory" component={Inventory} routeType="auth" />


          <Route exact path="/site/:id" component={DisplaySite} />
          <Route exact path="/restdummy" component={Restaurant} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;