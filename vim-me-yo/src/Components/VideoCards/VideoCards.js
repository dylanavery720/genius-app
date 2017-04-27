import React, { Component } from 'react';
import ArtCard from '../ArtCard/ArtCard'

class VideoCards extends Component {

  loadVideos() {
    const { searchedVideos, addFavorite } = this.props
    return (
      <ArtCard src={searchedVideos._links.thumbnail.href} title={searchedVideos.title} favorite={e => this.props.addFavorite(e, searchedVideos)}/>
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
