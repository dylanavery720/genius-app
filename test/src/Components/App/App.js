import React, { Component } from 'react';
import logo from '../../record1.png';
import '../../Reset.css'
import './App.css';
import '../MySongs/MySongs'
import { displaySearched } from '../../Actions/index.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // payload: [],
      // search: [],
      // title: '',
      // image: '',
      draftMessage: ''
    }
    this.search = this.search.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  // componentDidMount() {
  //   this.fetcher()
  // }

 // loadSongs() {
 //   if(this.state.search.length < 1) {
 //   return this.state.payload.map((song, i) => {
 //      return (
 //   <li className='card' key={i}>
 //      <img alt='alt' src={song.result.song_art_image_thumbnail_url}/>
 //      <a href="`https://genius.com/${song.result.path}`">{song.result.full_title}</a>
 //   </li>
 //      )
 //    })
 //  } else {
 //    return this.state.search.map((song, i) => {
 //      let songPath = `https://genius.com/${song.result.path}`
 //       return (
 //    <li className='card' key={i}>
 //       <img alt='alt' src={song.result.song_art_image_thumbnail_url}/>
 //       <a href={songPath} target="_blank">{song.result.full_title}</a>
 //    </li>
 //       )
 //     })
 //  }
 // }

  // fetcher(e) {
  //   console.log('working')
  //     fetch(`http://localhost:9000/api/${e.target.id}`)
  //     .then(response => response.json())
  //     .then(data => this.setState({payload: data}))
  // }

  search() {
    console.log('working')
    return (dispatch) => {
      fetch(`https://api.genius.com/search?access_token=j4DQ4ILmQIj07lZA6P_j_2ZjTrG_db2Bxg2aIvLN7tVaq0UxgSgqh8He1T3o28UM&q=${this.state.draftMessage}`)
      .then(response => response.json())
      .then(data => dispatch(displaySearched(this.state.draftMessage, data)))
    }
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
