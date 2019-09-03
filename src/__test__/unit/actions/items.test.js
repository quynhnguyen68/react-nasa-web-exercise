// @ts-nocheck
import axios from 'axios';
import { setup as setupApi } from 'services/apis';
import MockAdapter from 'axios-mock-adapter';
import * as actions from 'actions';

setupApi();

// Set up test
const mockData = { 
    collection: {
        items: [
            { title: 'Hello World' },
            { title: 'Hi NASA' }
        ] 
    }
};

describe('searched items reducer', () => {
    describe('getItemsList', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);
        });

        afterEach(() => {
            mock.reset();
        });
        
        it('Should dispatch error when receiving failed response', async done => {
            const mockDispatch = jest.fn();
            const query = 'hello%2019';
            const url = `search?q=${query}`;
            const callback = jest.fn();
            const error = 'error';
            mock.onGet(url).reply(500, error);
    
            const getItemRequest = actions.getItemsList(query, callback);
            await getItemRequest(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith(actions.getItemsListStart());
            expect(mockDispatch).toHaveBeenCalledWith(actions.getItemsListFail({ status: 500, data: error }));
            done();
        });

        it('Should dispatch save items when receiving success response', async done => {
            const mockDispatch = jest.fn();
            const query = 'hello%2019';
            const url = `search?q=${query}`;
            const callback = jest.fn();
            mock.onGet(url).reply(200, mockData);
    
            const getItemRequest = actions.getItemsList(query, callback);
            await getItemRequest(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith(actions.getItemsListStart());
            expect(mockDispatch).toHaveBeenCalledWith(
                actions.saveSearchItemsList(mockData.collection.items)
            );
            done();
        });
    });
});