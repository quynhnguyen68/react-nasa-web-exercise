import * as Types from '../actions/types';

function handleItemsList(items) {
  return items.map(item => ({
    ...item.data && item.data[0],
    imageUrl: item.links && item.links[0].href,
    isFavourite: false,
  }));
}
export default function (state = [], action) {
    switch (action.type) {
      case Types.SA_RE_SAVE_SEARCH_ITEMS_LIST:
        return handleItemsList(action.items);
      case Types.UI_SA_GET_ITEMS_LIST:
      case Types.UI_RE_RESET_ITEMS_LIST:
        return [];
      case Types.UI_RE_REMOVE_ITEM:
        return state.map(item => (item.id === action.item.id) 
        ? { ...action.item, isAdded: false, isFavourite: false } : item);
      case Types.UI_RE_ADD_ITEM:
      default:
        return state;
    }
  }
  