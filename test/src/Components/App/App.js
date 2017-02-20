import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      payload: [],
      search: [],
      title: '',
      image: '',
      draftMessage: ''
    }
    this.search = this.search.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    this.fetcher()
  }

 loadSongs() {
   return this.state.payload.map((song, i) => {
      return (
   <li className='card' key={i}>
      <img alt='alt' src={song.result.song_art_image_thumbnail_url}/>
      <h1>{song.result.full_title}</h1>
   </li>
      )
    })
 }

  fetcher(e) {
    console.log('working')
      fetch(`http://localhost:9000/api/${e.target.id}`)
      .then(response => response.json())
      .then(data => this.setState({payload: data}))
  }

  search() {
    console.log('working')
      fetch(`https://api.genius.com/search?access_token=j4DQ4ILmQIj07lZA6P_j_2ZjTrG_db2Bxg2aIvLN7tVaq0UxgSgqh8He1T3o28UM&q=${this.state.draftMessage}`)
      .then(response => response.json())
      .then(data => this.setState({search: data}))
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
        <div className='body-mask'>
        <button id="jonwayne" onClick={e => this.fetcher(e)}>Jonwayne</button>
        <button id='kanyewest' onClick={e => this.fetcher(e)}>Kanye</button>
        <button id='lupefiasco' onClick={e => this.fetcher(e)}>Lupe</button>
        <button id='schoolboyq' onClick={e => this.fetcher(e)}>ScHoolboyQ</button>
        <button id='nipseyhussle' onClick={e => this.fetcher(e)}>Nipsey</button>
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
