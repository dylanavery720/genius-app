import React, { Component } from 'react';
// export class SongCards extends Component = (props) => {
export default class SongCards extends Component {

  loadSongs() {

        return (
          <div>
          {this.props.searchedSongs.map((songs, i) => {
            let str = songs.uri
            let newStr = str.slice(0,6) + str.slice(7, str.length)
          return    <iframe src={`//player.vimeo.com${newStr}`} width="480" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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
