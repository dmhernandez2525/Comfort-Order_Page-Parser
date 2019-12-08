import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AllBusiness from './AllBusiness';
import CreateBusiness from './CreateBusiness'


class MasterLanding extends Component {
  constructor(props) {
    super(props);
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
        <h1>CreateBusiness</h1>
          <CreateBusiness/>
      </div>
    );
  }
}

export default withRouter(MasterLanding);
