import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import VideoCardsContainer from './Containers/VideoCardsContainer'
import AppContainer from './Containers/AppContainer'
import VideoFavoritesContainer from './Containers/VideoFavoritesContainer'
import './index.css';

import videos from './Reducers/videos-reducer'

let window;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ videos }),
  {
    videos: {
      searchedVideos: [],
      favoriteVideos: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={AppContainer}>
        <IndexRoute component={VideoCardsContainer} />
        <Route path='/favorites' component={VideoFavoritesContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
