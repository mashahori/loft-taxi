import React, { Component } from 'react';
import { Context as AuthContext } from '../App.js';

export default function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthContext.Consumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...rest} />
          )}
        </AuthContext.Consumer>
      );
    }
  };
}
