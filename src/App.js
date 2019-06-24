import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyListPage from './page/MyListPage';
import SearchPage from './page/SearchPage';
import { setup as setupApi } from './sagas/apis';
import { saveItemsList } from './actions';
import store from './store';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this._onStoreChange = this._onStoreChange.bind(this);
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
    this.unsubscribe();
  }

  _onStoreChange(){
    const { items } = store.getState();
    if(items){
      localStorage.setItem('items', JSON.stringify(items));
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MyListPage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

