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
  return this.shopName + " x" + this.shopQuantity + " (" + this.noteShopping + ")";
}

Pantry.prototype.expandList = function(){
  return this.pantryName + " x" + this.pantryQuantity + " (" + this.notePantry + ")";
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
  $("textarea#notePantry").val("");
  $("textarea#noteShopping").val("");
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
    $('ul#shoppingList').append("<li><span class='shopping'>" + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" + '</span>' + '<input type="submit" class="edit btn-sm" value="Edit">' + '<input type="submit" class="done delete btn-sm" value="Delete">' + '</li>'); //this creates a new shopping list item with note.

    resetFields();

     $('ul#shoppingList').on('click', '.edit', function(){
       $(this).parent().attr('contenteditable', 'true');
     });

     $('ul#shoppingList').on('click', '.delete', function(){
       $(this).parent().remove();
     });

     resetFields();

      $("span.shopping").last().click(function() {
      $(this).wrap("<strike>");
      $('ul#pantryList').append("<li><span class='pantry'>" + shopItem + " x" + '<span class="quantity">' + shopQuantity  + "(" + noteShopping + ")" + '</span></li>');
    }); //transfer shopping list item to pantry
  });

////////begining of pantry stuff

  $("form#pantryForm").submit(function(event) {
    event.preventDefault();
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = parseInt($("#pantryQuantity").val());
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append("<li><span class='pantry'>" + pantryItem + " x" + pantryQuantity + "(" + notePantry + ")" + '</span>' + '<input type="submit" class="edit btn-sm" value="Edit">' + '<input type="submit" class="done delete btn-sm" value="Delete">' + '</li>');
      //look into making buttons smaller? diff color?
    resetFields();

    $("span.shopping").last().click(function() {
    $(this).wrap("<strike>");
      $('ul#shoppingList').append("<li><span class='pantry'>" + pantryItem + " x" + '<span class="quantity">' + pantryQuantity  + "(" + notePantry + ")" + '</span></li>'); //sends pantry item to shopping list
    });

      $('ul#pantryList').on('click', '.edit', function(){
        $(this).parent().attr('contenteditable', 'true');
      });

      $('ul#pantryList').on('click', '.delete', function(){
        $(this).parent().remove(); //makes edit/delete work
      });


  });
});
