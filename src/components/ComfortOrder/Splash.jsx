import React from "react";
import { Header1 } from "@comfort-order/dry";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <Header1 />
      </div>
    );
  }
}

export default Splash;
