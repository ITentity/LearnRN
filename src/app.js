import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxAsyncQueue from 'redux-async-queue';

import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';
import Main from './components/Main';


const store = createStore(reducers, applyMiddleware(ReduxThunk, createLogger(), ReduxAsyncQueue));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
