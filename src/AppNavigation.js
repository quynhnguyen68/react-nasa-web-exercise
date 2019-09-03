import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyListPage from './page/MyListPage';
import SearchPage from './page/SearchPage';
import { setup as setupApi } from './services/apis';
import { saveItemsList } from './actions';
import store from './store';

class AppNavigation extends Component {
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
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={MyListPage} />
            <Route path="/search" component={SearchPage} />
            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
        </Router>
    );
  }
}

export default AppNavigation;

