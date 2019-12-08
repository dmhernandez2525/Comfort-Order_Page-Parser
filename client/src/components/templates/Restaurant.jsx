import React from "react";
import Nav from "./nav";
import Footer from "./footer";
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

        <div className="feature">

        </div>

        <div className="feature">

        </div>

        <div className="feature">

        </div>

        <div className="feature">

        </div>
        <footer>
          <Footer /> 
        </footer>  
      </div>
    )

  }
}


export default Restaurant