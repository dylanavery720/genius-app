import { connect } from 'react-redux'
import { displayPopular } from '../Actions/index.js'
import MySongs from '../Components/MySongs/MySongs'

const mapStateToProps = (state) => {
  return { movies: state.movies, user: state.user, favorites: state.movies }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(null, mapDispatchToProps)(MySongs)
