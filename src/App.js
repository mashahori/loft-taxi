import React from 'react';
import Header from './components/Header/Header.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Map from './components/Map/Map.js';
import Profile from './components/Profile/Profile.js';


export const Context = React.createContext();

const PAGES = {
  profile: (setPage) => <Profile setPage={setPage} />,
  map: (setPage) => <Map setPage={setPage} />,
  signup: (setPage) => <Signup setPage={setPage} />,
  login: (setPage) =><Login setPage={setPage} />,
}

const routes=[ 'map', 'profile', 'logout' ];

class App extends React.PureComponent {
  state = {
    page: 'login',
    isLoggedIn: false,
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
      <Context.Provider value={{ login: this.login, logout: this.logout, isLoggedIn }}>
          {isLoggedIn && <Header setPage={this.setPage} routes={routes} />}
          {PAGES[page](this.setPage)}
      </Context.Provider>
    );
  }
};

export default App;
