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
      accessToken: '',
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
    fetch(`https://api.artsy.net/api/artists/pablo-picasso`, {
      method: 'GET',
      headers: {
        'X-Xapp-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTE5MjUyODQsImlhdCI6MTQ5MTMyMDQ4NCwiYXVkIjoiNThlMTk0NDE5YzE4ZGI2NDZhZmVhZTg0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjU4ZTNiZWE0MTM5YjIxNzFlM2YzYzQ1MyJ9.tb4VDfIdsJslHaW59wyw3S87SC0ktBG7VhvVHleFtcs',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(payload => this.props.displaySearched(draftMessage, payload))
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
