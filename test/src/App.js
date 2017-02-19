import React, { Component } from 'react';
import logo from './record1.png';
import './Reset.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('mounting')
    this.fetcher()
  }

  fetcher() {
    console.log('working')
      fetch('http://localhost:9000/api/helloworld')
      .then(response => response.json())
      .then(data => console.log(data.message))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rap Genius Genius</h2>
        </div>
        <div className='body-mask'>
        <p className="App-intro"></p>
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
