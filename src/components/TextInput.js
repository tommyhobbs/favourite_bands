import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props){
    return  <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" value={props.value} onChange={props.onChange}/>
        <label class="mdl-textfield__label" for="username">{props.label}</label>
    </div>
}

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
};

export default TextInput;