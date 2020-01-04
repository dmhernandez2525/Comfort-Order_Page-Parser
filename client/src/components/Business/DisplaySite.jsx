import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
import { withRouter } from 'react-router-dom';
import * as FeatureLibrary from "../Features/Order";
import TemplateLibrary from "../Templates/index";
const { FETCH_BUSINESS, IS_LOGGED_IN } = Queries;


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
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return `Error! ${error.message}`;
            let features = {}
             data.business.features.forEach((feature,i) =>{
               features[`feature${i+1}`] = JSON.parse(feature)
            })
          return (
            <div >
              <TemplateLibrary template={data.business.template} features={features} businessData={data.business} />
              {/* <TemplateLibrary template={data.business.template}  features={data.business.features} businessData={data.business.businessData}/> */}
            </div>
          )
        }}
      </Query>
      </div>
    );
  };
}
export default withRouter(DisplaySite);