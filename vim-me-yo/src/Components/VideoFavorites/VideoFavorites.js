import React, { Component } from 'react';
import ArtCard from '../ArtCard/ArtCard'

class VideoFavorites extends Component {

  loadFavorites() {
    const { favoriteVideos, addFavorite } = this.props
    console.log(favoriteVideos)
    return (
      <div>
     {favoriteVideos.map((art, i)=> {
          return <ArtCard key={i} src={art._links.thumbnail.href} title={art.title} favorite={addFavorite}/> 
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
  favoriteVideos: React.PropTypes.node,
  addFavorite: React.PropTypes.func,
}

export default VideoFavorites;
