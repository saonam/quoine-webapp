export default response => (
  response.json()
)
// Some request return response is not json format
// so response.json() may be throw error
.catch(() => Promise.resolve());
