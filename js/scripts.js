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
    $('ul#shoppingList').append("<li><span class='shopping'>" + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" + '</span>' + '<input type="submit" class="edit btn btn-sm" value="Edit">' + '<input type="submit" class="done delete btn btn-sm" value="Delete">' + '</button>' + ' ' + '<button type="button" class="btn btn-sm arrow" aria-label="Left Align">' + '<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>' + '</li>'); //this creates a new shopping list item with note.

    //  shoppingList.push(newShopEntry);
    //   $('ul#shoppingList').append('<li><span class="shopping">' + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" +  '</span>' + '<span class="btn-sm btn-default" id="edit">' + 'edit' + '</span>' + '<span class="btn-sm btn-default" id="delete">' + 'delete' + '</span></li>'); USE TO REWORK EDIT/DELETE BUTTONS

    resetFields();

     $('ul#shoppingList').on('click', '.edit', function(){
       $(this).parent().attr('contenteditable', 'true');
     });

     $('ul#shoppingList').on('click', '.delete', function(){
       $(this).parent().remove();
     });

     resetFields();

      $("span.glyphicon-arrow-right").last().click(function() {
      $('ul#pantryList').append("<li><span class='pantry'>" + shopItem + " x" + '<span class="quantity">' + shopQuantity  + " (" + noteShopping + ")" + '</span></li>');
    }); //transfer shopping list item to pantry
  });

////////begining of pantry stuff

  $("form#pantryForm").submit(function(event) {
    event.preventDefault();
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("#pantryQuantity").val();
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append("<li><span class='pantry'>" + pantryItem + " x" + pantryQuantity + " (" + notePantry + ")" + '</span>' + '<input type="submit" class="edit btn btn-sm" value="Edit">' + '<input type="submit" class="done delete btn btn-sm" value="Delete">' + '</button>' + ' ' + '<button type="button" class="btn btn-sm arrow" aria-label="Left Align">' + '<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>' + '</buton>' + '</li>');
      //look into making buttons smaller? diff color?
    resetFields();

    $("span.glyphicon-arrow-left").last().click(function() {
      $('ul#shoppingList').append("<li><span class='pantry'>" + pantryItem + " x" + '<span class="quantity">' + pantryQuantity  + " (" + notePantry + ")" + '</span></li>'); //sends pantry item to shopping list
    });

      $('ul#pantryList').on('click', '.edit', function(){
        $(this).parent().attr('contenteditable', 'true');
      });

      $('ul#pantryList').on('click', '.delete', function(){
        $(this).parent().remove(); //makes edit/delete work
      });
    });


///sticky footer test

    $(window).bind("load", function() {
      var footerHeight = 0,
       footerTop = 0,
       $footer = $("#footer");

       positionFooter();

      function positionFooter() {

        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
       if ( ($(document.body).height()+footerHeight) < $(window).height()) {
           $footer.css({
                position: "absolute"
           }).animate({
                top: footerTop
           })
       } else {
           $footer.css({
                position: "static"
           })
       }
  }
       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)

   });
});
