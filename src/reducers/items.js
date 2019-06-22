import * as Types from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
      case Types.SA_RE_SAVE_ITEMS_LIST:
        return action.items;
      case Types.UI_RE_TOGGLE_FAVOURITE_ITEM:
      case Types.UI_RE_REMOVE_ITEM:
      case Types.UI_RE_EDIT_ITEM:
        return state;
      case Types.UI_SA_GET_ITEMS_LIST:
      case Types.UI_RE_RESET_ITEMS_LIST:
        return [];
      default:
        return state;
    }
  }
  