import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KeywordSuggest from './components/keyword-suggest';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
    render() {
        return (
            <KeywordSuggest />
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root'));