import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      image: ''
    }
  }

  componentDidMount() {
    console.log('mounting')
    this.fetcher()
  }

  fetcher() {
    console.log('working')
      fetch('http://localhost:9000/api/test')
      .then(response => response.json())
      .then(data => this.setState({title: data.full_title, image: data.song_art_image_thumbnail_url}))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rap Genius Genius</h2>
        </div>
        <div className='body-mask'>
        {this.state.title && <p className="App-intro">{this.state.title}</p>}
        {this.state.image && <img src={this.state.image} className="G-pic" alt="logo" />}
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
