export const displayPopular = (payload) => {
  return {
  type: 'DISPLAY_POPULAR',
  payload,
 }
}

export const displaySearched = (query, payload) => {
  return {
  type: 'DISPLAY_SEARCHED',
  query,
  payload,
 }
}
