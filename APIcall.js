export const getAPIdata = () => {
  return fetch('https://mysterious-mesa-00016.herokuapp.com/items')
  .then(response => response.json())
  .catch(err => console.log(err))
}