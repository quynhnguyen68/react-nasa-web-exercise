import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { filter as actionFilter } from 'actions';

export const itemSelector = state => state.items;
export const filterSelector = state => state.filter;

export const getVisibleItems = createSelector(
    [ filterSelector, itemSelector ],
    (filter, items) => {
      switch (filter) {
        case actionFilter.SHOW_ALL:
            return items;
        case actionFilter.SHOW_FAVORITE:
            return items.filter(item => item.isFavorite);
        case actionFilter.SHOW_ASC_DATE:
            return orderBy(items, item => item.date_created, 'asc'); 
        case actionFilter.SHOW_DESC_DATE:
            return orderBy(items, item => item.date_created, 'desc'); 
        case actionFilter.SHOW_ASC_TITLE:
            return orderBy(items, item => item.title, 'asc'); 
        case actionFilter.SHOW_DESC_TITLE:
            return orderBy(items, item => item.title, 'desc'); 
        default: return items;
      }
    }
);