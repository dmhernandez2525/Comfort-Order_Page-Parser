import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Mutations from "../graphql/mutations"
const { LOGIN_USER } = Mutations

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  updateCache(client, {data}) {
    client.writeData({
      data: {
        isLoggedIn: data.login.loggedIn,
        role: data.login.role
      }
    });
  }  
  
  render() {
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={data => {
          debugger
          const { token } = data.login;
          localStorage.setItem("auth-token", token);
          if (data.login.role === "Master"){
            this.props.history.push("/Master");
          }
          else if (data.login.role === "Business"){
            this.props.history.push("/BusinessLogin");
          }
          else if (data.login.role === "EndUser"){
            this.props.history.push("/UserLanding");
          }
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {loginUser => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                loginUser({
                  variables: {
                    email: this.state.email,
                    password: this.state.password
                  }
                });
              }}
            >
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
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default Login;