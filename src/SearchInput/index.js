import React, { Component } from 'react';
import { Button, TextInput, Loader } from '../components';
import theme from '../theme';
import './styles.scss';
import store from '../store';
import { getItemsList } from '../actions';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchKey: "",
            loading: false,
        };

        this._onTextChange = this._onTextChange.bind(this);
        this._onPressSearch = this._onPressSearch.bind(this);
        this._handleGetListCallback = this._handleGetListCallback.bind(this);
    }

    _onTextChange(event){
        this.setState({
            searchKey: event.target.value,
        });

        if(event.keyCode === 13){
            this._onPressSearch();
        }
    }

    _onPressSearch(){
        const { searchKey } = this.state;
        if(searchKey) {
            store.dispatch(getItemsList(searchKey, this._handleGetListCallback));
            this.setState({
                loading: true,
            });
        }
    }

    _handleGetListCallback(error){
        this.setState({
            loading: false,
        });
    }

    render(){
        const { loading } = this.state;
        return(
            <div className="container">
                <h1>NASA Collection</h1>
                <div className="search-container">
                    <TextInput
                        name="searchKey"
                        inputClassName="input"
                        placeholder="Enter something"
                        onChange={this._onTextChange}
                        onKeyDown={this._onTextChange}
                    />
                    <Button 
                        imageUrl={theme.Image.Search} 
                        onClick={this._onPressSearch}
                    />
                </div>
                {loading && <Loader loaderClassName="loader-container"/> }
            </div>
        );
    }
}

export default SearchInput;