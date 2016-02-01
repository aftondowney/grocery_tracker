function User(firstName, email) {
  this.firstName = firstName;
  this.email = email;
  this.pantry = [];
  this.shopping = [];
}

function Pantry(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}

function Shopping(itemName, itemQuantity) {
  this.itemName = itemName;
  this.itemQuantity = itemQuantity;
}

function resetFields() {
  $("input#new-item").val("");
  $("textarea#new-quantity").val("");
}


$(document).ready(function() {
  $("#shoppingList").click(function() {

    $("#shoppingList").append('<div class="form-group">' +
                       '<label for="new-item">Item Name</label>' +
                       '<input type="text" class="form-control" id="new-item">' +
                       '</div>' +
                       '<div class="form-group">' +
                       '<label for="new-quantity">Item Quantity</label>' +
                       '<input type="text" class="form-control" id="new-quantity">' +
                       '</div>' + '<button type="submit" class="btn" id="shoppingSubmit">Add</button>');
  });

 $("#pantryList").click(function() {

   $("#pantryList").append('<div class="form-group">' +
                      '<label for="new-item">Item Name</label>' +
                      '<input type="text" class="form-control" id="new-item">' +
                      '</div>' +
                      '<div class="form-group">' +
                      '<label for="new-quantity">Item Quantity</label>' +
                      '<input type="text" class="form-control" id="new-quantity">' +
                      '</div>' + '<button type="submit" class="btn" id="pantrySubmit">Add</button>');

  });
});
