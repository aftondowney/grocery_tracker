// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
//   this.pantry = [];
//   this.shopping = [];
// }

function Pantry(itemName, pantryQuantity) {
  this.itemName = itemName;
  this.pantryQuantity = pantryQuantity;
}

function Shopping(itemName, shopQuantity) {
  this.itemName = itemName;
  this.shopQuantity = shopQuantity;
}

Pantry.prototype.itemIncrease = function(item){
  var itemsPurchased = item;
    return this.pantryQuantity += itemsPurchased;
}

Pantry.prototype.itemDecrease = function(item){
  var itemsPurchased = item;
    return this.pantryQuantity -= itemsPurchased;
}

$(document).ready(function() {
  $("form#shopping").submit(function(event) {
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity);
    newShopEntry.push





    var itemsPurchased = Shopping.shopQuantity;

     event.preventDefault();
  })
