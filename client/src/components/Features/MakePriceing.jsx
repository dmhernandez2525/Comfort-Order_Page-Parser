import React from "react";

class MakePriceing extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      rows: [],
      rowValues:[]
    }
    this.createRow = this.createRow.bind(this)
    this.pricingBoxCreate = this.pricingBoxCreate.bind(this)
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  createRow(){
    let counter = this.state.rows.length
    this.setState(state => {
      const list = state.rowValues.concat({counter:{[`name${counter}`]:0,[`price${counter}`]:0,[`details${counter}`]:0}});
      return {
        rowValues: list
      };
    })

    return (
      <div key={`name${counter}`}>
        <input className="new-site-data"
          onChange={this.update(counter,`name${counter}`)}
          value={this.state.rowValues.counter}
          placeholder="Name"
        />

        <input className="new-site-data"
          onChange={this.update(counter,`price${counter}`)}
          placeholder="Price"
        />

        <input className="new-site-data"
          onChange={this.update(counter,`details${counter}`)}
          placeholder="Details"
        />

      </div>
    )
  }

  pricingBoxCreate(){
    this.setState(state =>{
      const list = state.rows.concat(this.createRow());
      return {
        rows:list
      }; 
    })
  }

  handleSubmit(){
    debugger
    let returnState = {}
    this.state.rowValues.forEach((obj,i) => { 
      debugger
      let dets = Object.keys(obj.counter)[2]
      let newFormat = obj.counter[dets].split("/")

      returnState[`row${i}`] = {
        name:obj.counter[`name${i}`],
        price:obj.counter[`price${i}`],
        details: newFormat
      }
    })
    debugger
    this.handleFeatureSubmit(this.props.feature, returnState)
  }

  update(priceSec,field) {
    return e => {
      e.persist()
        this.setState( state => { 
        let newState = Object.assign({},state)
        let newPrice = priceSec
        let newField = field
        newState.rowValues[newPrice].counter[newField] =  e.target.value
        return{
          rowValues:newState.rowValues
        }
      })}


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
        <h1> Priceing Feature </h1>
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
