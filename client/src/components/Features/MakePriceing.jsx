import React from "react";

class MakePriceing extends React.Component  {
  constructor(props){
    super(props)


    this.state = {
      rows: [],
      // rows:[this.row],
      rowValues:[]
    }
    this.createRow = this.createRow.bind(this)
    // this.row = this.createRow()
    this.pricingBoxCreate = this.pricingBoxCreate.bind(this)
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  createRow(){
    debugger
    let counter = this.state.rows.length
    return (
      <div>
        <input className="new-site-data"
          onChange={this.update(`input1${counter}`)}
          placeholder="Name"
        />

        <input className="new-site-data"
          onChange={this.update(`input2${counter}`)}
          placeholder="Name"
        />

      </div>
    )
  }

  pricingBoxCreate(defaultValue){
    // e.preventdefault
    this.setState(state =>{
      const list = state.rows.concat(this.createRow());
      // const list = state.rows.concat(this.row);
      debugger
      return {
        rows:list
      }; 
    })
  }
  handleSubmit(){
    debugger
    this.handleFeatureSubmit(this.state.rows)
  }
  update(field) {
    return e => this.setState({ [field]: e.target.value });
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
    return(
    <div > 
        <form onSubmit={this.handleSubmit }>
          {this.state.rows}
          <input type="submit"/>
        </form>
        <button onClick={e => this.pricingBoxCreate()}>Add More Pricing options</button>

    </div>
    )
  }
}

export default MakePriceing
