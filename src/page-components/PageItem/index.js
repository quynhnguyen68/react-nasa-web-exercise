import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import theme from '../../theme';
import { ImageUtil, StringUtil } from '../../utils';
import '../../theme/Styles.scss';
import './styles.scss';

const Icon = lazy(() => import('../../components/Icon'));

class Item extends Component {
    static propTypes = {
      onEditItem: PropTypes.func,
      onRemoveItem: PropTypes.func,
      onAddItem: PropTypes.func,
      onToggleFavoriteItem: PropTypes.func,
      isFavorite: PropTypes.bool,
      index: PropTypes.number,
    }

    static defaultTypes = {
      onEditItem: () => {},
      onRemoveItem: () => {},
      onAddItem: () => {},
      onToggleFavoriteItem: () => {},
      isFavorite: false,
      index: 0,
    }
    
    constructor(props){
      super(props);
      this._toggleFavorite = this._toggleFavorite.bind(this);
      this._onRemovePress = this._onRemovePress.bind(this);
      this._onEditPress = this._onEditPress.bind(this);
      this._onAddPress = this._onAddPress.bind(this);
    }

    _toggleFavorite(){  
      const { data, onToggleFavoriteItem } = this.props;
      onToggleFavoriteItem(data);
    }

    _onRemovePress(){
      const { data, onRemoveItem } = this.props;
      onRemoveItem(data);
    }

    _onAddPress(){
      const { data, onAddItem } = this.props;
      data.id = Date.now().toString();
      onAddItem(data);
    }

    _onEditPress(){
      const { data, onEditItem } = this.props;
      onEditItem(data);
    }

    render(){
        const { data, index, onAddItem } = this.props;
        return (
            <div className="item-container" key={index.toString()}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Icon 
                    src={ImageUtil.isAvailableUrl(data.imageUrl)} 
                    imgClassName="shadow-item img-container"
                  />
                </Suspense>
                <div className="info-container">
                  <p>{data.center}</p>
                  <p>{StringUtil.getDateFormat(data.date_created)}</p>
                </div>
                <h2>{data.title}</h2>
                <div className="multiline-text txt-content">
                  {data.description}
                </ div>
                {!onAddItem ? 
                <div className="button-container">
                  <Button 
                    imageUrl={data.isFavorite ? theme.Image.ActiveFavorite : theme.Image.Favorite} 
                    onClick={this._toggleFavorite} 
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
                :
                <Button
                  imageUrl={data.isAdded ? theme.Image.Checked : theme.Image.Add}
                  btnClassName={data.isAdded ? "button-added" : "button-add"}
                  onClick={this._onAddPress}
                  iconClassName="icon-add" 
                  disabled={data.isAdded}
                >
                  <p>{data.isAdded ? "Added" : "Add to collection"}</p>
                </Button>}
            </div>
        );
    }
}

export default Item;
