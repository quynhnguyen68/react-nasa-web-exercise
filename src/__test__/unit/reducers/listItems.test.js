// @ts-nocheck
import listItemsReducer from 'reducers/listItems';
import * as types from 'actions/types';

// Set up test
const initialState = [];
const testItem = { username: "abc", password: "123123", id: 1 };
const testItem2 = { username: "abc", password: "123123", id: 2 };

describe('items reducer', () => {
    describe('handle ADD_ITEM', () => {
        it('Should update initial state with a list already added new item', () => {
            const addItemAction = { 
                type: types.ADD_ITEM,
                item: testItem
            };
            const expectedResult = [testItem];
            const actualResult = listItemsReducer(initialState, addItemAction);
            expect(actualResult).toEqual(expectedResult);
        });

        it('Should update current state with a list already added new item', () => {
            const addItemAction = { 
                type: types.ADD_ITEM,
                item: testItem2,
            };

            const currentState = [testItem];

            const expectedResult = [
                testItem,
                testItem2,
            ];
            const actualResult = listItemsReducer(currentState, addItemAction);
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

            const expectedResult = [ testItem ];
            const actualResult = listItemsReducer(currentState, removeItemAction);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('handle EDIT_ITEM', () => {
        it('Should update current state with a list already removed item', () => {
            const editItemAction = { 
                type: types.EDIT_ITEM,
                item: { ...testItem2, username: 'Hello', password: '456456' },
            };

            const currentState = [
                testItem,
                testItem2
            ];

            const expectedResult = [
                testItem,
                { username: 'Hello', password: '456456', id: 2 }
            ];

            const actualResult = listItemsReducer(currentState, editItemAction);
            expect(actualResult).toEqual(expectedResult);
        });
    });
});