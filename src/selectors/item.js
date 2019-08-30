import { createSelector } from 'reselect';

export const itemSelector = state => state.items;

export const favoriteItemSelector = createSelector(
    itemSelector,
    items => items.filter(item => item.isFavorite)
);