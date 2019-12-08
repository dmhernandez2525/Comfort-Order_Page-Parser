import React from "react";

class NavBar extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
    <div id="navbar" className="navbar">
      <ul id="top-menu" className="navbar-nav navbar-right">
        <li><a href={`teleport-${this.props.navOption}`}>Option 1</a></li>
        <li><a href={`teleport-${this.props.navOption}`}>Option 2</a></li>                       
        <li><a href={`teleport-${this.props.navOption}`}>Option 3</a></li>                       
        <li><a href={`teleport-${this.props.navOption}`}>Option 4</a></li>                       
        <li><a href={`teleport-${this.props.navOption}`}>Option 5</a></li>
        <li><a href={`teleport-${this.props.navOption}`}>Option 6</a></li>
        <li><a href={`teleport-${this.props.navOption}`}>Option 7</a></li> 
        <li><a href={`teleport-${this.props.navOption}`}>Option 8</a></li> 
      </ul>                            
    </div>
    )
  }
}

export default NavBar
