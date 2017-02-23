import React, { Component } from 'react';

export default class VideoCards extends Component {

  loadVideos() {
        let shortArray = this.props.searchedVideos.splice(0,6)
        return (
          <div>
          {shortArray.map((video, i) => {
            let str = video.uri
            let newStr = str.slice(0,6) + str.slice(7, str.length)
          return    <li key={i}><iframe src={`//player.vimeo.com${newStr}`} width="480" height="270"></iframe></li>
          })}
          </div>
        )
   }


  render() {
  return (
      <div>
      <ul>
      {this.loadVideos()}
      </ul>
      </div>
  )
}
}
