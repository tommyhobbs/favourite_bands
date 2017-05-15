import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function apiCall (title){
    return axios.get('http://www.omdbapi.com/?t='+title.replace(/ /g,"+"));
}

function* fetchMovie(action) {
    const movie = yield call(apiCall, action.payload);
    yield put({type:'MOVIE_FETCH_SUCCESS', payload: movie.data});
}

function* movieSaga() {
    yield takeEvery ('SEARCH_MOVIE', fetchMovie);
}

function *sagas() {
    yield [movieSaga()]
}

export { sagas }