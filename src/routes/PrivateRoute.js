import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/Login/Login.js';

export const PrivateRoute = ({ component: RouteComponent, ...props }) => (
  <Route
    render={() => (
      props.authed ? (
        <RouteComponent {...props}/>
      ) : (
        <Redirect to="/login" component={Login} />
      )
    )
    }
  />
);
