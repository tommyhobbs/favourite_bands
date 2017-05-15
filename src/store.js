import { createStore } from 'redux';

import reducer from './reducers/movieReducers';

const store = createStore(reducer);

export default store;