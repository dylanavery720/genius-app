import { connect } from 'react-redux'
import { displayPopular } from '../Actions/index.js'
import SongCards from '../Components/SongCards/SongCards'

const mapStateToProps = (state) => {
  return { popularSongs: state.popularSongs, searchedSongs: state.searchedSongs }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCards)
