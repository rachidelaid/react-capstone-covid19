import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries';
import covidReducer from './covid';

const reducer = combineReducers({
  countriesReducer,
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
