import React from "react";
import TestFe from "./SpotlightGallery" // Just change this route

class Test extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
     // change data to the test data that you want   
    let data = {
        img1: {
            picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
            comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        },
        img2: {
            picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
            comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        }
    }

    return(
    <div > 
        <TestFe data={data}/>                          
    </div>
    )
  }
}

export default Test

