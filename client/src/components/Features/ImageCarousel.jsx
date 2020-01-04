import React from "react";
import "../css/Features/ImageCarousel.css"

class ImageCarousel extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
      this.data = this.props.data
  }
// EXAMPLE INPUT
//   data:{
//     slide1: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         title: "Hey",
//         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     },
//     slide2: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         title: "Hey",
//         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     },
//     slide3: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         title: "Hey",
//         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     }
// }

  render(){
    let display = Object.values(this.data).map(slide =>{
        return(
            <div className="slide-all" key={slide.name}>
                <div className="img-style" style={{backgroundImage: `url(${slide.picUrl})` }}>
                    <h3>{slide.title}</h3>
                    <p>{slide.detail}</p>
                </div>
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

export default ImageCarousel

