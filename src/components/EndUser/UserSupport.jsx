import React from "react";
import { Link } from "react-router-dom";

class Support extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>User Support</h1>
        <Link to="/UserLanding"> Back </Link>
      </div>
    );
  }
}

export default Support;
