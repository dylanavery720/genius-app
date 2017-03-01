export const displaySearched = (query, payload) => {
  return {
    type: 'DISPLAY_SEARCHED',
    query,
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
