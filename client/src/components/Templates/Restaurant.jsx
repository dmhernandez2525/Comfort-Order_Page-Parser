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
        <section id="restaurant-hero-section">
          <div className="hero-photo-sizing">
            <div className="landing-photo-container">
              <img src={placeholder}/>
              <div className="top-hero-content">
                <span className="small-hero-title">Welcome</span>
                <h2 className="hero-title">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
              </div>
            </div>
          </div>
        </section>
        <div id="teleport-option1" className="feature">
          <div className="container">
            <h2 className="hero-title">Feature 1</h2>
          </div>
        </div>

        <div id="teleport-option2" className="feature">
          <div className="container">
            <h2 className="hero-title">Feature 2</h2>
          </div>
        </div>

        <div id="teleport-option3" className="feature">
          <div className="container">
            <h2 className="hero-title">Feature 3</h2>
          </div>
        </div>

        <div id="teleport-option4" className="feature">
          <div className="container">
            <h2 className="hero-title">Feature 4</h2>
          </div>
        </div>
        <footer>
          <Footer /> 
        </footer>  
      </div>
    )

  }
}


export default Restaurant