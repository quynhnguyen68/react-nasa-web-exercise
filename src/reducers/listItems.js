import { remove } from 'lodash';
import * as Types from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
      case Types.SA_RE_SAVE_ITEMS_LIST:
        return action.items;
      case Types.UI_RE_ADD_ITEM:
        state.push(action.item);
        return state;
      case Types.UI_RE_REMOVE_ITEM:
        remove(state, item => item.id === action.item.id);
        return state;
      case Types.UI_RE_RESET_ITEMS_LIST:
        return [];
      case Types.UI_RE_TOGGLE_FAVORITE_ITEM:
      case Types.UI_RE_EDIT_ITEM:    
      default:
        return state;
    }
  }
  