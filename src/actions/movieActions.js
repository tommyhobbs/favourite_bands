export function addMovie(movie){
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export function inputChange(inputValue){
    "use strict";
    return {
        type: 'INPUT_CHANGE',
        payload: inputValue
    }
}