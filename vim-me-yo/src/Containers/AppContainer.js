import { connect } from 'react-redux'
import { displaySearched } from '../Actions/index.js'
import App from '../Components/App/App'

// const mapStateToProps = (state) => {
//   return { movies: state.movies, favorites: state.movies }
// }

const mapDispatchToProps = {
  displaySearched
}

export default connect(null, mapDispatchToProps)(App)
