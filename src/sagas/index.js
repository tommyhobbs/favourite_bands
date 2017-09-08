import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function apiCall (action) {

  if (action.payload) {
    switch(action.type) {
      case "SEARCH_ARTIST":
        const artist = action.payload;
        console.log('apiCall https://api.spotify.com/v1/search?q=' + artist + '&&type=artist');
        return axios.get('https://api.spotify.com/v1/search?q=' + artist + '&&type=artist' , {
          headers: { "authorization": "Bearer " + localStorage.getItem('FavouriteBands.accessToken') }
        });
        break;
      default: return undefined;
    }
  }
}

function* fetchArtist(action) {

    console.log('fetchArtist action', action);
    const payload = yield call(apiCall, action);

    if (payload === undefined){
        yield put({type: 'ARTIST_FETCH_FAILURE', payload: 'Invalid entry'});
    } else if (payload.data.artists.items.length !== 0){
        let artist = payload.data.artists.items[0];
        console.log(artist);
        yield put({type: 'ARTIST_FETCH_SUCCESS', payload: artist});
    } else {
        yield put({type: 'ARTIST_FETCH_FAILURE', payload: 'No artist found for the given name'});
    }
}

function* artistSaga() {
    yield takeEvery ('SEARCH_ARTIST', fetchArtist);
}

function *sagas() {
    yield [artistSaga()]
}

export { sagas }