import React from "react";
import "../../css/MakeFeatures/MakeImageCarousel.css"

class MakeCarousel extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      rows: [],
      rowValues:[]
    }
    this.createRow = this.createRow.bind(this)
    this.carouselBoxCreate = this.carouselBoxCreate.bind(this)
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  createRow(){
    let counter = this.state.rows.length
    this.setState(state => {
      const list = state.rowValues.concat({counter:{[`picUrl${counter}`]:0,[`title${counter}`]:0,[`detail${counter}`]:0}});
      return {
        rowValues: list
      };
    })
    return (
      <div className="image-carousel-items" key={`name${counter}`}>

        <input className="new-site-data"
          onChange={this.update(counter,`picUrl${counter}`)}
          value={this.state.rowValues.counter}
          placeholder="PicUrl"
        />

        <input className="new-site-data"
          onChange={this.update(counter,`title${counter}`)}
          placeholder="Title"
        />

        <input className="new-site-data"
          onChange={this.update(counter,`detail${counter}`)}
          placeholder="Detail"
        />

      </div>
    )
  }

  carouselBoxCreate(){
    this.setState(state =>{
      const list = state.rows.concat(this.createRow());
      return {
        rows:list
      }; 
    })
  }

  handleSubmit(){
    let returnState = {}
    this.state.rowValues.forEach((obj,i) => { 

      returnState[`row${i}`] = {
        picUrl:obj.counter[`picUrl${i}`],
        title:obj.counter[`title${i}`],
        detail:obj.counter[`detail${i}`],
      }
    })
    this.handleFeatureSubmit(this.props.feature, returnState)
  }

  update(carouselSection,field) {
    return e => {
      e.persist()
        this.setState( state => { 
        let newState = Object.assign({},state)
        let newCarousel = carouselSection
        let newField = field
        newState.rowValues[newCarousel].counter[newField] =  e.target.value
        return{
          rowValues:newState.rowValues
        }
      })}


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
    return(
    <div className="image-carousel-div" > 
        <h1> Carousel Feature </h1>

        <button onClick={e => this.carouselBoxCreate()}>Add More Carousel options</button>

        <form className="image-carousel-submit" onSubmit={this.handleSubmit }>
          {this.state.rows}
          <input type="submit"/>
        </form>
        
    </div>
    )
  }
}

export default MakeCarousel



