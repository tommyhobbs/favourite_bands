import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  return <div className="mdl-textfield mdl-js-textfield">
    <input
      className="mdl-textfield__input"
      type="text" value={props.value}
      onChange={props.onChange}/>
    <label className="mdl-textfield__label" htmlFor="username">
      {props.label}
    </label>
  </div>;
}

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
