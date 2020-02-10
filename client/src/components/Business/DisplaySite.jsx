import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import { withRouter } from 'react-router-dom';
// import * as FeatureLibrary from "../Features/Order";
import TemplateLibrary from "../Templates/index";
const { 
  FETCH_BUSINESS, 
  // IS_LOGGED_IN  rfq for loading user account
} = Queries;


class DisplaySite extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ownerId: this.props.match.params.id,
    }
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }
 
  handleSubmit(e){
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
      <Query query={FETCH_BUSINESS} variables={{ id: this.props.match.params.id }}>
        {(data) => {
          if (data.loading) return <div>Loading</div>;
          if (data.error) return `Error! ${data.error.message}`;
            let features = {}
            data.business.features.forEach((feature,i) =>{
              // refacter based on order 
              features[`feature${i + 1}`] = { [feature.name]:[JSON.parse(feature.data[0])]}
            })
          return (
            <div >
              <TemplateLibrary template={data.data.business.template} features={features} businessData={data.data.business} />
            </div>
          )
        }}
      </Query>
      </div>
    );
  };
}
export default withRouter(DisplaySite);