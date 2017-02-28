import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../Reset.css';
import './App.css';
import Header from '../Header/Header';

let fetch;


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
    fetch(`https://api.vimeo.com/videos?query=${draftMessage}&access_token=${accessToken.access_token}`)
      .then(response => response.json())
      .then(data => data.data)
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

  render() {
    const { accessToken } = this.state
    return (
      <div className="App">
        <Header
          search={this.search}
          classes="App-header"
          token={accessToken}
          updateSearch={this.updateSearch}
          handleClick={this.favesRoute.bind(this)}
          handleHome={this.handleHome}
        />
        {this.props.children}
        <div className="App-footer" />
      </div>
    );
  }
}

export default App;
