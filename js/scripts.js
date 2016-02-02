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
    $("#shoppingButton").hide();
    $("#shoppingForm").show();

  });


  $("form#shoppingForm").submit(function(event) {
    event.preventDefault();
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity);
     shoppingList.push(newShopEntry);
     $('ul#shoppingList').append("<li><span class='shopping'>" + shopItem + " " + "x" + shopQuantity + "</span></li>"); //should this be in the submit function or outside immediately following?


    $("ul#shoppingList li").last().click(function() {
      $(this).wrap("<strike>");
      console.log(newShopEntry);
      $('ul#pantryList').append("<li><span class='pantry'>" + shopItem + " " + "x" + shopQuantity + "</span></li>"); //presently returns [object Object]
    });
  });





















  $("#pantryButton").click(function() {
    $("#pantryButton").hide();
    $("#pantryForm").show();
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
