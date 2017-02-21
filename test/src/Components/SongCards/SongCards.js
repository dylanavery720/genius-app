import React, { Component } from 'react';
// export class SongCards extends Component = (props) => {
export class SongCards extends Component {

  loadSongs() {
    if(this.props.popularSongs.length < 1) {
    return this.props.popularSongs.map((song, i) => {
       return (
      <li className='card' key={i}>
       <img alt='alt' src={song.result.song_art_image_thumbnail_url}/>
       <a href="`https://genius.com/${song.result.path}`">{song.result.full_title}</a>
      </li>
       )
     })
   } else {
     return this.props.searchedSongs.map((song, i) => {
       let songPath = `https://genius.com/${song.result.path}`
        return (
        <li className='card' key={i}>
          <img alt='alt' src={song.result.song_art_image_thumbnail_url}/>
          <a href={songPath} target="_blank">{song.result.full_title}</a>
        </li>
        )
      })
   }
  }


  render() {
  return (
      <div className='body-mask'>
      <ul>
      {this.loadSongs()}
      </ul>
      </div>
  )
}
}
