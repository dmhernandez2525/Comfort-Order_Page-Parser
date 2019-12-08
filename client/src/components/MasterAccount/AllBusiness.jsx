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
    debugger
    client.writeData({
      data: { site: data.FetchAllBusiness }
    });
  }  

  render() {
    return (
      <Query
        query={FETCH_All_BUSINESS}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={
            (cache, data) => {
                debugger
            }
        }
      >
            {({ loading, error,data }) => {
                if(error){
                    debugger
                    return(
                        <div>{error.networkError.message}</div>
                    )
                }
                return (                
                <div></div>
                )

            }}
        </Query>
    );
  }
}

export default withRouter(AllBusiness);
