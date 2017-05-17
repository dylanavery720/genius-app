import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../Reset.css';
import './App.css';
import Header from '../Header/Header';


class App extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      accessToken: ''
    }
    this.search = this.search.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.fetchToken = this.fetchToken.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    this.fetchToken()
  }

  fetchToken() {
    fetch('http://localhost:9000/api/key')
    .then(response => response.json())
    .then(json => this.setState({ accessToken: json.data }, () => {
      browserHistory.push('/')
    }))
  }

  search() {
    const { draftMessage, accessToken } = this.state
    fetch(`https://api.artsy.net:443/api/search?q=${draftMessage}&size=10&type=artist`, {
      method: 'GET',
      headers: {
        'X-Xapp-Token': `${this.state.accessToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      }
    })
      .then(response => response.json())
      .then(payload => this.props.displaySearched(payload._embedded.results[0]))
      .then(data => fetch(`https://api.artsy.net:443/api/artworks?artist_id=${data.payload._links.self.href.substring(34)}`, {
        method: 'GET',
        headers: {
          'X-Xapp-Token': `${this.state.accessToken}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*'
        }
      }))
      .then(response => response.json())
      .then(payload => this.props.displaySecondary(payload._embedded.artworks[0]))
        browserHistory.push('/videocards')    
  }

  updateSearch(e) {
    this.setState({ draftMessage: e.target.value })
  }

  favesRoute() {
    browserHistory.push('/favorites')
  }

  handleHome() {
    browserHistory.push('/')
  }

  logOut() {
    browserHistory.push('/')
    this.setState({ accessToken: '' })
  }

  render() {
    const { accessToken } = this.state
    return (
      <div className="App">
        <Header
          search={this.search}
          classes="App-header"
          token={accessToken}
          updateSearch={this.updateSearch}
          handleClick={this.favesRoute}
          handleHome={this.handleHome}
          logOut={this.logOut}
        />
        {this.props.children}
        <div className="App-footer" />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  displaySearched: React.PropTypes.func,
}

export default App;
