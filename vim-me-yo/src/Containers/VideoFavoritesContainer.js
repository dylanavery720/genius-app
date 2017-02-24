import { connect } from 'react-redux'
import { displayPopular } from '../Actions/index.js'
import VideoFavorites from '../Components/VideoFavorites/VideoFavorites'

const mapStateToProps = (state) => {
  return { favoriteVideos: state.videos.favoriteVideos }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoFavorites)
