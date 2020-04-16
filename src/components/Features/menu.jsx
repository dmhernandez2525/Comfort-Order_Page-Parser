import React from "react";
import { cartItemsSetter } from "../apollo_hooks_hoc";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyInfo: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    return (
      <div className="container">
        <ul>
          {Object.keys(this.props.data).map((ele, i) => {
            let options = this.props.data[ele];
            return (
              <li key={i}>
                {ele}
                <ul>
                  {Object.keys(options).map((itemName, i) => {
                    let currentItem = options[itemName];
                    return (
                      <li
                        key={i}
                        onClick={() =>
                          this.props.addCartItems(currentItem, itemName)
                        }
                      >
                        <h1> {itemName} </h1>
                        <img src={currentItem.image} />
                        <h2> {currentItem.price} </h2>
                        <p> {currentItem.description} </p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default cartItemsSetter(Menu);
