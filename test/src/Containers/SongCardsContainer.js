import { connect } from 'react-redux'
import { displayPopular } from '../actions'
import SongCards from '../components/SongCards/SongCards'

const mapStateToProps = (state) => {
  return { popularSongs: state.popularSongs, searchedSongs: state.searchedSongs }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCards)
