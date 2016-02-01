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

Pantry.prototype.expandList = function(){
  return this.pantryName + " x" + this.pantryQuantity;
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
    $('ul#shoppingList').append('<li><span class='shopping'>' + newShopEntry.expandList + '</span></li>'); //should this be in the submit function or outside immediately following?
  });

  $("form#pantrySubmit").submit(function(event) {
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("input#pantryQuantity").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append('<li><span class='pantry'>' + newPantryEntry.expandList + '</span></li>'); //should this be in the submit function or outside immediately following?
  });






    var itemsPurchased = Shopping.shopQuantity;

     event.preventDefault();
  })


function resetFields() {
  $("input#new-item").val("");
  $("textarea#new-quantity").val("");
}


$(document).ready(function() {
  $("#shoppingButton").click(function() {
    $("#shoppingButton").hide();

    $("#shopping").append('<div class="form-group">' +
                       '<label for="new-item">Item Name</label>' +
                       '<input type="text" class="form-control" id="new-item">' +
                       '</div>' +
                       '<div class="form-group">' +
                       '<label for="new-quantity">Item Quantity</label>' +
                       '<input type="text" class="form-control" id="new-quantity">' +
                       '</div>' + '<button type="submit" class="btn" id="shoppingSubmit">Add to Shopping List</button>');
  });

 $("#pantryButton").click(function() {
   $("#pantryButton").hide();

   $("#pantry").append('<div class="form-group">' +
                      '<label for="new-item">Item Name</label>' +
                      '<input type="text" class="form-control" id="new-item">' +
                      '</div>' +
                      '<div class="form-group">' +
                      '<label for="new-quantity">Item Quantity</label>' +
                      '<input type="text" class="form-control" id="new-quantity">' +
                      '</div>' + '<button type="submit" class="btn" id="pantrySubmit">Add to Pantry List</button>');

  });
});
