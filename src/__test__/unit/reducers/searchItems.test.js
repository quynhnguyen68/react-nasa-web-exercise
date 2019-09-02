// @ts-nocheck
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from 'actions/types';
import * as actions from 'actions';

// Set up test
const mockData = { 
    data: {
        collection: {
            items: [
                { title: 'Hello World' },
                { title: 'Hi NASA' }
            ] 
        }
    }
};

describe('searched items reducer', () => {
    describe('handle SAVE ITEMS', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios);
        });

        afterEach(() => {
            mock.reset();
        });
        
        it('Should dispatch and new items list if getting data successfully', async done => {
            const mockDispatch = jest.fn();
            const query = 'hello%2019';
            const url = `https://images-api.nasa.gov/search?q=${query}`;
            const callback = jest.fn();
            mock.onGet(url).reply(200, mockData);
    
            await actions.getItemsList(query, callback)(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(actions.startItemsList());
            // expect(mockDispatch).toHaveBeenCalledWith(actions.saveSearchItemsList(mockData.data.collection.items));
            done();
        });
    });
});