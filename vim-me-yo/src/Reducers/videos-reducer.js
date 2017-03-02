const videos = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_SEARCHED':
    //   for(let j = 0; j <= state.favoriteVideos.length; j++) {
    //   for(let i = 0; i <= action.payload; i++) {
    //     if(state.favoriteVideos.includes(action.payload[i].name)){
    //       document.getElementById(action[i].id).parentNode.classList.toggle('mdl-button--colored')
    //     }
    //   }
    // }
      return Object.assign({}, state, { searchedVideos: action.payload })
    case 'ADD_FAVE':
      const favoriteVideos = [action.video, ...state.favoriteVideos]
      document.getElementById(action.id).parentNode.classList.toggle('mdl-button--colored')
      return Object.assign({}, state, { favoriteVideos })
    default:
      return state
  }
}

export default videos
