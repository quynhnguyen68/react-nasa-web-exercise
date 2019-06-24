import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from '../../components';
import theme from '../../theme';
import './styles.scss';

class SearchInput extends Component {
    static propTypes = {
        onEditItem: PropTypes.func,
        onPressSearch: PropTypes.func,
        onTextChange: PropTypes.func,
      }
  
      static defaultTypes = {
        onPressSearch: () => {},
        onTextChange: () => {},
      }

    constructor(props){
        super(props);
        this.state = {
            searchKey: "",
        };

        this._onTextChange = this._onTextChange.bind(this);
    }

    _onTextChange(event){
        this.setState({
            searchKey: event.target.value,
        });

        if(this.props.onTextChange) 
            this.props.onTextChange(event.target.value);
            
        if(event.keyCode === 13){
            this.props.onPressSearch(this.state.searchKey);
        }
    }

    render(){
        const { onPressSearch } = this.props;
        const { searchKey } = this.state;
        return(
            <div className="container">
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
                        onClick={() => onPressSearch(searchKey)}
                    />
                </div>
            </div>
        );
    }
}

export default SearchInput;