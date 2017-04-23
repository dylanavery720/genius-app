export const displaySearched = (payload) => {
  return {
    type: 'DISPLAY_SEARCHED',
    payload,
  }
}

export const addFavorite = (e, video) => {
  return {
    type: 'ADD_FAVE',
    id: e.target.id,
    video,
  }
}
