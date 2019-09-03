import * as Types from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
      case Types.SA_RE_SAVE_ITEMS_LIST:
        return action.items;
      case Types.ADD_ITEM:
        return [...state, Object.assign({}, action.item)];
      case Types.REMOVE_ITEM:
        return state.filter(item => item.id !== action.item.id);
      case Types.RESET_ITEMS_LIST:
        return [];
      case Types.TOGGLE_FAVORITE_ITEM:
      case Types.EDIT_ITEM:    
      default:
        return state;
    }
  }
  