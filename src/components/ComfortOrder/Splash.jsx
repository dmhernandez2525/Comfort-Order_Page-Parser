import  React from "react";
import {Header1} from "@comfort-order/dry";
import { Link } from "react-router-dom"

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>        
        <Header1 cla="Tri" backGroundUrl="https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-512" />
        <Link className="LinkButton" to="/businessLogin"> businessLogin </Link>
        <Link className="LinkButton" to="/UserLanding"> UserLanding </Link>
      </div>
    );
  }
}

export default Splash;
