//QUERY SELECTORS
const table = document.querySelector('tbody');
const totalCost = document.getElementById('totalCost');
const recipientName = document.getElementById('recipientName');
const wantedItem = document.getElementById('wantedItem');
const individualCost = document.getElementById('indivCost');
const checkbox = document.getElementById('checkBox');

//FUNCTIONS

const getAPIData = () => {
  return fetch('https://mysterious-mesa-00016.herokuapp.com/items')
  .then(response => response.json())
  .then(data => setTable(data))
  .catch(err => console.log(err))
}

getAPIData();

const listGifts = (data) => {
    table.innerHTML = ``;
    data.forEach(data => {
      table.innerHTML += `<tr>
      <td class="recipient-name" id="recipientName">${data.recipient}</td>
      <td class="wanted-item" id="wantedItem">${data.name}</td>
      <td class="cost" id="indivCost">${data.priceInDollars}</td>
      <td><input type="checkbox" id="checkBox"></td>
      </tr>`
  })
}

const getCost = (data) => {
  let result = data.reduce((totalPrice, item) => {
    totalPrice += item.priceInDollars;
    return totalPrice;
  }, 0)
  totalCost.innerText = result;
  return result;
}

const setTable = (data) => {
  listGifts(data)
  getCost(data)
}