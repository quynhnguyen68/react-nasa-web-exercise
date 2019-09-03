// @ts-nocheck
import React from 'react';  
import { shallow } from 'enzyme';
import { SearchInput } from 'page-components';
import { TextInput, Button } from 'components';

const onTextChange = jest.fn();
const onPressSearch = jest.fn();
let searchInput;
describe('<SearchInput />', () => {
    beforeEach(() => {
        searchInput = shallow(<SearchInput onPressSearch={onPressSearch} onTextChange={onTextChange} />);
    }); 

    afterEach(() => {
        searchInput.unmount();
    });

    describe('<TextInput />', () => {
        const spy = jest.spyOn(SearchInput.prototype, '_onTextChange')     
        it('Should update new value when text changed', () => {
            searchInput.find(TextInput).simulate('change', {target: {value: 'test'}});
            expect(spy).toHaveBeenCalled();
            expect(searchInput.state().searchKey).toEqual('test');
        });
    });

    describe('<Button />', () => {
        const spy = onPressSearch;   
        it('Should update new value when text changed', () => {
            searchInput.find(Button).simulate('click');
            expect(spy).toHaveBeenCalled();
        });
    });
});