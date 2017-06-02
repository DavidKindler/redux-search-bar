import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KeywordSuggest from './components/keyword-suggest';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import { requestSuggestions } from './actions/action_request_suggestions';
import { requestSuggestions, receiveSuggestions, getSuggestions } from './actions/action_suggestions';


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

