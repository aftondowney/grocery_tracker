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
    $('ul#shoppingList').append("<li id='drop-target-shopping' ondrop='drop(event)' ondragover='allowDrop(event)' draggable='true'><span class='shopping'>" + shopItem + " x" + shopQuantity + " (" + noteShopping + ")" + '</span>' + '<input type="submit" class="edit btn-sm" value="Edit">' + '<input type="submit" class="done delete btn-sm" value="Delete">' + '</li>'); //this creates a new shopping list item with note.
    //DRAG AND DROPPABLE ITEMS
        var dropZoneOne = document.querySelector('#drop-target-pantry');
        var dragElements = document.querySelector('#shoppingList li')
        var elementDragged = null;

        for (var i = 0; i < dragElements.length; i++) {

          dragElements[i].addEventListener('dragstart', function(e) {
              e.dataTransfer.effectAllowed = 'move';
              e.dataTransfer.setData('text', this.innerHTML);
              elementDragged = this;
          });

          dragElements[i].addEventListener('dragend', function(e) {
            elementDragged = null;
          });

        };

        dropZoneOne.addEventListener('dragover', function(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }

          e.dataTransfer.droppEffect = 'move';

          return false;

        });

        dropZoneOne.addEventListener('dragenter', function(e) {
          this.className = 'over';
        });

        dropZoneOne.addEventListener('dragleave', function(e) {
          this.className = '';
        });

        dropZoneOne.addEventListener('drop', function(e) {
          if (e.preventDefault) e.preventDefault();
          if (e.stopPropagation) e.stopPropagation();

          this.className = '';
          this.innerHTML = 'Hey there!' + e.dataTransfer.getData('text');

          return false;
        });

        document.querySelector('#shoppingList li').removeChild(elementDragged);

        return false;
      });
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

      $("span.shopping").last().click(function() {
      $(this).wrap("<strike>");
      $('ul#pantryList').append("<li><span class='pantry'>" + shopItem + " x" + '<span class="quantity">' + shopQuantity  + "(" + noteShopping + ")" + '</span></li>');
    }); //transfer shopping list item to pantry


////////begining of pantry stuff

  $("form#pantryForm").submit(function(event) {
debugger;
    event.preventDefault();
    var pantryList = [];
    var pantryItem = $("input#pantryItem").val();
    var pantryQuantity = $("#pantryQuantity").val();
    var notePantry = $("textarea#notePantry").val();
    var newPantryEntry = new Pantry(pantryItem, pantryQuantity, notePantry);
    pantryList.push(newPantryEntry);
    $('ul#pantryList').append("<li id='drop-target-pantry' ondrop='drop(event)' ondragover='allowDrop(event)' draggable='true'><span class='pantry'>" + pantryItem + " x" + pantryQuantity + "(" + notePantry + ")" + '</span>' + '<input type="submit" class="edit btn-sm" value="Edit">' + '<input type="submit" class="done delete btn-sm" value="Delete">' + '</li>');


      var dropZoneTwo = document.querySelector('#drop-target-shopping');
      var dragElements = document.querySelector('#pantryList')
      var elementDragged = null;

      for (var i = 0; i < dragElements.length; i++) {

        dragElements[i].addEventListener('dragstart', function(e){
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.innerHTML);
            elementDragged = this;
        });

        dragElements[i].addEventListener('dragend', function(e) {
          elementDragged = null;
        });

      };

      dropZoneTwo.addEventListener('dragover', function(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        e.dataTransfer.droppEffect = 'move';

        return false;

      });

      dropZoneTwo.addEventListener('dragenter', function(e) {
        this.className = 'over';
      });

      dropZoneTwo.addEventListener('dragleave', function(e) {
        this.className = '';
      });

      dropZoneTwo.addEventListener('drop', function(e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();

        this.className = '';
        this.innerHTML = 'Hey there!' + e.dataTransfer.getData('text');

        return false;
      });

      document.querySelector('#pantryList li').removeChild(elementDragged);

      return false;
    });

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
