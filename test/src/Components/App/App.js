import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      payload: [],
      title: '',
      image: ''
    }
  }

  componentDidMount() {
    this.fetcher()
  }

 loadSongs() {
   return this.state.payload.map((song, i) => {
      return (
   <li className='card' key={i}>
      <img src={song.result.song_art_image_thumbnail_url}/>
      <h1>{song.result.full_title}</h1>
   </li>
      )
    })
 }

  fetcher() {
    console.log('working')
      fetch('http://localhost:9000/api/test')
      .then(response => response.json())
      .then(data => this.setState({payload: data, title: data.full_title, image: data.song_art_image_thumbnail_url}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rap Genius Genius</h2>
        </div>
        <div className='body-mask'>
        {this.loadSongs()}
        {/* {this.state.title && <p className="App-intro">{this.state.title}</p>}
        {this.state.image && <img src={this.state.image} className="G-pic" alt="logo" />} */}
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
