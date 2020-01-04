import React from "react";
import TestFe from "./Pricing" // Just change this route

class Test extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  render(){
     // change data to the test data that you want   
      let data = {
        row1: {
            name:"Free",
            price: 0,
            details: [
                "Curabitur eu eros et risus rutrum elementum.",
                "Phasellus a quam lobortis magna viverra tempus.",
                "Sed dictum nibh porttitor aliquet pulvinar.",
                "Pellentesque vestibulum erat eu ex laoreet volutpat.",
            ]
        },
        row2: {
            name:"Plus",
            price: 9,
            details: [
                "Curabitur eu eros et risus rutrum elementum.",
                "Phasellus a quam lobortis magna viverra tempus.",
                "Sed dictum nibh porttitor aliquet pulvinar.",
                "Pellentesque vestibulum erat eu ex laoreet volutpat.",
                "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
                "Nullam quis eros ac eros cursus tempor a quis lorem.",
            ]
        },
        row3: {
            name:"Pro",
            price: 20,
            details: [
                "Curabitur eu eros et risus rutrum elementum.",
                "Phasellus a quam lobortis magna viverra tempus.",
                "Sed dictum nibh porttitor aliquet pulvinar.",
                "Pellentesque vestibulum erat eu ex laoreet volutpat.",
                "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
                "Nullam quis eros ac eros cursus tempor a quis lorem.",
                "Proin vel nisi sed mauris tristique tincidunt vulputate sit amet nulla.",
                "Phasellus vulputate nisi in libero euismod, lacinia mattis ligula cursus.",
                "Donec porta enim vitae mollis bibendum.",
                "Fusce in erat id diam porttitor pellentesque et non tortor."
            ]
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

