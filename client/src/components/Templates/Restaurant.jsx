import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import placeholder from "./placeholder.jpg"
import "./global.css"

class Restaurant extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      transform: 0
    }  
    this.teleRef1 = React.createRef()
    this.teleRef2 = React.createRef()
    this.teleRef3 = React.createRef()
    this.teleRef4 = React.createRef()

    this.handleScroll = this.handleScroll.bind(this);
  }

  executeScroll = (ref) => window.scrollTo(0, ref.current.offsetTop) 

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    let scrollHeight = event.currentTarget.scrollY
      if(scrollHeight >= 500){
        document.getElementById("navbar").classList.add("navbar-bg")
      }else{
        document.getElementById("navbar").classList.remove("navbar-bg")
      }
}

  render(){

    return(
      <div className="restaurant template">
        <header className="restaurant-nav">
          <div id="navbar" className="navbar" role="navigation">
            <div className="container">
              <ul id="top-menu" className="navbar-nav navbar-right">
                <li><a onClick={() => this.executeScroll(this.teleRef1)}>Option 1</a></li>
                <li><a onClick={() => this.executeScroll(this.teleRef2)}>Option 2</a></li>                     
                <li><a onClick={() => this.executeScroll(this.teleRef3)}>Option 3</a></li>                      
                <li><a onClick={() => this.executeScroll(this.teleRef4)}>Option 4</a></li>
                {/* <li><a href="#one">Option 5</a></li>                        */}
  
                {/* <li><a href={`teleport-${this.props.navOption}`}>Option 5</a></li>
                <li><a href={`teleport-${this.props.navOption}`}>Option 6</a></li>
                <li><a href={`teleport-${this.props.navOption}`}>Option 7</a></li> 
                <li><a href={`teleport-${this.props.navOption}`}>Option 8</a></li>  */}
              </ul>
            </div>                            
          </div>
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
        <div id="teleport-option1" className="feature" ref={this.teleRef1}>
          <div className="container feature-display">
            <h2 className="hero-title">Feature 1</h2>
          </div>
        </div>

        <div id="teleport-option2" className="feature" ref={this.teleRef2}>
          <div className="container feature-display">
            <h2 className="hero-title">Feature 2</h2>
          </div>
        </div>

        <div id="teleport-option3" className="feature" ref={this.teleRef3}>
          <div className="container feature-display">
            <h2 className="hero-title">Feature 3</h2>
          </div>
        </div>

        <div id="teleport-option4" className="feature" ref={this.teleRef4}>
          <div className="container feature-display">
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