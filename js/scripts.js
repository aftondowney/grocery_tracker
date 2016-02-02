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
     $('ul#shoppingList').append("<li><span class='shopping'>" + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" + '</span></li>');

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
    $('ul#pantryList').append("<li><span class='pantry'>" + pantryItem + " x" + '<span class="quantity">' + pantryQuantity + '<span class="buttons"></span></span>' + "(" + notePantry + ")" + '</span></li>');
    console.log(newPantryEntry);

    resetFields();

    $("ul#pantryList li").find(".quantity").click(function(){ //BEGINNING OF COUNT UP/DOWN BUTTONS

      $(this).find(".buttons").html('<span class="btn btn-danger" id="-">' + '-' + '</span>' + '<span class="btn btn-success" id="+">' + '+' + '</span>');

      
    });
    $("")



    event.preventDefault();
  });



});








    // '<div class="input-group">' +
    //     '<span class="input-group-btn">' +
    //     '<button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">' +
    //     '<span class="glyphicon glyphicon-minus">' +
    //     '</span></button></span><input type="text" name="quant[2]" class="form-control input-number" value="" min="0" max="100">' +
    //     '<span class="input-group-btn"><button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]"><span class="glyphicon glyphicon-plus">'+
    // '</span></button></span> </div>
    //     fieldName = $(this).attr('data-field');
    //     type      = $(this).attr('data-type');
    //     var input = $("input[name='"+fieldName+"']");
    //     var currentVal = parseInt(input.val());
    //     if (!isNaN(currentVal)) {
    //         if(type == 'minus') {
    //
    //             if(currentVal > input.attr('min')) {
    //                 input.val(currentVal - 1).change();
    //             }
    //             if(parseInt(input.val()) == input.attr('min')) {
    //                 $(this).attr('disabled', true);
    //             }
    //
    //         } else if(type == 'plus') {
    //
    //             if(currentVal < input.attr('max')) {
    //                 input.val(currentVal + 1).change();
    //             }
    //             if(parseInt(input.val()) == input.attr('max')) {
    //                 $(this).attr('disabled', true);
    //             }
    //
    //         }
    //     } else {
    //         input.val(0);
    //     }
    // });
    // $('.input-number').focusin(function(){
    //    $(this).data('oldValue', $(this).val());
    // });
    //
    // $(".input-number").keydown(function (e) {
    //         // Allow: backspace, delete, tab, escape, enter and .
    //         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    //              // Allow: Ctrl+A
    //             (e.keyCode == 65 && e.ctrlKey === true) ||
    //              // Allow: home, end, left, right
    //             (e.keyCode >= 35 && e.keyCode <= 39)) {
    //                  // let it happen, don't do anything
    //                  return;
    //         }
    //         // Ensure that it is a number and stop the keypress
    //         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //             e.preventDefault();
    //         }

    // var itemsPurchased = Shopping.shopQuantity;

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
