import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations"
const { REGISTER_USER } = Mutations

class MasterRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      messege: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  clearFealds() {
     this.setState({
      name: "",
      email: "",
      password: "",
      role: "",
      messege: "User Successfully Created"
    });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          this.clearFealds()
        }}
      >
        {registerUser => (
          <div>
            <h1>{this.state.messege}</h1>
            <form
              onSubmit={e => {
                e.preventDefault();
                registerUser({
                  variables: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    role: this.state.role
                  }
                });
              }}
            >
              <input
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="name"
              />
              <input
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <input
                value={this.state.password}
                onChange={this.update("password")}
                type="password"
                placeholder="Password"
              />
              <select
                value={this.state.role}
                onChange={this.update("role")}>
                <option defaultValue>role</option>
                <option value="Master">Master</option>
                <option value="Business">Business</option>
                <option value="EndUser">EndUser</option>
              </select>

              <button type="submit">Register Account</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default MasterRegister;