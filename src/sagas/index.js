import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function apiCall(action) {
  if (action.payload) {
    switch (action.type) {
      case 'SEARCH_ARTIST':
        const artist = action.payload;
        // eslint-disable-next-line
        console.log('apiCall https://api.spotify.com/v1/search?q=' + artist + '&&type=artist');
        return axios.get('https://api.spotify.com/v1/search?q=' + artist + '&&type=artist', {
          // eslint-disable-next-line
          headers: {'authorization': 'Bearer ' + localStorage.getItem('FavouriteBands.accessToken')},
        });
      case 'SEARCH_TOP':
        const limit = action.payload;
        // eslint-disable-next-line
        console.log('apiCall https://api.spotify.com/v1/me/top/artists?limit=' + limit);
        return axios.get('https://api.spotify.com/v1/me/top/artists?limit=' + limit, {
          // eslint-disable-next-line
          headers: {'authorization': 'Bearer ' + localStorage.getItem('FavouriteBands.accessToken')},
        });
      default:
        return undefined;
    }
  }
  return undefined;
}

function* fetchArtist(action) {
  // eslint-disable-next-line no-console
  console.log('fetchArtist action', action);
  const payload = yield call(apiCall, action);

  if (payload === undefined) {
    yield put({payload: 'Invalid entry', type: 'ARTIST_FETCH_FAILURE'});
  } else if (payload.data.artists.items.length !== 0) {
    const artist = payload.data.artists.items[0];
    // eslint-disable-next-line no-console
    console.log(artist);
    yield put({payload: artist, type: 'ARTIST_FETCH_SUCCESS'});
  } else {
    yield put({
      payload: 'No artist found for the given name',
      type: 'ARTIST_FETCH_FAILURE',
    });
  }
}

function* fetchTop(action) {
  // eslint-disable-next-line no-console
  console.log('fetchTop action', action);
  const payload = yield call(apiCall, action);

  yield put({payload: payload.data.items, type: 'TOP_FETCH_SUCCESS'});
}

function* artistSaga() {
  yield takeEvery('SEARCH_ARTIST', fetchArtist);
  yield takeEvery('SEARCH_TOP', fetchTop);
}

function* sagas() {
  yield [artistSaga()];
}

export {sagas};
