import React, { Component } from 'react';
import '../../Reset.css';
import './App.css';
import { browserHistory } from 'react-router';
import Header from '../Header/Header'


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

  favesRoute() {
    browserHistory.push('/favorites')
  }

  handleHome() {
    browserHistory.push('/')
  }

  render() {
    const { access_token } = this.state
    return (
      <div className="App">
        <Header search={this.search} classes="App-header"  token={access_token} updateSearch={this.updateSearch} handleClick={this.favesRoute.bind(this)} handleHome={this.handleHome} />
        {this.props.children}
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
