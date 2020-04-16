import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
const { IS_LOGGED_IN } = Queries;

const AuthRoute = ({
  component: Component,
  path,
  exact,
  routeType,
  ...rest
}) => (
  <Query query={IS_LOGGED_IN}>
    {({ data }) => {
      // if the route type is "auth" then this route will only render if the
      // user is not logged in - useful for authentication routes
      // like login or register
      if (routeType === "auth") {
        return (
          <Route
            path={path}
            exact={exact}
            render={(props) => {
              if (data.isLoggedIn) {
                if (data.role === "Business") {
                  return <Redirect to="/businessLogin" />;
                } else if (data.role === "EndUser") {
                  return <Redirect to="/UserLanding" />;
                }
              } else {
                if (path === "/register" || path === "/login") {
                  return <Component {...props} />;
                } else {
                  return <Redirect to="/home" />;
                }
              }
            }}
          />
        );
      } else if (routeType === "Business") {
        // otherwise this will be a protected route which will only
        // render the component if the user is logged in
        return (
          <Route
            {...rest}
            render={(props) =>
              data.isLoggedIn && data.role === "Business" ? (
                <Component {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        );
      } else if (routeType === "EndUser") {
        // otherwise this will be a protected route which will only
        // render the component if the user is logged in
        return (
          <Route
            {...rest}
            render={(props) =>
              data.isLoggedIn && data.role === "EndUser" ? (
                <Component {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        );
      } else {
        // otherwise this will be a protected route which will only
        // render the component if the user is logged in
        return (
          <Route
            {...rest}
            render={(props) =>
              data.isLoggedIn ? (
                <Component {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        );
      }
    }}
  </Query>
);

export default AuthRoute;
