import React from "react";
import "../../css/MakeFeatures/MakeSpotlightGallery.css"

class MakeSpotlightGallery extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      rows: [],
      rowValues:[]
    }
    this.createRow = this.createRow.bind(this)
    this.GalleryBoxCreate = this.GalleryBoxCreate.bind(this)
    this.handleFeatureSubmit = this.props.handleFeatureSubmit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  createRow(){
    let counter = this.state.rows.length
    this.setState(state => {
      const list = state.rowValues.concat({counter:{[`picUrl${counter}`]:0,[`comment${counter}`]:0}});
      return {
        rowValues: list
      };
    })
    return (
      <div className="gallery-items" key={`name${counter}`}>

        <input className="new-site-data"
          onChange={this.update(counter,`picUrl${counter}`)}
          value={this.state.rowValues.counter}
          placeholder="picUrl"
        />

        <input className="new-site-data"
          onChange={this.update(counter,`comment${counter}`)}
          placeholder="comment"
        />


      </div>
    )
  }

  GalleryBoxCreate(){
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
        comment:obj.counter[`comment${i}`],
      }
    })
    this.handleFeatureSubmit(this.props.feature, returnState)
  }

  update(gallerySection,field) {
    return e => {
      e.persist()
        this.setState( state => { 
        let newState = Object.assign({},state)
        let newGallery = gallerySection
        let newField = field
        newState.rowValues[newGallery].counter[newField] =  e.target.value
        return{
          rowValues:newState.rowValues
        }
      })}


  }
// EXAMPLE INPUT
//   data:{
//     img1: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     },
//     img2: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     },
//     img3: {
//         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
//         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
//     }
// }

  render(){
    return(
    <div className="gallery-div" > 
            <h1> Gallery Feature </h1>

            <button onClick={e => this.GalleryBoxCreate()}>Add More Gallery options</button>

        <form className="gallery-submit" onSubmit={this.handleSubmit }>
          {this.state.rows}
          <input type="submit"/>
        </form>
        
    </div>
    )
  }
}

export default MakeSpotlightGallery



