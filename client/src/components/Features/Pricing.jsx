import React from "react";

class Pricing extends React.Component {
  constructor(props){
    super(props)
      this.state = {}
      this.data = this.props.data
  }
// EXAMPLE INPUT
//   data:{
//     row1: {
//         name: "Free",
//         price: 0,
//         details: [
//             "Curabitur eu eros et risus rutrum elementum.",
//             "Phasellus a quam lobortis magna viverra tempus.",
//             "Sed dictum nibh porttitor aliquet pulvinar.",
//             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
//         ]
//     },
//     row2: {
//         name: "Plus",
//         price: 9,
//         details: [
//             "Curabitur eu eros et risus rutrum elementum.",
//             "Phasellus a quam lobortis magna viverra tempus.",
//             "Sed dictum nibh porttitor aliquet pulvinar.",
//             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
//             "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
//             "Nullam quis eros ac eros cursus tempor a quis lorem.",
//         ]
//     },
//     row3: {
//         name: "Pro",
//         price: 20,
//         details: [
//             "Curabitur eu eros et risus rutrum elementum.",
//             "Phasellus a quam lobortis magna viverra tempus.",
//             "Sed dictum nibh porttitor aliquet pulvinar.",
//             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
//             "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
//             "Nullam quis eros ac eros cursus tempor a quis lorem.",
//             "Proin vel nisi sed mauris tristique tincidunt vulputate sit amet nulla.",
//             "Phasellus vulputate nisi in libero euismod, lacinia mattis ligula cursus.",
//             "Donec porta enim vitae mollis bibendum.",
//             "Fusce in erat id diam porttitor pellentesque et non tortor."
//         ]
//     }
// }

  render(){
    let display = Object.values(this.data).map(plan =>{
        let rowDetails = plan.details.map(detail => (
            <li key={`${plan.name}:${detail}`}>{detail}</li>
        ))
        return(
            <div key={plan.name}>
                <div>
                    <h5>{plan.name}</h5>
                    <h1>{plan.price}</h1>
                </div>
                <ul>
                    {rowDetails}
                </ul>
            </div>
        )
    })
    return(
    <div > 
        {display}
    </div>
    )
  }
}

export default Pricing

