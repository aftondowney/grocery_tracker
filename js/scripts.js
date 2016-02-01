function User(firstName, email) {
  this.firstName = firstName;
  this.email = email;
  this.pantry = [];
  this.shopping = [];
}

function Pantry(itemName, itemQuantity, itemUsage, itemExpiration, itemDate) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
  this.itemUsage = itemUsage;
  this.itemExpiration = itemExpiration;
  this.itemDate = itemDate;
}

function Shopping(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}
