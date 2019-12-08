import  React from "react";
import { Link } from "react-router-dom"


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Comfort Order Splash </h1>
        <Link className="LinkButton" to="/businessLogin"> businessLogin </Link>
        <Link className="LinkButton" to="/Master"> Master </Link>
        <Link className="LinkButton" to="/UserLanding"> UserLanding </Link>
      </div>
    );
  }
}

export default Splash;
