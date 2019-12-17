import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Queries from "../../graphql/queries";
const { FETCH_All_BUSINESS } = Queries;


class AllBusiness extends Component {
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
      data: { site: data.FetchAllBusiness }
    });
  }  

  render() {
    return (
      <Query
        query={FETCH_All_BUSINESS}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={(cache, data) => {}}
      >
          {({ loading, error,data }) => {
              if(error){return(<div>{error.networkError.message}</div>)}
              else if (loading){return(<div>loading</div>)}
              // rfq Make a Business index 
              // let fealds = [_id, user, features, template, name, map, url, phoneNumber, address, slogan, hours, about, businessData]
              let allBusinesses = data.businesses.map(business => {
                return <li key={business._id}>{`${business.name}: ${business._id}`}<a href={business.name}>Url</a> </li>
              })
              return (                
                <div>
                    <ul>
                      {allBusinesses}
                    </ul>
                </div>
              )
          }}
      </Query>
    );
  }
}

export default withRouter(AllBusiness);
