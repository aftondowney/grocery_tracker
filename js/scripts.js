// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
//   this.pantry = [];
//   this.shopping = [];
// }

function Pantry(pantryName, pantryQuantity) {
  this.pantryName = pantryName;
  this.pantryQuantity = pantryQuantity;
}

function Shopping(shopName, shopQuantity) {
  this.shopName = shopName;
  this.shopQuantity = shopQuantity;
}

Shopping.prototype.expandList = function(){
  return this.shopName + " x" + this.shopQuantity;
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
  $("form#shoppingSubmit").submit(function(event) {
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity);
    shoppingList.push(newShopEntry);
  });

  // $('ul#shoppingList').append('<li><span class='shopping'>' + ITEMENTRY + 'x' + ITEMQUANTITY + '</span></li>')




    var itemsPurchased = Shopping.shopQuantity;

     event.preventDefault();
  })
