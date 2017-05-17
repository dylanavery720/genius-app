import { connect } from 'react-redux'
import { displaySearched, displaySecondary } from '../Actions/index.js'
import App from '../Components/App/App'

const mapStateToProps = (state) => {
  return { searchedVideos: state.art.searchedVideos,
    favoriteVideos: state.art.favoriteVideos, secondary: state.art.secondary }
}

const mapDispatchToProps = {
  displaySearched,
  displaySecondary,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
