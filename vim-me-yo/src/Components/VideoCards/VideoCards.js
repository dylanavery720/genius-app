import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'

class VideoCards extends Component {

  loadVideos() {
    const shortArray = this.props.searchedVideos.splice(0, 6)
    return (
      <div>
        {shortArray.map((video, i) => {
          const str = video.uri
          const newStr = str.slice(0, 6) + str.slice(7, str.length)
          return <VideoCard classes="mdl-shadow--2dp" keys={i} src={`//player.vimeo.com${newStr}`} tags={video.tags} id={video.resource_key} favorite={e => this.props.addFavorite(e, video)}  />
        })}
      </div>
    )
  }


  render() {
    return (
      <div>
        <ul className="mdl-card">
          {this.loadVideos()}
        </ul>
      </div>
    )
  }
}

VideoCards.propTypes = {
  searchedVideos: React.PropTypes.array,
  addFavorite: React.PropTypes.func,
}

export default VideoCards;
