import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './Components/App/App';
import './index.css';


import MySongsContainer from './Containers/MySongsContainer'
import SongCardsContainer from './Containers/SongCardsContainer'

import songs from './Reducers/songs-reducer'
// import user from './reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ songs }),
  {
    songs: {
      popularSongs: [],
      searchedSongs: [],
      favorites: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
      {/* <IndexRedirect to='/login' component={LoginContainer} />
        <Route path='/login' component={LoginContainer} />
        <IndexRoute component={MovieIndexContainer} />
        <Route path='/favorites' component={FavoritesContainer} /> */}
        <Route path='/mysongs' component={MySongsContainer} />
        <Route path='/songcards' component={SongCardsContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
