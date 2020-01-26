import React from 'react';
import Header from './components/Header/Header.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Map from './components/Map/Map.js';
import Profile from './components/Profile/Profile.js';


export const Context = React.createContext();

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: (setPage) => <Signup setPage={setPage} />,
  login: (setPage) =><Login setPage={setPage} />,
}

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

  login = () => {
    this.setState({
      page: 'map',
      isLoggedIn: true,
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
    const { page, isLoggedIn, email, password } = this.state;

    return (
      <Context.Provider value={this.login}>
          {isLoggedIn && <Header setPage={this.setPage}/>}
          {PAGES[page](this.setPage)}
      </Context.Provider>
    );
  }
};

export default App;
