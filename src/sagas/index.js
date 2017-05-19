import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function apiCall (title){
    return axios.get('http://www.omdbapi.com/?t='+title.replace(/ /g,"+"));
}

function* fetchMovie(action) {
    const movie = yield call(apiCall, action.payload);
    const error = '';
    if (movie.data.Response==="True"){
        yield put({type: 'MOVIE_FETCH_SUCCESS', payload: movie.data});
    } else if (movie.data.Response==="False"){
        yield put({type: 'MOVIE_FETCH_FAILURE', payload: movie.data.Error});
    }

}

function* movieSaga() {
    yield takeEvery ('SEARCH_MOVIE', fetchMovie);
}

function *sagas() {
    yield [movieSaga()]
}

export { sagas }