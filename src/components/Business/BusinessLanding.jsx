import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

class BusinessLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { site: data.makeBusiness },
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="LinkHolder">
            <Link className="LinkButton" to="/Profile">
              {" "}
              Profile{" "}
            </Link>
            <Link className="LinkButton" to="/Support">
              {" "}
              Support{" "}
            </Link>
            <Link className="LinkButton" to="/POS">
              {" "}
              POS{" "}
            </Link>
            <Link className="LinkButton" to="/Inventory">
              {" "}
              Inventory{" "}
            </Link>
          </div>
          <div className="log-out">
            <Nav />
          </div>
        </nav>

        <div className="mainLanding">
          <div className="holderHolder">
            <h1>Orders</h1>
            <div className="ordersHolder">
              <div>Sample Orders</div>
            </div>
          </div>
          <div className="holderHolder">
            <h1>Messages</h1>
            <div className="messagesHolder">
              <div>Sample Message</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessLanding;
