import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import NewsReducer from './Reducer/NewsReducer';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(NewsReducer, middleware);

export default store;
