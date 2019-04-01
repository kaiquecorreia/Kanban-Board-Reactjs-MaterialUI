import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Header from './components/Header';
import Board from './pages/board';

class App extends Component {
  componentDidMount() {
    console.log('teste');
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Board />
      </Provider>
    );
  }
}

export default App;
