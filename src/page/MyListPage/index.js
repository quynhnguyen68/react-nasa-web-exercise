import React, { Component } from 'react';
import { orderBy } from 'lodash';
import { connect } from 'react-redux';
import { PageItem, GridList, SearchInput, 
  FormPopup, CommonPopup, OptionBoard } from '../../page-components';
import { Button } from '../../components';
import { removeItem, toggleFavoriteItem, editItem } from 'actions';
import store from '../../store';
import navigator from '../../navigator';
import { StringUtil } from '../../utils';
import theme from '../../theme';
import './styles.scss';

class MyListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: {},
      filteredData: props.items || [],
      isShowFavorite: false,
      query: '',
    };

    navigator.setHistory(props.history);
    this._items = store.getState().items;
    this._onStoreChange = this._onStoreChange.bind(this);
    this._removeItem = this._removeItem.bind(this);
    this._editItem = this._editItem.bind(this);
    this._openRemovePopup = this._openRemovePopup.bind(this);
    this._openEditPopup = this._openEditPopup.bind(this);
    this._toggleFavorite = this._toggleFavorite.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
    this._onShowFavorite = this._onShowFavorite.bind(this);
    this._onOptionChange = this._onOptionChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(this._onStoreChange);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  _onStoreChange(){
    const { items } = store.getState();
    if(items){
      this._item = items;
      let filteredData;

      if(this.state.isShowFavorite){
        filteredData = items.filter(item => item.isFavorite);
      } else {
        filteredData = items;
      }
  
      this.setState({
        filteredData,
      });
    }
  }
  
  _openRemovePopup(data){
    this.setState({
      selectedData: data,
    });
    this._removePopup.open();
  }

  _removeItem(){
    const { removeItem } = this.props;
    const { selectedData } = this.state;
    this._removePopup.close();
    removeItem(selectedData);
    this.setState({
      selectedData: {},
    });
  }

  _openEditPopup(data){
    this.setState({
      selectedData: data,
    });
    this._editPopup.open(data);
  }

  _editItem(newData){
    Object.assign(this.state.selectedData, newData);
    this.props.editItem();
    this.forceUpdate();
    this.setState({
      selectedData: {},
    });
  }

  _toggleFavorite(data){
      const tempData = { ...data, isFavorite: !data.isFavorite }
      Object.assign(data, tempData);
      this.props.toggleFavoriteItem();
      this.forceUpdate();
  }

  _onTextChange(query){
    const { items } = this.props;
    const filteredData = items.filter(item => query === ''
    || StringUtil.checkAutoComplete(item.title.toLowerCase(), query.toLowerCase())
    || StringUtil.checkAutoComplete(item.description.toLowerCase(), query.toLowerCase()));

    this.setState({
      query,
      filteredData,
    });
  }

  _onOptionChange(type, option){
    const { items } = this.props;
    let { filteredData } = this.state;
    let sortType;
    switch(type.value){
      case 0: sortType = ''; break;
      case 1: sortType = 'date_created'; break;
      case 2: sortType = 'title'; break;
      default: sortType = ''; break;
    }

    if(sortType && option){
        filteredData = orderBy(items, item => item[sortType], 
          option ==='up' ? 'asc': 'desc');     
    } else {
      filteredData = items;
    }
    this.setState({
      filteredData,
    });
  }

  _onShowFavorite(isShowFavorite){
    const { items } = this.props;
    let { filteredData } = this.state;
    if(isShowFavorite){
      filteredData = items.filter(item => item.isFavorite);
    } else {
      filteredData = items;
    }

    this.setState({
      isShowFavorite,
      filteredData,
    });
  }

  renderItem(item, index) {
    return(
      <PageItem 
        key={index.toString()}
        index={index}
        data={item}
        onRemoveItem={this._openRemovePopup}
        onEditItem={this._openEditPopup}
        onToggleFavoriteItem={this._toggleFavorite}
      />
    );
  }

  render(){
    const { filteredData } = this.state;
    return (
      <div className="app">
        <h1>My NASA Collection</h1>
        <SearchInput
          onTextChange={this._onTextChange}
          onPressSearch={this._onTextChange}
        />

        <OptionBoard
          onShowFavorite={this._onShowFavorite}
          onOptionChange={this._onOptionChange}
        />

        <GridList 
          data={filteredData}
          renderItem={this.renderItem}
        />
        <FormPopup 
          ref={(popup => { this._editPopup = popup})}
          onYesPress={this._editItem}
        />

        <CommonPopup
          ref={(popup => { this._removePopup = popup})}
          icon={theme.Image.Consider} 
          content="Are you sure you want to delete this item?"
          showButton
          onYesPress={this._removeItem}
        />

        <Button
          imageUrl={theme.Image.AddWhite}
          btnClassName={"button-add button-to-search"}
          onClick={() => navigator.navigate('search')} 
        >
          <p>Add new item</p>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });
const MappedStoreComponent = connect(
  mapStateToProps,
  { removeItem, toggleFavoriteItem, editItem },
)(MyListPage);

export default MappedStoreComponent;
