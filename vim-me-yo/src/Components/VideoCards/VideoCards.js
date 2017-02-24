import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'

export default class VideoCards extends Component {

  loadVideos() {
        let shortArray = this.props.searchedVideos.splice(0,6)
        return (
          <div>
          {shortArray.map((video, i) => {
            let str = video.uri
            let newStr = str.slice(0,6) + str.slice(7, str.length)
          return <VideoCard classes="mdl-shadow--2dp" keys={i} src={`//player.vimeo.com${newStr}`} tags={video.tags}/>
          })}
          </div>
        )
   }


  render() {
  return (
      <div>
      <ul className='mdl-card'>
      {this.loadVideos()}
      </ul>
      </div>
  )
}
}
