import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import rootSaga from './sagas';

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleWares.push(logger);
}

middleWares.push(thunk);
// export const sagaMiddleware = createSagaMiddleware();
// middleWares.push(sagaMiddleware);

const store = createStore(rootReducer, applyMiddleware(...middleWares));
// sagaMiddleware.run(rootSaga);

export default store;
