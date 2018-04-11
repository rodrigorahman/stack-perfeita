import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootSaga from './core/saga/root.saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const redu = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state);
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(
    combineReducers({
        redu
    }),
    composeEnhancers(),
    applyMiddleware(sagaMiddleware)

);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
