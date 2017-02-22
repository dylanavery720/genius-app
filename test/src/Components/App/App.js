import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css';
import './App.css';
import '../MySongs/MySongs';
import { displaySearched } from '../../Actions/index.js';
import { Link, browserHistory } from 'react-router';

class App extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: ''
    }
    this.search = this.search.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  search() {

      fetch(`https://api.genius.com/search?access_token=j4DQ4ILmQIj07lZA6P_j_2ZjTrG_db2Bxg2aIvLN7tVaq0UxgSgqh8He1T3o28UM&q=${this.state.draftMessage}`)
      .then(response => response.json())
      .then(data => data.response.hits)
      .then(payload => displaySearched(this.state.draftMessage, payload))
    browserHistory.push('/songcards')
  }

  updateSearch(e) {
    this.setState({draftMessage: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rap Genius Genius</h2>
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
