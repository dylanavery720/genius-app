const art = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_SEARCHED':
    console.log(action.payload)
      return Object.assign({}, state, { searchedVideos: action.payload })
    case 'ADD_FAVE':
    console.log(action.video)
      const favoriteVideos = [action.video, ...state.favoriteVideos]
      // document.getElementById(action.id).parentNode.classList.toggle('mdl-button--colored')
      // DO THIS IN COMPONENT, CLASSNAMES
      return Object.assign({}, state, { favoriteVideos })
    default:
      return state
  }
}

export default art
