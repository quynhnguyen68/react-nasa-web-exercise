import * as Types from './types';

export const getItemsList = (query, callback) => ({
    type: Types.UI_SA_GET_ITEMS_LIST,
    query,
    callback,
});

export const saveItemsList = items => ({
    type: Types.SA_RE_SAVE_ITEMS_LIST,
    items,
});

export const saveSearchItemsList = items => ({
    type: Types.SA_RE_SAVE_SEARCH_ITEMS_LIST,
    items,
})

export const toggleFavouriteItem = () => ({
    type: Types.UI_RE_TOGGLE_FAVOURITE_ITEM,
});

export const addItem = (item) => ({
    type: Types.UI_RE_ADD_ITEM,
    item,
});

export const editItem = () => ({
    type: Types.UI_RE_EDIT_ITEM,
});

export const resetItemsList = () => ({
    type: Types.UI_RE_RESET_ITEMS_LIST,
});

export const removeItem = (item) => ({
    type: Types.UI_RE_REMOVE_ITEM,
    item,
});