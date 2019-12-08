import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import placeholder from "./placeholder.jpg"
import "./global.css"

class Restaurant extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }


  render(){

    return(
      <div className="restaurant template">
        <header>
          <Nav />
        </header>
        <div className="landing-photo">
          <img src={placeholder}/>
        </div>
        <div id={`teleport-${this.props.navOption}`} className="feature">

        </div>

        <div id={`teleport-${this.props.navOption}`} className="feature">

        </div>

        <div id={`teleport-${this.props.navOption}`} className="feature">

        </div>

        <div id={`teleport-${this.props.navOption}`} className="feature">

        </div>
        <footer>
          <Footer /> 
        </footer>  
      </div>
    )

  }
}


export default Restaurant