import * as Types from '../actions/types';
import { ItemUtil } from 'utils';

export default function (state = [], action) {
    switch (action.type) {
      case Types.SAVE_SEARCH_ITEMS_LIST:
        return ItemUtil.handleItemsList(action.items);
      // case Types.UI_SA_GET_ITEMS_LIST:
      case Types.RESET_ITEMS_LIST:
        return [];
      case Types.REMOVE_ITEM:
        return state.map(item => (item.id === action.item.id) 
        ? { ...action.item, isAdded: false, isFavorite: false } : item);
      default:
        return state;
    }
  }
  