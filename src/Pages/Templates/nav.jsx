import React from "react";

class NavBar extends React.Component {
  // constructor(props){ rfq use when Component is being used in app
  //   super(props)

  // }
  render() {
    return (
      <div id="navbar" className="navbar" role="navigation">
        <ul id="top-menu" className="navbar-nav navbar-right">
          <li>
            <a href="#teleport-option1">Option 1</a>
          </li>
          <li>
            <a href="#teleport-option2">Option 2</a>
          </li>
          <li>
            <a href="#teleport-option3">Option 3</a>
          </li>
          <li>
            <a href="#teleport-option4">Option 4</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
