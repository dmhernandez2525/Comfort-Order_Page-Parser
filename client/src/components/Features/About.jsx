import React from "react";
import "../css/Features/About.css"

class About extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
      this.data = this.props.data
  }
// EXAMPLE INPUT
//   data:{
//       about:{
//           title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt",
//           text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra elit a vehicula viverra. Pellentesque scelerisque nisi eu dui vehicula, ut tristique dui accumsan. Nullam posuere bibendum condimentum. Aenean tempor arcu quis velit ultrices molestie. Etiam dignissim ex id arcu elementum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id dictum velit, ut varius nisi. Nullam lobortis eget lectus sed blandit. Phasellus ultrices felis ac sollicitudin mollis. Phasellus consectetur, sapien nec gravida vehicula, enim metus faucibus sapien, quis gravida libero libero id velit. Fusce augue mi, vestibulum sed dapibus non, faucibus sit amet urna. Praesent bibendum felis condimentum sem accumsan, id maximus velit egestas. Proin ut erat ligula. Etiam eu sollicitudin libero.",
//           pic: "https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48"
//       }
//   }

  render(){
    let display = Object.values(this.data).map((about) =>{
        return (
            <div>
                <h1>{about.title}</h1>
                <p>{about.text}</p>
                <div className="about-pic" style={{ backgroundImage: `url(${about.pic})` }} ></div>
            </div>
        )
    })
    return(
    <div> 
        {display}
    </div>
    )
  }
}

export default About

