import React from 'react';
import Header from '../Header/Header.js';
import Signup from '../Signup/Signup.js';
import Login from '../Login/Login.js';
import Map from '../Map/Map.js';
import Profile from '../Profile/Profile.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


export const Context = React.createContext();

const PAGES = {
  profile: (setPage) => <Profile setPage={setPage} />,
  map: (setPage) => <Map setPage={setPage} />,
  signup: (setPage) => <Signup setPage={setPage} />,
  login: (setPage) =><Login setPage={setPage} />,
}

const routes=[ 'map', 'profile', 'logout' ];

class Main extends React.PureComponent {
  state = {
    page: 'login',
    isLoggedIn: true,
    email: '',
    password: ''
  }

  setPage = (page) => {
    this.setState({
      page: page,
    });
  }

  login = (email, password) => {
    this.setState({
      page: 'map',
      isLoggedIn: true,
      email: email,
      password: password,
    });
  }

  logout = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
      page: 'login'
    });
  }

  render() {
    const { page, isLoggedIn } = this.state;

    return (
      <>
        <Header setPage={this.setPage} routes={routes} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signout" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/map" component={Map} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/login" component={Login} />
        </Switch>
      </>
    );
  }
};

export default Main;
