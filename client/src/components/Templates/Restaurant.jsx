import React from "react";
import { Link } from 'react-router-dom';
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
    this.teleRefHome = React.createRef()
    this.teleRef1 = React.createRef()
    this.teleRef2 = React.createRef()
    this.teleRef3 = React.createRef()
    this.teleRef4 = React.createRef()
    this.teleRef6 = React.createRef()
    this.teleRef7 = React.createRef()
    this.teleRef8 = React.createRef()
    this.teleRef9 = React.createRef()
    this.teleRef10 = React.createRef()
    this.teleRefContact = React.createRef()
    this.teleRefSocal = React.createRef()
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
    let allFeatures = this.props.features
    let css = ["container feature-display black", "container feature-display"]

    let nav = Object.keys(allFeatures).map((feature,i) =>{
      return <li><a onClick={() => this.executeScroll(this[`teleRef${i + 1}`])}>{allFeatures[feature].type}</a></li>
    })

    nav.unshift(<li><a onClick={() => this.executeScroll(this.teleRefHome)}>Home</a></li>)
    nav.push(<li><a onClick={() => this.executeScroll(this.teleRefContact)}>Contact</a></li>)
    nav.push(<li><a onClick={() => this.executeScroll(this.teleRefSocal)}>Socal</a></li>)
    nav.push(<li> <Link to="/login">Login</Link></li>)
    nav.push(<li><Link to="/register">Register</Link></li>)
                
                

    let display = Object.keys(allFeatures).map((currentFeature,i) =>{
      return (
        <div id={`teleport-option${i}`} className="feature" ref={this[`teleRef${i + 1}`]}>
          <div className={css[ i % 2 ]}>
            <h2 className="hero-title">{allFeatures[currentFeature].type}</h2>
            {allFeatures[currentFeature].feature}
          </div>
        </div>
      )
    })

    return(
      <div className="restaurant template">
        <header className="restaurant-nav">
          <div id="navbar" className="navbar" role="navigation">
            <div className="container">
              <div className="nav-cart" onClick={() => this.props.setModalCache(true, this.setStateModalCB)}> <Modal modal="cart" modalBool={this.props.modalBool} setParentModalBool={this.setStateModalCB}/> </div>

              <ul id="top-menu" className="navbar-nav navbar-right">
                {nav}
              </ul>

            </div>                        
          </div>
        </header>

        <div id="teleport-Home" className="" ref={this.teleRefHome}>
          <section id="restaurant-hero-section">
            <div className="hero-photo-sizing">
              <div className="landing-photo-container">
                <img src={placeholder}/>
                <div className="top-hero-content">
                  <span className="small-hero-title">Welcome To</span>
                   <h2 className="hero-title">{this.props.businessData.name}</h2>
                   <p>{this.props.businessData.slogan}</p>           
                </div>
              </div>
            </div>
          </section>
        </div>

        {display}

        <div id="teleport-Contact" className="feature" ref={this.teleRefContact}>
          <div id="map-directions-button" className="container"><a href={`https://www.google.com/maps/dir//${this.props.businessData.map}?hl=en-US`}>Click Here For Directions Help</a></div>
          <div className="map-wrapper"><iframe id="restaurant-map" className="restaurant-map" src={`https://www.google.com/maps/embed/v1/place?key=${token}&q=${this.props.businessData.map}`}></iframe></div>
        </div>       

        <div id="teleport-footer" className="feature" ref={this.teleRefSocal}>
          <footer id="restaurant-footer">
            <Footer /> 
          </footer>  
        </div>

      </div>
    )

  }
}


export default modalHOC(Restaurant)