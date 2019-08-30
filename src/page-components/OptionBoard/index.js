import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, SelectOption } from '../../components';
import theme from '../../theme';
import '../../theme/Styles.scss';
import './styles.scss';

const options = [
  {
    value: 0,
    name: 'Choose sort type',
  },
  {
    value: 1,
    name: 'Date',
  },
  {
    value: 2,
    name: 'Title',
  },
]
class OptionBoard extends Component {
    static propTypes = {
      onOptionChange: PropTypes.func,
      onShowFavorite: PropTypes.func,
    }

    static defaultTypes = {
      onShowFavorite: () => {},
      onOptionChange: () => {},
    }
    
    constructor(props){
      super(props);
      this.state = {
        showFavorite: false,
        sortOption: '',
        sortType: options[0],
        error: '',
      }

      this._toggleMyFavorite = this._toggleMyFavorite.bind(this);
      this._onOptionChange = this._onOptionChange.bind(this);
      this._onTypeChange = this._onTypeChange.bind(this);
    }

    _toggleMyFavorite(){
      this.setState({
        showFavorite: !this.state.showFavorite,
      });
      const { showFavorite } = this.state;
      this.props.onShowFavorite(!showFavorite);
    }

    _onOptionChange(value){
      if(this.state.sortType.value !== 0){
        this.setState({
          sortOption: value,
          error: '',
          showFavorite: false,
        });
        
        this.props.onOptionChange(this.state.sortType, value);
      } else {
        this.setState({
          sortOption: '',
          error: 'Choose sort type first',
        })
      }
    }

    _onTypeChange(e){
      this.setState({
        sortType: options[Number(e.target.value)],
        sortOption: e.target.value === '0' ? '' : this.state.sortOption,
      });
      this.forceUpdate();
    }

    render(){
        const { showFavorite, sortOption, error } = this.state;
        return (
          <div className="option-container">
            <Button 
              btnClassName={`button-favorite ${showFavorite ? "btn-show": "btn-hide"}`}
              imageUrl={showFavorite ? theme.Image.LikeWhite : theme.Image.Favorite} 
              onClick={this._toggleMyFavorite} 
            >
              <p>My Favorite</p>
            </Button>
          
            <SelectOption
              options={options}
              onChange={this._onTypeChange}
            />

            <Button 
              imageUrl={sortOption ==='up' ? theme.Image.UpWhite : theme.Image.Up}
              btnClassName={`button-up ${sortOption ==='up' ? 'button-active': null}`}
              onClick={() => this._onOptionChange('up')} 
            />
            
            <Button 
              imageUrl={sortOption ==='down' ? theme.Image.DownWhite : theme.Image.Down}
              btnClassName={sortOption ==='down' ? 'button-active': null}
              onClick={() => this._onOptionChange('down')} 
            />
            {error && <div className="text-error">{error}</div>}
          </div>
        );
    }
}

export default OptionBoard;
