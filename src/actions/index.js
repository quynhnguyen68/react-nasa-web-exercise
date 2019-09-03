import * as Types from './types';
import axios from 'axios';

export const saveItemsList = items => ({
    type: Types.SA_RE_SAVE_ITEMS_LIST,
    items,
});

export const saveSearchItemsList = items => ({
    type: Types.SAVE_SEARCH_ITEMS_LIST,
    items,
})

export const addItem = (item) => ({
    type: Types.ADD_ITEM,
    item,
});

export const editItem = item => ({
    type: Types.EDIT_ITEM,
    item,
});

export const resetItemsList = () => ({
    type: Types.RESET_ITEMS_LIST,
});

export const removeItem = (item) => ({
    type: Types.REMOVE_ITEM,
    item,
});

export const getItemsListStart = () => ({
    type: Types.GET_ITEMS_LIST,
});

export const getItemsListSuccess = () => ({
    type: Types.GET_ITEMS_LIST_SUCCESS,
});

export const getItemsListFail = error => ({
    type: Types.GET_ITEMS_LIST_FAIL,
    error
});

export const getItemsList = (query, callback) => async dispatch => {
    dispatch(getItemsListStart());
    try {
        const response  = await axios.get(`search?q=${query}`);
        const { data } = response;
        dispatch(saveSearchItemsList(data.collection.items));
        callback(null);
    } catch(error){
        callback('Error');
        const { status, data } = error.response;
        dispatch(getItemsListFail({ status, data }));
    }
};