export function addArtist(artist){
    return {
        type: 'ADD_ARTIST',
        payload: artist
    }
}

export function inputChange(inputValue){
    return {
        type: 'INPUT_CHANGE',
        payload: inputValue
    }
}

export function searchArtist(inputValue){
    return {
        type: 'SEARCH_ARTIST',
        payload: inputValue
    }
}

export function setAccessToken(accessToken) {
    return {
        type: 'ACCESS_TOKEN',
        payload: accessToken
    }
}