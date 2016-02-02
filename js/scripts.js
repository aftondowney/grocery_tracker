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
    $("#shoppingForm").show();
  });
  $("#pantryButton").click(function() {
    $("#pantryButton").hide();
    $("#pantryForm").show();
  });



  $("form#shoppingForm").submit(function(event) {
    event.preventDefault();
    var shoppingList = [];
    var shopItem = $("input#shopItem").val();
    var shopQuantity = $("input#shopQuantity").val();
    var noteShopping = $("textarea#noteShopping").val();
    var newShopEntry = new Shopping(shopItem, shopQuantity, noteShopping);
     shoppingList.push(newShopEntry);
      $('ul#shoppingList').append('<li><span class="shopping">' + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" +  '</span>' + '<span class="btn-sm btn-default" id="edit">' + 'edit' + '</span>' + '<span class="btn-sm btn-default" id="delete">' + 'delete' + '</span></li>');

     resetFields();

    $("span.shopping").last().click(function() {
      $(this).wrap("<strike>");
        $('ul#pantryList').append("<li><span class='pantry'>" + shopItem + " x" + '<span class="quantity">' + shopQuantity + '<span class="buttons"></span></span>' + "(" + noteShopping + ")" + '</span></li>');
    });

  });

  $("form#shopForm").submit(function(event) {
    event.preventDefault();
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("#pantryQuantity").val();
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
      pantryList.push(newPantryEntry);
      $('ul#pantryList').append("<li><span class='pantry'>" + pantryItem + " x" + '<span class="quantity">' + pantryQuantity + '<span class="buttons"></span></span>' + "(" + notePantry + ")" + '</span></li>');


  //   $("ul#pantryList li").find(".quantity").click(function(){  //BEGINNING OF COUNT UP/DOWN BUTTONS
  //     $(this).find(".buttons").html(');
    // });
   });
 });
