import React from 'react';

function FunctionButton(props) {
  return <button
    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
    onClick={props.onClicked}>{props.label}</button>;
}

FunctionButton.propTypes = {};

export default FunctionButton;
