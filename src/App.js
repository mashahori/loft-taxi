import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Map from './components/Map/Map.js';
import Profile from './components/Profile/Profile.js';
import { PrivateRoute } from './routes/PrivateRoute.js';

const routes = ['map', 'profile', 'logout'];

const App = ({ authed }) => (
  <BrowserRouter>
    {authed && <Header routes={routes} />}
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/profile" component={Profile} authed={authed} />
      <PrivateRoute path="/" component={Map} authed={authed} />
      <Route path="*" component={Login} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  authed: PropTypes.bool,
};

App.defaultProps = {
  authed: false,
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

export default connect(mapStateToProps)(App);
