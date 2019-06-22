import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageItem from './PageItem';
import SearchInput from './SearchInput';
import GridList from './GridList';
import './App.css';
import { setup as setupApi } from './sagas/apis';
import store from './store';
import { saveItemsList, removeItem } from'./actions';
import FormPopup from './FormPopup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: {},
    }

    this._onStoreChange = this._onStoreChange.bind(this);
    this._removeItem = this._removeItem.bind(this);
    this._editItem = this._editItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.bootstrap();
  }

  componentDidMount(){
    setupApi();
    this.unsubscribe = store.subscribe(this._onStoreChange);
  }

  async bootstrap() {
    const items = await localStorage.getItem('items');
    if(items) store.dispatch(saveItemsList(JSON.parse(items)));
  }

  componentWillUnmount(){
    this.subscribe();
  }

  _removeItem(index){
    const { items } = this.props;
    if(index !== -1){
      items.splice(index, 1);
      store.dispatch(removeItem());
      this.forceUpdate();
    }
  }

  _editItem(data){
    this.setState({
      selectedData: data,
    });
    this._editPopup.open(data);
  }

  _onStoreChange(){
    const { items } = store.getState();
    if(items){
      localStorage.setItem('items', JSON.stringify(items));
    }
  }

  renderItem(item, index) {
    return(
      <PageItem 
        key={index.toString()}
        index={index}
        data={item}
        onRemoveItem={this._removeItem}
        onEditItem={this._editItem}
      />
    );
  }

  render(){
    const { items } = this.props;
    return (
      <div className="App">
        <SearchInput />
        <GridList 
          data={items}
          renderItem={this.renderItem}
        />
        <FormPopup 
          ref={(popup => { this._editPopup = popup})}
          onYesPress={() => this.forceUpdate()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });
const MappedStoreComponent = connect(
  mapStateToProps,
  {},
)(App);

export default MappedStoreComponent;

