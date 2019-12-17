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
        <h1>AllBusiness</h1>
          <AllBusiness/>
        <br/>
        <br/>
        <h1>AllBusiness</h1>
          <AllBusinessUsers/>
        <br/>
        <br/>
        <h1>CreateBusiness</h1>
          <CreateBusiness/>
        <br/>
        <br/>
        <h1>Make User</h1>
          <MasterRegister/>
      </div>
    );
  }
}

export default withRouter(MasterLanding);
