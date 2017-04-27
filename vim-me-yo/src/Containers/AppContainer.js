import { connect } from 'react-redux'
import { displaySearched } from '../Actions/index.js'
import App from '../Components/App/App'

const mapStateToProps = (state) => {
  return { searchedVideos: state.videos.searchedVideos,
    favoriteVideos: state.videos.favoriteVideos }
}

const mapDispatchToProps = {
  displaySearched,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
