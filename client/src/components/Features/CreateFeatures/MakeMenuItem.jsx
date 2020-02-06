import React from "react";
import "../../css/MakeFeatures/MakeCategory.css"


class MakeMenuItem extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
    }
    this.createCategory = this.createCategory.bind(this)
    this.categoryItemCreate = this.categoryItemCreate.bind(this)
    this.handleFeatureSubmit = this.props.submit
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  createCategory(name){
      return (
          <div className="category-items" key={`name${name}`}>
              <h1 className="category-item-name">{name}</h1>
              <div >
                <input className="new-site-data"
                    onChange={this.update(name, "image")}
                    placeholder="image"
                />

                <input className="new-site-data"
                    onChange={this.update(name, "price")}
                    placeholder="price"
                />

                <input className="new-site-data"
                    onChange={this.update(name, "description")}
                    placeholder="description"
                />                
              </div>

          </div>
      )
  }

  categoryItemCreate(e){

    let name = this.refs.theInput.value;
    this.setState(state =>{
        const category = this.createCategory(name);
      return {
        [name]:{category,data:{image:"",price:"",description:""}}
      }; 
    })
  }

  handleSubmit(){
    let returnState  ={} 
    Object.keys(this.state).forEach(name =>{
        returnState[name] = this.state[name].data
    })
    this.handleFeatureSubmit(this.props.name,returnState)
  }

  update(categoryItem,field) {
    return e => {
      e.persist()
        this.setState( state => { 
        let newState = Object.assign({},state)
        let newField = field
        newState[categoryItem].data[newField] =  e.target.value
        return{
            [categoryItem]:newState[categoryItem]
        }
      })}
  }

// EXAMPLE INPUT
// category1: {
//     pizza: {
//         name:"",
//         image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//         price: 10,
//         description: "This is the tatsy items description"
//     },
//     pancake: {
//         image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//         price: 10,
//         description: "This is the tatsy items description"
//     },
//     salsa: {
//         image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
//         price: 10,
//         description: "This is the tatsy items description"
//     }
// }

  render(){
    let display = []
    Object.values(this.state).forEach(category => {
        display.push(category.category)
    })
    return(
    <div className="category-div" > 
        <h1 className="category-item-name"> {`${this.props.name}`} </h1>

        <form className="category-submit" onSubmit={this.categoryItemCreate}>
            <input placeholder="name" ref="theInput"></input>
          <button>{`Add Category Items in ${this.props.name}`}</button>
        </form>

        {display}

        <form className="category-submit" onSubmit={this.handleSubmit }>
          <input type="submit"/>
        </form>

    </div>
    )
  }
}

export default MakeMenuItem



