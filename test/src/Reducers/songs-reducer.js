const songs = (state = {}, action) => {
  console.log('working')
  switch (action.type) {
    case 'DISPLAY_POPULAR':
    return Object.assign({}, state, {popularSongs: action.payload})
    case 'DISPLAY_SEARCHED':
    console.log(action.payload)
    return Object.assign({}, state, {searchedSongs: action.payload})
    default:
    return state
  }
}

export default songs
