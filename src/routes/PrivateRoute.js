import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../hocs/withAuth.js';

export let PrivateRoute = ({ component: RouteComponent, ...props }) => (
  <Route 
    render={() => (
      props.isLoggedIn ? (
        <RouteComponent {...props}/>
      ) : (
        <Redirect to="/login" />
      )
    )
    } 
  />
);

PrivateRoute = withAuth(PrivateRoute);
