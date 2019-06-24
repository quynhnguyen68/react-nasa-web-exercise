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
      onShowFavourite: PropTypes.func,
    }

    static defaultTypes = {
      onShowFavourite: () => {},
      onOptionChange: () => {},
    }
    
    constructor(props){
      super(props);
      this.state = {
        showFavourite: false,
        sortOption: '',
        sortType: options[0],
        error: '',
      }

      this._toggleMyFavourite = this._toggleMyFavourite.bind(this);
      this._onOptionChange = this._onOptionChange.bind(this);
      this._onTypeChange = this._onTypeChange.bind(this);
    }

    _toggleMyFavourite(){
      this.setState({
        showFavourite: !this.state.showFavourite,
      });
      const { showFavourite } = this.state;
      this.props.onShowFavourite(!showFavourite);
    }

    _onOptionChange(value){
      if(this.state.sortType.value !== 0){
        this.setState({
          sortOption: value,
          error: '',
          showFavourite: false,
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
        const { showFavourite, sortOption, error } = this.state;
        return (
          <div className="option-container">
            <Button 
              btnClassName={`button-favourite ${showFavourite ? "btn-show": "btn-hide"}`}
              imageUrl={showFavourite ? theme.Image.LikeWhite : theme.Image.Favourite} 
              onClick={this._toggleMyFavourite} 
            >
              <p>My Favourite</p>
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
