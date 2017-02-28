export const displaySearched = (query, payload) => {
  return {
    type: 'DISPLAY_SEARCHED',
    query,
    payload,
  }
}

export const addFavorite = (video) => {
  return {
    type: 'ADD_FAVE',
    video,
  }
}
