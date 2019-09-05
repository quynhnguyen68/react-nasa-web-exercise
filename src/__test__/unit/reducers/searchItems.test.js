// @ts-nocheck
import searchItemsReducer from 'reducers/searchItems';
import * as types from 'actions/types';
import { ItemUtil } from 'utils';

// Set up test
const initialState = [];
const testItem = { username: "abc", password: "123123", id: 1 };
const testItem2 = { username: "abc", password: "123123", id: 2 };

describe('items reducer', () => {
    describe('saveItemsList', () => {
        it('Should update initial state new list of items', () => {
            const saveItemsAction = { 
                type: types.SAVE_SEARCH_ITEMS_LIST,
                items: [testItem, testItem2]
            };

            const mockItemUtil = jest.fn().mockImplementation(items => ItemUtil.handleItemsList(items));

            const expectedResult = mockItemUtil([testItem, testItem2]);
            const actualResult = searchItemsReducer(initialState, saveItemsAction);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('handle REMOVE_ITEM', () => {
        it('Should update current state with a list already removed item', () => {
            const removeItemAction = { 
                type: types.REMOVE_ITEM,
                item: testItem2,
            };

            const currentState = [
                testItem,
                testItem2,
            ];

            const expectedResult = [ testItem, { ...testItem2, isFavorite: false, isAdded: false} ];
            const actualResult = searchItemsReducer(currentState, removeItemAction);
            expect(actualResult).toEqual(expectedResult);
        });
    });
});