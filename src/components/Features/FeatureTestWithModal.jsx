import React from "react";
import TestFe from "./menu"; // Just change this route
import { modalHOC } from "../apollo_hooks_hoc";
import Modal from "./modal";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setStateModalCB = this.setStateModalCB.bind(this);
  }

  setStateModalCB(modalBool) {
    this.setState({ modalBool });
  }

  render() {
    // change data to the test data that you want
    let data = {
      category1: {
        pizza: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        pancake: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        salsa: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
      },
      category2: {
        pizza: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        pancake: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        salsa: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
      },
      category3: {
        pizza: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        pancake: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        salsa: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
      },
      category4: {
        pizza: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        pancake: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
        salsa: {
          image:
            "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
          price: 10,
          description: "This is the tatsy items description",
        },
      },
    };
    return (
      <div>
        <div
          className="nav-cart"
          onClick={() => this.props.setModalCache(true, this.setStateModalCB)}
        >
          {" "}
          <Modal
            modal="cart"
            modalBool={this.props.modalBool}
            setParentModalBool={this.setStateModalCB}
          />{" "}
        </div>
        <TestFe data={data} />
      </div>
    );
  }
}

export default modalHOC(Test);
