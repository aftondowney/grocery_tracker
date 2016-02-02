describe('Pantry', function() {
  it("creates a new list of items already existing in users pantry", function() {
    var testPantry = new Pantry ("banana", 3);
    expect(testPantry.pantryName).to.equal("banana");
    expect(testPantry.pantryQuantity).to.equal(3);
  });

  it ("will increase item quantity of pantry based on user input", function() {
    var testPantry = new Pantry ("banana", 3);
    expect(testPantry.itemIncrease(2)).to.equal(5);
  })


  it ("will decrease item quantity of pantry based on user input", function() {
    var testPantry = new Pantry ("banana", 5);
    expect(testPantry.itemDecrease(4)).to.equal(1);
  })
});

describe('Shopping', function() {
  it("creates a new shopping list of items the user needs to buy", function () {
    var testShopping = new Shopping ("oats", 5);
    expect(testShopping.shopName).to.equal("oats");
    expect(testShopping.shopQuantity).to.equal(5);
  })

  it("applies the shopping expand method to any new shop entry", function() {
    var testShopping = new Shopping ("scallops", 12, "yum");
    expect(testShopping.expandList()).to.equal("scallops x12 (yum)")
  })
});
