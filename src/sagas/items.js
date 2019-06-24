import { call, takeEvery } from 'redux-saga/effects';
import * as Apis from './apis';
import * as Types from '../actions/types';
import store from '../store';
import { saveSearchItemsList } from '../actions';

function* getItemList(action) {
    const { response, error } = yield call(Apis.getItemList, action.query);
  
    if(response){
        action.callback(null);
        store.dispatch(saveSearchItemsList(response.data.collection.items));
    }

    if(error) {
        action.callback('Error');
    }
}
  
export function* watchGetItemListtRequest() {
    yield takeEvery(Types.UI_SA_GET_ITEMS_LIST, getItemList);
}
  