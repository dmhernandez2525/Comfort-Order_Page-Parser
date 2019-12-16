import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import placeholder from "./placeholder.jpg"
import favicon from "./favicon.ico"
import companyLogo from "./ComfortOrderLogo.png"
import Modal from "../Features/modal"
import { modalHOC } from "../apollo_hooks_hoc"
import "./global.css"

const token = process.env.REACT_APP_TOKEN


class Restaurant extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalBool: this.props.modalBool

    }  

    this.teleRef1 = React.createRef()
    this.teleRef2 = React.createRef()
    this.teleRef3 = React.createRef()
    this.teleRef4 = React.createRef()
    this.teleRef5 = React.createRef()

    this.handleScroll = this.handleScroll.bind(this);
    this.setStateModalCB = this.setStateModalCB.bind(this);
  }

  executeScroll = (ref) => window.scrollTo(0, ref.current.offsetTop) 

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    document.getElementById("favicon").href = `${favicon}`
    document.getElementById("site-title").innerText = `Dark Spark Games`

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    document.getElementById("favicon").href = `${companyLogo}`
    document.getElementById("site-title").innerText = `Comfort Order`
  }

  handleScroll(event){
    let scrollHeight = event.currentTarget.scrollY
      if(scrollHeight >= 500){
        document.getElementById("navbar").classList.add("navbar-bg")
      }else{
        document.getElementById("navbar").classList.remove("navbar-bg")
      }
}

  setStateModalCB(modalBool) {
    // is invoked in HOC to cause React re-render 
    // passed to child component so it can pass to HOC to then invoke
    this.setState({modalBool})
  } 

  render(){

    return(
      <div className="restaurant template">
        <header className="restaurant-nav">
          <div id="navbar" className="navbar" role="navigation">
            <div className="container">
              <div className="nav-cart" onClick={() => this.props.setModalCache(true, this.setStateModalCB)}> <Modal modal="cart" modalBool={this.props.modalBool} setParentModalBool={this.setStateModalCB}/> </div>
              <ul id="top-menu" className="navbar-nav navbar-right">
                <li><a onClick={() => this.executeScroll(this.teleRef1)}>Option 1</a></li>
                <li><a onClick={() => this.executeScroll(this.teleRef2)}>Option 2</a></li>                     
                <li><a onClick={() => this.executeScroll(this.teleRef3)}>Option 3</a></li>                      
                <li><a onClick={() => this.executeScroll(this.teleRef4)}>Option 4</a></li>
                <li><a onClick={() => this.executeScroll(this.teleRef5)}>Option 5</a></li>
  
                {/* <li><a href="#one">Option 5</a></li>                        */}
                {/* <li><a href={`teleport-${this.props.navOption}`}>Option 6</a></li> */}
                {/* <li><a href={`teleport-${this.props.navOption}`}>Option 7</a></li>  */}
                {/* <li><a href={`teleport-${this.props.navOption}`}>Option 8</a></li>  */}
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
          <div className="container feature-display black">
            <h2 className="hero-title">Feature 1</h2>
          </div>
        </div>

        <div id="teleport-option2" className="feature" ref={this.teleRef2}>
          <div className="container feature-display ">
            <h2 className="hero-title">Feature 2</h2>
          </div>
        </div>

        <div id="teleport-option3" className="feature" ref={this.teleRef3}>
          <div className="container feature-display black">
            <h2 className="hero-title">Feature 3</h2>
          </div>
        </div>

        <div id="teleport-option4" className="feature" ref={this.teleRef4}>
          <div className="container feature-display ">
            <h2 className="hero-title">Feature 4</h2>
          </div>
        </div>

        <div id="teleport-option5" className="feature" ref={this.teleRef5}>
          <div className="container feature-display black">
            <h2 className="hero-title">Feature 5</h2>
          </div>
        </div>

        <div id="map-directions-button" className="container"><a href="https://www.google.com/maps/dir//84-740 Kili Dr?hl=en-US">Click Here For Directions Help</a></div>
        <div className="map-wrapper"><iframe id="restaurant-map" className="restaurant-map" src={`https://www.google.com/maps/embed/v1/place?key=${token}&q=84-740 Kili Dr`}></iframe></div>
        <footer id="restaurant-footer">
          <Footer /> 
        </footer>  
      </div>
    )

  }
}


export default modalHOC(Restaurant)