import React from 'react';
import PropTypes from 'prop-types';

function FunctionButton(props){
    return <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={props.onClicked}>{props.label}</button>
}

FunctionButton.propTypes = {
    addClicked: PropTypes.func.isRequired
}

export default FunctionButton;