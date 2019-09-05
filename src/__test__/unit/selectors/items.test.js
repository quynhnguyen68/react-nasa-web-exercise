// @ts-nocheck
import * as itemSelector from 'selectors/item';
import { filter as actionFilter } from 'actions';

const items = [
    { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
    { title: 'Welcome to NASA', date_created: '2016-12-22T18:53:13Z', isFavorite: false },
    { title: 'Our solar system', date_created: '2011-10-20T18:53:13Z', isFavorite: false },
];

describe('itemSelector', () => {
    it('Should return items', () => {
        const state = { items };
        expect(itemSelector.itemSelector(state)).toEqual(items);
    });
});

describe('filterSelector', () => {
    it('Should return filter', () => {
        const filter = actionFilter.SHOW_ALL;
        const state = { filter };
        expect(itemSelector.filterSelector(state)).toEqual('SHOW_ALL');
    });
});

describe('getVisibleItemsSelector', () => {
    it('Should return favorite items', () => {
        const filter = actionFilter.SHOW_FAVORITE;
        const state = { filter, items };
        const expectedState = [
            { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
        ];

        expect(itemSelector.getVisibleItems(state)).toEqual(expectedState);
    });

    it('Should return new items list with asc sort by date', () => {
        const filter = actionFilter.SHOW_ASC_DATE;
        const state = { filter, items };
        const expectedState = [
            { title: 'Our solar system', date_created: '2011-10-20T18:53:13Z', isFavorite: false },
            { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
            { title: 'Welcome to NASA', date_created: '2016-12-22T18:53:13Z', isFavorite: false },
        ];

        expect(itemSelector.getVisibleItems(state)).toEqual(expectedState);
    });

    it('Should return new items list with desc sort by date', () => {
        const filter = actionFilter.SHOW_DESC_DATE;
        const state = { filter, items };
        const expectedState = [
            { title: 'Welcome to NASA', date_created: '2016-12-22T18:53:13Z', isFavorite: false },
            { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
            { title: 'Our solar system', date_created: '2011-10-20T18:53:13Z', isFavorite: false },
        ];

        expect(itemSelector.getVisibleItems(state)).toEqual(expectedState);
    });

    it('Should return new items list with asc sort by title', () => {
        const filter = actionFilter.SHOW_ASC_TITLE;
        const state = { filter, items };
        const expectedState = [
            { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
            { title: 'Our solar system', date_created: '2011-10-20T18:53:13Z', isFavorite: false },
            { title: 'Welcome to NASA', date_created: '2016-12-22T18:53:13Z', isFavorite: false },
        ];

        expect(itemSelector.getVisibleItems(state)).toEqual(expectedState);
    });
    
    it('Should return new items list with desc sort by title', () => {
        const filter = actionFilter.SHOW_DESC_TITLE;
        const state = { filter, items };
        const expectedState = [
            { title: 'Welcome to NASA', date_created: '2016-12-22T18:53:13Z', isFavorite: false },
            { title: 'Our solar system', date_created: '2011-10-20T18:53:13Z', isFavorite: false },
            { title: 'Hello Marc', date_created: '2014-12-22T18:53:13Z', isFavorite: true },
        ];

        expect(itemSelector.getVisibleItems(state)).toEqual(expectedState);
    });
});