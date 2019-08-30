import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleWares.push(logger);
}

export const sagaMiddleware = createSagaMiddleware();
middleWares.push(sagaMiddleware);

const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export default store;
