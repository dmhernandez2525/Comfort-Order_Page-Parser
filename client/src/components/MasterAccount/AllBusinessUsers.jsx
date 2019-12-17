import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Queries from "../../graphql/queries";
import "../css/master.css";
const { FETCH_All_BUSINESS_USERS } = Queries;


class AllBusinessUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCache = this.updateCache.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  updateCache(client, { data }) {
    client.writeData({
      data: { site: data.FetchAllBusinessUsers }
    });
  }  

  render() {
    return (
      <Query
        query={FETCH_All_BUSINESS_USERS}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={(cache, data) => {}}
      >
        {({ loading, error,data }) => {
            if(error){ return(<div>{error.networkError.message}</div>)}
            else if (loading){return(<div>loading</div>)}
            let allBusinessesUsers = data.businessUsers.map(user => {
                return (
                   <li key={user._id} className="business-user-holders">
                    <h1>{`Name:   ${user.name}`}</h1>
                    <h1>{`ID:   ${user._id}`}</h1>
                  </li>
                )
            })
            return (                
            <div>
                <ul >
                    {allBusinessesUsers }
                </ul>
            </div>
            )
        }}
    </Query>
    );
  }
}

export default withRouter(AllBusinessUsers);
