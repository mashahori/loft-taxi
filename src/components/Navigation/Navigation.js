import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../App';

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
    <button onClick={handleClick}>
      {text}
    </button>
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
