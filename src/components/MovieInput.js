import React from 'react';

function MovieInput(props){
    return (<input placeholder="Movie Name" value={props.inputValue} onChange={props.inputChange}></input>)
}

export default MovieInput;