import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);

