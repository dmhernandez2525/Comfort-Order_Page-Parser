import React, { Component } from "react";
import { Query } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Queries from "../../graphql/queries";
import "../css/master.css";
import Loading from "../Loading"
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
              if(error){debugger 
                return(<div>{error.networkError.message}</div>)}
              else if (loading){return(<div><Loading/></div>)}
              // rfq Make a Business index 
              let fealds = ["_id", "user", "features", "template", "name", "map", "url", "phoneNumber", "address", "slogan" ]
              let allBusinesses = data.businesses.map(business => {
                let businessInfo = fealds.map(feald => {
                  return (
                    <li key={`${business._id}` + feald }>
                      {`${feald}: ${business[feald]}`}
                    </li>
                  )
                })
                
                let linkSite = (
                  <div className="link-site">
                    <a href={`http://localhost:3000/#/site/${business._id}`} target="_blank" rel="noopener noreferrer" >Visit Site</a>
                  </div>
                )

                return (
                  <div key={business._id} className="single-business">
                    <h1>{business.name}</h1>
                    <ul>{businessInfo}</ul>
                    <h1>{linkSite}</h1>
                  </div>
                )
              })
              return (                
                <div className="all-businesses">
                      {allBusinesses}
                </div>
              )
          }}
      </Query>
    );
  }
}

export default withRouter(AllBusiness);
