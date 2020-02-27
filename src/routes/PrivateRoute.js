import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent, ...props }) => (
  <Route
    render={() => (
      props.authed ? (
        <RouteComponent {...props}/>
      ) : (
        <Redirect to="/login" />
      )
    )
    }
  />
);
