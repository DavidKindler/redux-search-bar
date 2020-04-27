import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

import reducers from './reducers';
import KeywordSuggest from './components/keyword-suggest';



const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    createLogger  // log actions
  )
)

export default class App extends Component {
    render() {
        return (
            <KeywordSuggest />
        );
    }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

