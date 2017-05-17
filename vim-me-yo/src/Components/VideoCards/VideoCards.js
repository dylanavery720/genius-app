import React, { Component } from 'react';
import ArtCard from '../ArtCard/ArtCard'

class VideoCards extends Component {

  loadVideos() {
    const { searchedVideos, addFavorite, secondary } = this.props
    return (
      <div>
        <ArtCard src={searchedVideos._links.thumbnail.href} title={searchedVideos.title} favorite={e => this.props.addFavorite(e, searchedVideos)} />
        <ArtCard src={secondary._links.thumbnail.href} title={secondary.name} favorite={e => this.props.addFavorite(e, searchedVideos)} />
      </div>
    )
  }


  render() {
    const { searchedVideos, secondary } = this.props
    return (
      <div>
        <ul className="mdl-card">
          {secondary._links && this.loadVideos()}
        </ul>
      </div>
    )
  }
}

VideoCards.propTypes = {
  searchedVideos: React.PropTypes.node,
  // favoriteVideos: React.PropTypes.node,
  addFavorite: React.PropTypes.func,
  secondary: React.PropTypes.node,
}

export default VideoCards;
