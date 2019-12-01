import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { CREATE_BUSSNESS } = Mutations;
const { FETCH_BUSSNESS } = Queries;


class CreateBussness extends Component {
  constructor(props) {
    super(props);

    this.state = {
    name: "",
    templett: "",
    userId: "",
    features: "",
    bussinessData: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_BUSSNESS}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(makeBussness, { data }) => (
            <div>
              <h1> create a new site </h1>
              <form className="create-form" onSubmit={e => this.handleSubmit(e, newHome)}>
                <div className="create-form-left">
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
                    value={this.state.templett}
                    onChange={this.update("state")}>
                    <option defaultValue>State</option>
                    <option value="Restaurant">Restaurant</option>
                </select>

                <select 
                    value={this.state.features}
                    onChange={this.update("features")}>
                    <option defaultValue>State</option>
                    <option value="Order">Order</option>
                    <option value="Booking">Booking</option>
                </select>

                <select 
                    value={this.state.bussinessData}
                    onChange={this.update("bussinessData")}>
                    <option defaultValue>State</option>
                    <option value="About me">About me</option>
                </select>
                  <button  type="submit">Create Site</button>
                </div>
              </form>
            </div>

        )}
      </Mutation>
    );
  }
}

export default withRouter(CreateBussness);
