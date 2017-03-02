import { connect } from 'react-redux'
import { displayPopular, addFavorite } from '../Actions/index.js'
import VideoCards from '../Components/VideoCards/VideoCards'

const mapStateToProps = (state) => {
  return { searchedVideos: state.videos.searchedVideos,
    favoriteVideos: state.videos.favoriteVideos }
}

const mapDispatchToProps = {
  displayPopular,
  addFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCards)
