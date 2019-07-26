import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/containers/counter/counter'
import counterReducer from './components/containers/counter/counterReducer';

const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter></Counter>
    </Provider>
, document.getElementById('app'))