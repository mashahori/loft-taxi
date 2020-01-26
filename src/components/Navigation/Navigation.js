import React from 'react';
import PropTypes from 'prop-types';

const Navigation =(props) => {
  
  const handleClick = () => {
      props.setPage(text)
    }

  const { text } = props;

  return (
    <button onClick={handleClick}>
      {text}
    </button>
    );
};

Navigation.propTypes = {
  text: PropTypes.string,
}

export default Navigation;
