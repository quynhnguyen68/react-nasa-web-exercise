import { all, fork } from 'redux-saga/effects';
import { watchGetItemListtRequest } from './items';

export default function* rootSaga() {
    yield all([ 
        fork(watchGetItemListtRequest),
    ]);
  }
  
  