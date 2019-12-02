import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { CREATE_BUSINESS } = Mutations;
const { FETCH_BUSINESS } = Queries;


class CreateBusiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
    name: "",
    template: "",
    userId: "",
    features: "",
    businessData: "",
    };
    this.updateCache = this.updateCache.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  updateCache(client, { data }) {
    debugger
    client.writeData({
      data: { site: data.makeBusiness }
    });
  }  

  render() {
    return (
      <Mutation
        mutation={CREATE_BUSINESS}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={
            (cache, data) => {
                debugger
            }
        }
      >
            {(makeBusiness, { loading, error,data }) => {
                if(error){
                    debugger
                    return(
                        <div>{error.networkError.message}</div>
                    )
                }
                return (                
                <div>
                <h1> create a new site </h1>
                <form onSubmit={e => {
                    e.preventDefault();
                    makeBusiness({
                    variables: {
                        name: this.state.name,
                        template: this.state.template,
                        userId: this.state.userId,
                        features: [this.state.features],
                        businessData: [this.state.businessData],
                    }
                    });
                }}
                >
                    <div >
                    <input
                        onChange={this.update("name")}
                        value={this.state.name}
                        placeholder="Name"
                    />
                    <input 
                        onChange={this.update("userId")}
                        value={this.state.userId}
                        placeholder="userId"
                    />
                    
                    <select 
                        value={this.state.template}
                        onChange={this.update("template")}>
                        <option defaultValue>template</option>
                        <option value="Restaurant">Restaurant</option>
                    </select>

                    <select 
                        value={this.state.features}
                        onChange={this.update("features")}>
                        <option defaultValue>features</option>
                        <option value="Order">Order</option>
                        <option value="Booking">Booking</option>
                    </select>

                    <select 
                        value={this.state.businessData}
                        onChange={this.update("businessData")}>
                        <option defaultValue>businessData</option>
                        <option value="About me">About me</option>
                    </select>
                    <button  type="submit">Create Site</button>
                    </div>
                </form>
                </div>)

        }}
      </Mutation>
    );
  }
}

export default withRouter(CreateBusiness);
