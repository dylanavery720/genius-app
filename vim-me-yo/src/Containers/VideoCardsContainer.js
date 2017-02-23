import { connect } from 'react-redux'
import { displayPopular } from '../Actions/index.js'
import VideoCards from '../Components/VideoCards/VideoCards'

const mapStateToProps = (state) => {
  console.log(state)
  return { searchedVideos: state.videos.searchedVideos }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCards)
