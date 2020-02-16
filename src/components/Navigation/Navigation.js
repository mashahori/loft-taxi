import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../App';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Navigation =(props) => {
  const context = useContext(Context);

  const { text } = props;
  
  const handleClick = () => {
    if (text === 'logout') {
      context.logout();
    } else {
      props.setPage(text)
    }
  }

  return (
    <Button to="profile" component={Link} onClick={handleClick}>
      {text}
    </Button>
    );
};

Navigation.propTypes = {
  text: PropTypes.string,
  setPage: PropTypes.func,
}

Navigation.defaultProps = {
  text: '',
  setPage: () => {},
}

export default Navigation;
