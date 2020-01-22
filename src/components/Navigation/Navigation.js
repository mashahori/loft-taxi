import React, { PureComponent } from 'react';

class Navigation extends PureComponent {
  handleClick = () => {
      this.props.setPage(this.props.text)
    }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.text}
      </button>
      );
    };
};

export default Navigation;
