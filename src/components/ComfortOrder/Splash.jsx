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
        <Header1 cla="Def"/>
        <Link className="LinkButton" to="/businessLogin"> businessLogin </Link>
        <Link className="LinkButton" to="/UserLanding"> UserLanding </Link>
      </div>
    );
  }
}

export default Splash;
