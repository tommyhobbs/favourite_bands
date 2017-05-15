import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props){
    return <button onClick={props.addClicked}>Add</button>
}

AddButton.propTypes = {
    addClicked: PropTypes.func.isRequired
}

export default AddButton;