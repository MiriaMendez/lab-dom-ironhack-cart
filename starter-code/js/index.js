function parseQuantity(quantity) {
  return Number(quantity.replace("$", ""))
}

function beautifyQuantity(num) {
  return `$${num.toFixed(2)}`
}

function deleteItem(e){
  const button = e.target
  console.log(e.currentTarget)
  //button.parentElement.parentElement.remove()
  const currentProduct = button.parentElement.parentElement
  document.querySelector(".products").removeChild(currentProduct)
}

function getPriceByProduct(itemNode){
  const price = parseQuantity(itemNode.querySelector(".price span").textContent)
  const quantity = itemNode.querySelector(".quantity").value
  const totalPrice= price * quantity

  itemNode.querySelector(".total-price").textContent = beautifyQuantity(totalPrice)
  return totalPrice
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  const products = document.querySelectorAll('.product')
  const totalPrice = Array.from(products)
    .reduce((totalPrice, product) => totalPrice += getPriceByProduct(product),0);
  document.querySelector("h2 span").textContent = beautifyQuantity(totalPrice);
}

function createQuantityInput(){
  const input = document.createElement("input")
  input.type = "number"
  input.min = 0
  input.class = "quantity"
  input.value = 0

  const label = document.createElement("label")
  label.textContent = "QTY"

  const div = document.createElement("div")
  div.append(label)
  div.append(input)

  return div
}

function createDeleteButton(){
 const button = document.createElement("button")
 button.class = "btn btn-delete"
 button.textContent = "Delete"

 const div = document.createElement("div")
 div.append(button)

 return div
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem() {
  const inputName = document.getElementById('name-input').value
  const inputNumber = document.getElementById('number-input').value

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
