//QUERY SELECTORS
const totalCost = document.getElementById('totalCost');
const recipientName = document.getElementById('recipientName');
const wantedItem = document.getElementById('wantedItem');
const individualCost = document.getElementById('indivCost');
const checkbox = document.getElementById('checkBox');

//FUNCTIONS

const getAPIData = () => {
  return fetch('https://mysterious-mesa-00016.herokuapp.com/items')
  .then(response => response.json())
  .then((data) => data[recipient])
  .catch((err) => err)
}

const parseData = () => {
  const dataCollection = getAPIData();
  return dataCollection;
}
