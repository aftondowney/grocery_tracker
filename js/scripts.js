function Pantry(pantryName, pantryQuantity, notePantry) {
  this.pantryName = pantryName;
  this.pantryQuantity = pantryQuantity;
  this.notePantry = notePantry;
}

function Shopping(shopName, shopQuantity, noteShopping) {
  this.shopName = shopName;
  this.shopQuantity = shopQuantity;
  this.noteShopping = noteShopping;
}

Shopping.prototype.expandList = function(){
  return this.shopName + "  x" + this.shopQuantity + " (" + this.noteShopping + ")";
}

Pantry.prototype.expandList = function(){
  return this.pantryName + "  x" + this.pantryQuantity + " (" + this.notePantry + ")";
}

Pantry.prototype.itemIncrease = function(item){
  var itemsPurchased = item;
    return this.pantryQuantity += itemsPurchased;
}

Pantry.prototype.itemDecrease = function(item){
  var itemsPurchased = item;
    return this.pantryQuantity -= itemsPurchased;
}

function resetFields() {
  $("input#shopItem").val("");
  $("input#shopQuantity").val("");
  $("input#pantryItem").val("");
  $("input#pantryQuantity").val("");
  $("input#notePantry").val("");
  $("input#noteShopping").val("");
}

$(document).ready(function() {
  $("#shoppingButton").click(function() {
    $("#shoppingButton").hide();

  });


  $("form#shoppingForm").submit(function(event) {
    event.preventDefault();
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var noteShopping = $("textarea#noteShopping").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity, noteShopping);
     shoppingList.push(newShopEntry);
     $('ul#shoppingList').append("<li><span class='shopping'>" + newShopEntry.expandList() + "</span></li>");

     resetFields();
  });

  $("#pantryButton").click(function() {
    $("#pantryButton").hide();

  });

  $("form#pantryForm").submit(function(event) {


    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("#pantryQuantity").val();
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append("<li><span class='pantry'>" + newPantryEntry.expandList() + "</span></li>");
    resetFields();

    event.preventDefault();
  });

    // var itemsPurchased = Shopping.shopQuantity;

});

//
// function resetFields() {
//   $("input#new-item").val("");
//   $("textarea#new-quantity").val("");
// }
//
//
//
//
// });
