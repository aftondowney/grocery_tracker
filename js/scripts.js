// function User(firstName, email) {
//   this.firstName = firstName;
//   this.email = email;
//   this.pantry = [];
//   this.shopping = [];
// }

function Pantry(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}

function Shopping(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}

Pantry.prototype.itemIncrease = function(item){
  var itemsPurchased = item;
    return this.itemQuantity += itemsPurchased;
}

Pantry.prototype.itemDecrease = function(item){
  var itemsPurchased = item;
    return this.itemQuantity -= itemsPurchased;
}
