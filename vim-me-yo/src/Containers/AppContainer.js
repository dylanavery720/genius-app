import { connect } from 'react-redux'
import { displaySearched } from '../Actions/index.js'
import App from '../Components/App/App'

const mapStateToProps = (state) => {
  return { searchedVideos: state.art.searchedVideos,
    favoriteVideos: state.art.favoriteVideos }
}

const mapDispatchToProps = {
  displaySearched,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
