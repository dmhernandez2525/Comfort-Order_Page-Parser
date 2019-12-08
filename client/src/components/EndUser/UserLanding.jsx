import  React from "react";
import { Link } from "react-router-dom"


class UserLanding extends React.Component {
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
            <h1>User Landing</h1>
            <Link to="/UserProfile"> Profile </Link>
            <Link to="/UserSupport"> Support </Link>
      </div>
    );
  }
}

export default UserLanding;
