import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Icon, Button } from '../components';
import theme from '../theme';
import { ImageUtil, StringUtil } from '../utils';
import '../theme/Styles.scss';
import './styles.scss';
import store from '../store';
import { toggleFavouriteItem } from '../actions';

class Item extends Component {
    static propTypes = {
      image: PropTypes.string,
      onEditItem: PropTypes.func,
      onRemoveItem: PropTypes.func,
      isFavourite: PropTypes.bool,
      index: PropTypes.number,
    }

    static defaultTypes = {
      image:"",
      onEditItem: () => {},
      onRemoveItem: () => {},
      isFavourite: false,
      index: 0,
    }
    
    constructor(props){
      super(props);
      this._toggleFavourite = this._toggleFavourite.bind(this);
      this._onRemovePress = this._onRemovePress.bind(this);
      this._onEditPress = this._onEditPress.bind(this);
    }

    _toggleFavourite(){
      const { data } = this.props;
      const tempData = { ...data, isFavourite: !(!!data.isFavourite) };
      Object.assign(data, tempData);
      store.dispatch(toggleFavouriteItem());
      this.forceUpdate();
    }

    _onRemovePress(){
      const { index, onRemoveItem } = this.props;
      onRemoveItem(index);
    }

    _onEditPress(){
      const { data, onEditItem } = this.props;
      onEditItem(data);
    }

    render(){
        const { data, index } = this.props;
        const detail = data && data.data && data.data[0];
        return (
            <div className="item-container" key={index.toString()}>
                <a href={data && data.href} target="_blank">
                  <Icon 
                    src={ImageUtil.isAvailableUrl(data && data.links && data.links[0].href)} 
                    imgClassName="shadow-item img-container"
                    loading="lazy" 
                  />
                </a>
                <div className="info-container">
                  <p>{detail.center}</p>
                  <p>{StringUtil.getDateFormat(detail.date_created)}</p>
                </div>
                <h1>{detail.title}</h1>
                <div className="multiline-text txt-content">
                  {detail.description}
                </ div>
                <div className="button-container">
                  <Button 
                    imageUrl={data.isFavourite ? theme.Image.ActiveFavourite : theme.Image.Favourite} 
                    onClick={this._toggleFavourite} 
                  />
                  <Button 
                    imageUrl={theme.Image.Edit}
                    btnClassName="button-edit"
                    onClick={this._onEditPress} 
                  />
                  <Button 
                    imageUrl={theme.Image.Delete}
                    onClick={this._onRemovePress} 
                  />
                </div>
            </div>
        );
    }
}

export default Item;
