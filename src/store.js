import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleWares.push(logger);
}

middleWares.push(thunk);

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
