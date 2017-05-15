import React from 'react';
import PropTypes from 'prop-types';

function FunctionButton(props){
    return <button onClick={props.onClicked}>{props.label}</button>
}

FunctionButton.propTypes = {
    addClicked: PropTypes.func.isRequired
}

export default FunctionButton;