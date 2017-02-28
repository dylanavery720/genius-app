import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'

class VideoFavorites extends Component {

  loadFavorites() {
    return (
      <div>
        {this.props.favoriteVideos.map((video, i) => {
          const str = video.uri
          const newStr = str.slice(0, 6) + str.slice(7, str.length)
          return <VideoCard classes="mdl-shadow--2dp" keys={i} src={`//player.vimeo.com${newStr}`} tags={video.tags} />
        })}
      </div>
    )
  }


  render() {
    return (
      <div>
        <ul className="mdl-card">
          {this.loadFavorites()}
        </ul>
      </div>
    )
  }
}

VideoFavorites.propTypes = {
  favoriteVideos: React.PropTypes.func,
}

export default VideoFavorites;
