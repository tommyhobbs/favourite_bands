import React from 'react';
import PropTypes from 'prop-types';

function FunctionButton(props) {
  return (
    <button
      // eslint-disable-next-line
      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
      onClick={props.onClicked}>
      {props.label}
    </button>
  );
}

FunctionButton.propTypes = {
  label: PropTypes.string,
  onClicked: PropTypes.func,
};

export default FunctionButton;
