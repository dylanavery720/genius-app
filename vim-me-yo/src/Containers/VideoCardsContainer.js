import { connect } from 'react-redux'
import { displayPopular, addFavorite } from '../Actions/index.js'
import VideoCards from '../Components/VideoCards/VideoCards'

const mapStateToProps = (state) => {
  console.log(state.art)
  return { searchedVideos: state.art.searchedVideos,
    favoriteVideos: state.art.favoriteVideos,
    secondary: state.art.secondary }
}

const mapDispatchToProps = {
  displayPopular,
  addFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCards)
