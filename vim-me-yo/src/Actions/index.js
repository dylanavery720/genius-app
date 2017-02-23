export const displaySearched = (query, payload) => {
  console.log(payload)
  return {
  type: 'DISPLAY_SEARCHED',
  query,
  payload,
 }
}
