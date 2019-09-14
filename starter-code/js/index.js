function parseQuantity(quantity) {
  return Number(quantity.replace("$", ""))
}

function beautifyQuantity(num) {
  return `$${num.toFixed(2)}`
}

function deleteItem(e){

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
  Array.from(products).forEach(product => getPriceByProduct(product))
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
