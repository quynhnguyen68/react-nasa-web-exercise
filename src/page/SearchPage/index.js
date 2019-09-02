import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { PageItem, SearchInput } from '../../page-components';
import { Loader, Button } from '../../components';
import { addItem, getItemsList } from'../../actions';
import navigator from '../../navigator';
import theme from '../../theme'
import './styles.scss';

const GridList = lazy(() => import('../../page-components/GridList'));
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    navigator.setHistory(props.history);
    this._onPressSearch = this._onPressSearch.bind(this);
    this._onAddItem = this._onAddItem.bind(this);
    this._handleGetListCallback = this._handleGetListCallback.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  _onPressSearch(searchKey){
    if(searchKey) {
        this.props.getItemsList(searchKey, this._handleGetListCallback);
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

  _onAddItem(data){
    const { addItem } = this.props;
    const newData = { 
      ...data,
      isAdded: true,
    }
    Object.assign(data, newData);
    addItem(newData);
    this.forceUpdate();
  }

  renderItem(item, index) {
    return(
      <PageItem 
        key={index.toString()}
        index={index}
        data={item}
        onAddItem={this._onAddItem}
      />
    );
  }

  render(){
    const { searchItems } = this.props;
    const { loading } = this.state;
    return (
      <Suspense fallback={<Loader loaderClassName="loader-container"/>}>
        <div className="app">
          <h1>Search from NASA</h1>
          <SearchInput 
            onPressSearch={this._onPressSearch}
          />
          <GridList 
            data={searchItems}
            renderItem={this.renderItem}
          />
          {loading && <Loader loaderClassName="loader-container"/> }
          <Button
            imageUrl={theme.Image.Back}
            btnClassName={"button-add button-back"}
            onClick={() => navigator.goBack()} 
          >
            <p>Back to list</p>
          </Button>
        </div>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({ searchItems: state.searchItems, items: state.items });
const MappedStoreComponent = connect(
  mapStateToProps,
  { addItem, getItemsList },
)(SearchPage);

export default MappedStoreComponent;

