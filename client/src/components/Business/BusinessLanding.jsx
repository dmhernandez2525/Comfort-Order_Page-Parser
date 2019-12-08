import  React from "react";
import { Link } from "react-router-dom"


class BusinessLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  updateCache(client, { data }) {
    
    client.writeData({
      data: { site: data.makeBusiness }
    });
  }  

  render() {
    return (
      <div>
                <Link to="/Profile"> Profile </Link>
                <Link to="/Support"> Support </Link>
                <Link to="/POS"> POS </Link>
                <Link to="/Inventory"> Inventory </Link>
      </div>
    );
  }
}

export default BusinessLanding;
