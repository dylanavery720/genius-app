import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'

class VideoCards extends Component {

  loadVideos() {
    const { searchedVideos } = this.props
    console.log(searchedVideos)
    return (
      <div>
        <h1>{searchedVideos.title}</h1>
        {/*<h1>{searchedVideos.hometown}</h1>*/}
        <img src={searchedVideos._links.thumbnail.href} />
      </div>
    )
  }


  render() {
    const { searchedVideos } = this.props
    return (
      <div>
        <ul className="mdl-card">
          {searchedVideos.title && this.loadVideos()}
        </ul>
      </div>
    )
  }
}

VideoCards.propTypes = {
  searchedVideos: React.PropTypes.node,
  // favoriteVideos: React.PropTypes.node,
  addFavorite: React.PropTypes.func,
}

export default VideoCards;
