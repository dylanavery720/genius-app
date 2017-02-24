import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css';
import './App.css';
import { browserHistory } from 'react-router';
import Button from '../Button/Button'


class App extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      access_token: '',
    }
    this.search = this.search.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.fetchToken = this.fetchToken.bind(this)
  }

  componentDidMount() {
    setTimeout(this.fetchToken(), 2000)
  }

  fetchToken() {
    fetch('http://localhost:9000/api/key')
    .then(response => response.json())
    .then(data => this.setState({access_token: data.data}))
  }

  search() {
    const { draftMessage, access_token } = this.state
      fetch(`https://api.vimeo.com/videos?query=${draftMessage}&access_token=${access_token.access_token}`)
      .then(response => response.json())
      .then(data => data.data)
      .then(payload => this.props.displaySearched(draftMessage, payload))
    browserHistory.push('/videocards')
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Palatial Revimeo</h1>
          <input className='mdl-textfield__input' onChange={e => this.updateSearch(e)}></input>
          <Button classes="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" handleClick={this.search} text="Search" />
          {/* <i class="material-icons">search</i> */}
        </div>
        {this.props.children}
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
