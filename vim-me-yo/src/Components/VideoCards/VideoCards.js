import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'

class VideoCards extends Component {

  loadVideos() {
    const { searchedVideos } = this.props
    console.log(searchedVideos)
    return (
      <div>
        <h1>{searchedVideos.name}</h1>
        <h1>{searchedVideos.hometown}</h1>
        <img src={searchedVideos.links.thumbnail.href} />
      </div>
    )
  }

  componentWillUpdate(nextProps, nextState) {
    // return nextProps.user !== this.props.user
    return nextProps.searchedVideos !== this.props.searchedVideos
  }

  render() {
    const { searchedVideos } = this.props

    const displayArt = () => {
      if(searchedVideos.length > 0) {
         return (
          <div>
            <h1>{searchedVideos.name}</h1>
            <h1>{searchedVideos.hometown}</h1>
            <img src={searchedVideos.links.thumbnail.href} />
          </div>
         )
      }
    }
    return (
      <div>
        <ul className="mdl-card">
          {displayArt()}
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
