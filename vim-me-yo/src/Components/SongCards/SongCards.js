import React, { Component } from 'react';
// export class SongCards extends Component = (props) => {
export default class SongCards extends Component {

  loadSongs() {
        let shortArray = this.props.searchedSongs.splice(0,6)
        return (
          <div>
          {shortArray.map((songs, i) => {
            let str = songs.uri
            let newStr = str.slice(0,6) + str.slice(7, str.length)
          return    <li key={i}><iframe src={`//player.vimeo.com${newStr}`} width="480" height="270"></iframe></li>
          })}
          </div>
        )
   }


  render() {
    const {searchedSongs} = this.props
  return (
      <div>
      <ul>
      {this.loadSongs()}
      </ul>
      </div>
  )
}
}
