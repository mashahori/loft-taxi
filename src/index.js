import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
