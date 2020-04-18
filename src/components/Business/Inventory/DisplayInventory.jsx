import React from "react";
import { Link } from "react-router-dom";

class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <Link to="/businessLogin"> Back </Link>
        <di></di>
      </div>
    );
  }
}

export default Inventory;
