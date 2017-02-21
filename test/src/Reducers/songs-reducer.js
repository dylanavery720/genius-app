const songs = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_POPULAR':
    return Object.assign({}, state, {popularSongs: action.payload})
    case 'DISPLAY_SEARCHED':
    return Object.assign({}. state, {searchedSongs: action.payload})

    default:
    return state
  }
}

export default songs
