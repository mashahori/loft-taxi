import React from 'react';
import Header from './components/Header/Header.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Map from './components/Map/Map.js';
import Profile from './components/Profile/Profile.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import withAuth from './hocs/withAuth.js';
import { PrivateRoute } from './routes/PrivateRoute.js';


export const Context = React.createContext();

const routes=[ 'map', 'profile', 'logout' ];

class App extends React.PureComponent {
  state = {
    isLoggedIn: false,
    email: '',
    password: ''
  }

  login = (email, password) => {
    this.setState({
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
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <BrowserRouter>
        <Context.Provider value={{ login: this.login, logout: this.logout, isLoggedIn }}>
          {isLoggedIn && <Header setPage={this.setPage} routes={routes} />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="map" component={Map} />
            <PrivateRoute path="/" component={Map} />
            <Route path="*" component={Login} />
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    );
  }
};

export default App;
