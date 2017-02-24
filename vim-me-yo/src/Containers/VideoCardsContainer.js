import { connect } from 'react-redux'
import { displayPopular, addFavorite } from '../Actions/index.js'
import VideoCards from '../Components/VideoCards/VideoCards'

const mapStateToProps = (state) => {
  return { searchedVideos: state.videos.searchedVideos }
}

const mapDispatchToProps = {
  displayPopular,
  addFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCards)
