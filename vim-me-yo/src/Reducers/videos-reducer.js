const videos = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_SEARCHED':
      return Object.assign({}, state, { searchedVideos: action.payload })
    case 'ADD_FAVE':
      const favoriteVideos = [action.video, ...state.favoriteVideos]
      return Object.assign({}, state, { favoriteVideos })
    default:
      return state
  }
}

export default videos
