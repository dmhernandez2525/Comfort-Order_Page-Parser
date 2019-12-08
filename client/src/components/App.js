import React from "react";
import { HashRouter, Switch , Route} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import DisplaySite from "./business/DisplaySite";
import CreateBusiness from "./MasterAccount/CreateBusiness";
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
          <AuthRoute exact path="/mainLogin" component={CreateBusiness} routeType="auth" />
          <Route exact path="/site/:id" component={DisplaySite} />
          <Route exact path="/restdummy" component={Restaurant} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;