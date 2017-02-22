import { connect } from 'react-redux'
import { displayPopular } from '../Actions/index.js'
import SongCards from '../Components/SongCards/SongCards'

const mapStateToProps = (state) => {
  console.log(state)
  return { popularSongs: state.songs.popularSongs, searchedSongs: state.songs.searchedSongs }
}

const mapDispatchToProps = {
  displayPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCards)
