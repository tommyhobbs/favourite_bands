export function addArtist(artist) {
  return {
    payload: artist,
    type: 'ADD_ARTIST',
  };
}

export function inputChange(inputValue) {
  return {
    payload: inputValue,
    type: 'INPUT_CHANGE',
  };
}

export function searchArtist(inputValue) {
  return {
    payload: inputValue,
    type: 'SEARCH_ARTIST',
  };
}

export function loginChange(bool) {
  return {
    payload: bool,
    type: 'LOGIN_CHANGE',
  };
}
