export function addMovie(movie){
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export function inputChange(inputValue){
    return {
        type: 'INPUT_CHANGE',
        payload: inputValue
    }
}

export function searchMovie(inputValue){
    return {
        type: 'SEARCH_MOVIE',
        payload: inputValue
    }
}