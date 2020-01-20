import React from 'react';
import Header from './components/Header/Header.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Map from './components/Map/Map.js';
import Profile from './components/Profile/Profile.js';

const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: setpage => <Signup setpage={setpage}/>,
  login: setpage => <Login setpage={setpage} />,
}

class App extends React.PureComponent {
  state = {
    page: 'login',
  }

  setPage = (page) => {
    this.setState({
      page: page,
    });
  }

  render() {
    const { page } = this.state;

    return (
      <>
        <Header setPage={this.setPage} />
        {PAGES[page](this.setPage)}
      </>
    );
  }
};

export default App;
