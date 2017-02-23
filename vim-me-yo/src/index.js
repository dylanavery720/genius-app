import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import './index.css';


import VideoCardsContainer from './Containers/VideoCardsContainer'
import AppContainer from './Containers/AppContainer'

import videos from './Reducers/videos-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ videos }),
  {
    videos: {
      searchedVideos: [],
      favorites: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={AppContainer}>
        <Route path='/videocards' component={VideoCardsContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
