import React from "react";

class MakePriceing extends React.Component  {
  constructor(props){
    super(props)
    this.row = (
      <div>
        <input className="new-site-data"
          placeholder="Name"
        />

        <input className="new-site-data"
          placeholder="Name"
        />

      </div>
    )
    this.state = {
      rows:[this.row]
    }
    this.pricingBoxCreate = this.pricingBoxCreate.bind(this)
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
  }

  pricingBoxCreate(){
    this.setState(state =>{
      const list = state.rows.concat(this.row);
      debugger
      return {
        rows:list
      }; 
    })
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
    // let allInputs = this.state.rows.map
    // let display = Object.values(this.data).map(plan =>{
    //     let rowDetails = plan.details.map(detail => (
    //         <li key={`${plan.name}:${detail}`}>{detail}</li>
    //     ))
    //     return(
    //         <div key={plan.name}>
    //         </div>
    //     )
    // })
    return(
    <div > 
        <form onSubmit={this.handleFeatureSubmit(this.state.rows)}>
          {this.state.rows}
          <input type="submit"/>
        </form>
        <button  onClick={this.pricingBoxCreate}>Add More Pricing options</button>

    </div>
    )
  }
}

export default MakePriceing
