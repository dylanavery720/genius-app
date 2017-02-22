import React, { Component } from 'react';
// export class SongCards extends Component = (props) => {
export default class SongCards extends Component {

  loadSongs() {
        return (
          <div>
          <img alt='alt' src={this.props.searchedSongs.artist.image_url}/>
          {this.props.searchedSongs.artist.alternate_names.map(name => {
            return <h1>{name}</h1>
          })}
          </div>
        )
   }


  render() {
    const {searchedSongs} = this.props
  return (
      <div className='body-mask'>
      {/* <ul>
      {this.props.searchedSongs.map((song, i) => {
        let songPath = `https://genius.com/${song.result.path}`
         return (
         <li className='card' key={i}>
           <img alt='alt' src={song.result.header_image_thumbnail_url}/>
           <a href={songPath} target="_blank">{song.result.full_title}</a>
         </li>
         )
       })}
      </ul> */}
      {this.loadSongs()}
      </div>
  )
}
}
