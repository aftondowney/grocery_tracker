function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.pantry = [];
  this.shopping = [];
}

function Pantry(itemName, itemQuantity, itemUsage, itemExpiration) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
  this.itemUsage = itemUsage;
  this.itemExpiration = itemExpiration;
}

function Shopping(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}
