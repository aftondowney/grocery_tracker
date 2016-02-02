function Pantry(pantryName, pantryQuantity) {
  this.pantryName = pantryName;
  this.pantryQuantity = pantryQuantity;
}

function Shopping(shopName, shopQuantity) {
  this.shopName = shopName;
  this.shopQuantity = shopQuantity;
}

Shopping.prototype.expandList = function(){
  return this.shopName + "  x" + this.shopQuantity;
}

Pantry.prototype.expandList = function(){
  return this.pantryName + "  x" + this.pantryQuantity;
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
  $("#shoppingButton").click(function() {
    debugger;
    $("#shoppingButton").hide();

  });


  $("form#shoppingForm").submit(function(event) {
    debugger;
    event.preventDefault();
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity);
     shoppingList.push(newShopEntry);
     $('ul#shoppingList').append("<li><span class='shopping'>" + newShopEntry.expandList() + "</span></li>"); //should this be in the submit function or outside immediately following?

  });

  $("#pantryButton").click(function() {
    $("#pantryButton").hide();


  });



  $("form#pantryForm").submit(function(event) {

    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("input#pantryQuantity").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append("<li><span class='pantry'>" + newPantryEntry.expandList() + "</span></li>"); //should this be in the submit function or outside immediately following?
    event.preventDefault();
  });



    //
    //
    //
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
