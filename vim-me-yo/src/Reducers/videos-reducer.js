const videos = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_SEARCHED':
    return Object.assign({}, state, {searchedVideos: action.payload})
    default:
    return state
  }
}

export default videos
