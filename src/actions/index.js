import * as Types from './types';
// import * as axios from 'sagas/apis';
import axios from 'axios';

export const saveItemsList = items => ({
    type: Types.SA_RE_SAVE_ITEMS_LIST,
    items,
});

export const saveSearchItemsList = items => ({
    type: Types.SA_RE_SAVE_SEARCH_ITEMS_LIST,
    items,
})

export const toggleFavoriteItem = () => ({
    type: Types.UI_RE_TOGGLE_FAVORITE_ITEM,
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

// export const getItemsList = (query, callback) => ({
//     type: Types.UI_SA_GET_ITEMS_LIST,
//     query,
//     callback,
// });

export const startItemsList = () => ({
    type: Types.UI_SA_GET_ITEMS_LIST,
});

export const getItemsList = (query, callback) => async dispatch => {
    dispatch(startItemsList());
    try{
     
        const response  = await axios.get(`search?q=${query}`);
        const { data } = response;
        dispatch(saveSearchItemsList(data.collection.items));
        callback(null);
    } catch(error){
        callback('Error');
    }
};