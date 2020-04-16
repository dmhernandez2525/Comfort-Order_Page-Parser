import React from "react";
import MenuItem from "./MakeMenuItem";

class MakeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createCategory = this.createCategory.bind(this);
    this.categoryItemCreate = this.categoryItemCreate.bind(this);
    this.handleFeatureSubmit = this.props.handleFeatureSubmit;
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  createCategory(name) {
    return (
      <div key={`category-item-div${name}`}>
        <MenuItem
          key={`category-item${name}`}
          submit={this.handleItemSubmit}
          name={name}
        />
      </div>
    );
  }

  categoryItemCreate(e) {
    e.preventDefault();
    let name = this.refs.theInput.value;
    this.setState((state) => {
      const category = this.createCategory(name);
      return {
        [name]: { category, data: "" },
      };
    });
  }

  handleSubmit() {
    let returnState = {};
    Object.keys(this.state).forEach((name) => {
      returnState[name] = this.state[name].data;
    });
    this.handleFeatureSubmit(this.props.feature, returnState);
  }

  handleItemSubmit(name, data) {
    this.setState((state) => {
      let newState = Object.assign({}, state);
      let newName = name;
      newState[newName].data = data;
      return {
        [name]: newState[newName],
      };
    });
  }

  update(name) {
    return (e) => {
      e.persist();
      this.setState((state) => {
        let newState = Object.assign({}, state);
        let newStateValues = Object.assign({}, state);
        delete newState[name];
        newState[e.target.value] = newStateValues[name];
        return {
          [newState[e.target.value]]: newStateValues[name],
        };
      });
    };
  }

  // EXAMPLE INPUT
  // data:{
  //         category1: {
  //             pizza: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             pancake: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             salsa: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             }
  //         },
  //         category2: {
  //             pizza: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             pancake: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             salsa: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             }
  //         },
  //         category3: {
  //             pizza: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             pancake: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             salsa: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             }
  //         },
  //         category4: {
  //             pizza: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             pancake: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             },
  //             salsa: {
  //                 image:"https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
  //                 price: 10,
  //                 description: "This is the tatsy items description"
  //             }
  //         }
  //     }

  render() {
    let display = [];
    Object.values(this.state).forEach((category) => {
      display.push(category.category);
    });
    return (
      <div className="category-div">
        <h1> Category Feature </h1>

        <form className="category-submit" onSubmit={this.categoryItemCreate}>
          <input placeholder="name" ref="theInput"></input>
          <button>Add More Category options</button>
        </form>

        <form className="category-submit" onSubmit={this.handleSubmit}>
          <input type="submit" />
        </form>

        {display}
      </div>
    );
  }
}

export default MakeMenu;
