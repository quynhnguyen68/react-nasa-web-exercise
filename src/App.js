import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './AppNavigation';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;

