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
  input.className = "quantity"
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
 button.className = "btn btn-delete"
 button.textContent = "Delete"

 button.onclick = deleteItem;

 const div = document.createElement("div")
 div.append(button)

 return div
}

function createTotalPrice(){
  const span = document.createElement("span")
  span.innerText = "$0.00"
  span.className = "total-price"

  const div = document.createElement("div")
  div.append(span)
  return div
}

function createNewItemRow(itemName, itemUnitPrice){
  const span = document.createElement("span")
  span.innerText = itemName 

  const div = document.createElement("div")
  div.append(span)

  div.className = "product-name"

  const priceSpan = document.createElement("span")
  priceSpan.innerText = beautifyQuantity(Number(itemUnitPrice))

  const price = document.createElement("div")
  price.append(priceSpan)

  price.className = "price"

  const divProduct = document.createElement("div")
  divProduct.className = "product"

  divProduct.append(div)
  divProduct.append(price)
  divProduct.append(createQuantityInput())
  divProduct.append(createTotalPrice())
  divProduct.append(createDeleteButton())

  
  return divProduct
}

function createNewItem() {
  let inputName = document.getElementById('name-input').value
  let inputNumber = document.getElementById('number-input').value

  if (inputName && inputNumber) {
    
    const newElement =createNewItemRow(inputName, inputNumber)
    document.querySelector(".products").append(newElement)
    document.getElementById('name-input').value = ""
    document.getElementById('number-input').value = 0
  }

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
