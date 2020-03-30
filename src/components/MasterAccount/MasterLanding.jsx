import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AllBusiness from './AllBusiness';
import AllBusinessUsers from './AllBusinessUsers';
import CreateBusiness from './CreateBusiness';
import MasterRegister from './MasterRegister';


class MasterLanding extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <h1 className="main-all-sites">All Business Sites</h1>
          <AllBusiness/>
        <h1 className="main-all-bus-users">All Business Users</h1>
          <AllBusinessUsers/>
        <h1 className="main-make-business">Create Business Site</h1>
          <CreateBusiness/>
        <h1 className="main-make-user">Make User</h1>
          <MasterRegister/>
      </div>
    );
  }
}

export default withRouter(MasterLanding);
