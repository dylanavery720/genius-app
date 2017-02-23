import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css';
import './App.css';
import '../MySongs/MySongs';
import { displaySearched } from '../../Actions/index.js';
import { Link, browserHistory } from 'react-router';
import store from '../../index.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      access_token: '',
    }
    this.search = this.search.bind(this)
    this.artistSearch = this.artistSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.fetchToken = this.fetchToken.bind(this)
  }

  componentDidMount() {
    this.fetchToken()
    this.fetchToken()
  }

  fetchToken() {
    fetch('http://localhost:9000/api/key')
    .then(response => response.json())
    .then(data => this.setState({access_token: data.data}))
  }

  search() {
      fetch(`https://api.vimeo.com/videos?query=${this.state.draftMessage}&access_token=cc8f296cd66332398daf60f3a9b73575`)
      .then(response => response.json())
      .then(data => data.data)
      .then(payload => this.props.displaySearched(this.state.draftMessage, payload))
    browserHistory.push('/songcards')
  }

  artistSearch() {
    fetch(`https://api.genius.com/search?access_token=j4DQ4ILmQIj07lZA6P_j_2ZjTrG_db2Bxg2aIvLN7tVaq0UxgSgqh8He1T3o28UM&q=${this.state.draftMessage}`)
    .then(response => response.json())
    .then(data => data.response.hits[0].result.primary_artist.id)
    .then(payload => this.search(payload))
  }

  updateSearch(e) {
    this.setState({draftMessage: e.target.value})
  }

  render() {
    const { access_token } = this.state
    return (
      <div className="App">
        <div className="App-header">
          {!access_token && <a href="http://localhost:9000/test">Login</a>}
          {access_token && <button id="at" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.fetchToken}>Get Access Token</button>}
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Palatial Revimeo</h1>
          <input onChange={e => this.updateSearch(e)}></input>
          <button onClick={this.search}>Click</button>
        </div>
        {this.props.children}
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
