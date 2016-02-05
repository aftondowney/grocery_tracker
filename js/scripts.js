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

    $('ul#shoppingList').append("<li class='ui-state-default'><span class='shopping'>" + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" + '</span>' + '</li>'); //this creates a new shopping list item with note.

    resetFields();

    });


   $(function() {
    $(".stack").draggable();

    $('.trashCan').droppable({
      drop: function(event, ui) {
        $(ui.draggable).remove();
      }
    });
   });



////////begining of pantry stuff

  $("form#pantryForm").submit(function(event) {

    event.preventDefault();
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("input#pantryQuantity").val();
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
    pantryList.push(newPantryEntry);

    $('ul#pantryList').append("<li class='ui-state-highlight'><span class='pantry'>" + pantryItem + " x" + pantryQuantity + "(" + notePantry + ")" + '</span>' + '</li>');

        resetFields();

    });


    $(function() {
     $(".stack").draggable();

     $('.trashCan').droppable({
       drop: function(event, ui) {
         $(ui.draggable).remove();
       }
     });
    });

    $(function(){
      $("#shoppingList, #pantryList").sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();
    })
///sticky footer test

    $(window).bind("load", function() {
      var footerHeight = 0,
       footerTop = 0,
       $footer = $("#footer");

       positionFooter();

    function positionFooter() {
      footerHeight = $footer.height();
      footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
      if (($(document.body).height()+footerHeight) < $(window).height()) {
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
