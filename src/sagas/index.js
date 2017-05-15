import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchMovie(action) {
    console.log('Saga', action.payload);
}

function* movieSaga() {
    yield takeEvery ('SEARCH_MOVIE', fetchMovie);
}

function *sagas() {
    yield [movieSaga()]
}

export { sagas }