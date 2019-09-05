import { combineReducers } from 'redux';
import searchItems from './searchItems';
import items from './listItems';
import filter from './filter';

const rootReducer = combineReducers({
  filter,
  items,
  searchItems,
});
  
export default rootReducer;
  