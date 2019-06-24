import { combineReducers } from 'redux';
import searchItems from './searchItems';
import items from './listItems';

const rootReducer = combineReducers({
  items,
  searchItems,
});
  
export default rootReducer;
  