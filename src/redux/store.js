import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const middleWare = [];

if (process.env.NODE_ENV === "development") {middleWare.push(logger); middleWare.push(thunk)};

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
