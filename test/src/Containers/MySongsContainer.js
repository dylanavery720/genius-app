import { connect } from 'react-redux'
import { displayPopular } from '../actions'
import MySongs from '../components/MySongs/MySongs'

const mapStateToProps = (state) => {
  return { movies: state.movies, user: state.user, favorites: state.movies }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(null, mapDispatchToProps)(MySongs)
