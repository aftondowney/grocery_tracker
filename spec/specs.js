// describe('User', function() {
//   it("creates a new user with given inputs", function() {
//     var testUser = new User ("Tina", "turner@gmail.com");
//     expect(testUser.firstName).to.equal("Tina");
//     expect(testUser.email).to.equal("turner@gmail.com");
//     expect(testUser.pantry).to.eql([]);
//     expect(testUser.shopping).to.eql([]);
//   });
// });

describe('Pantry', function() {
  it("creates a new list of items already existing in users pantry", function() {
    var testPantry = new Pantry ("banana", 3);
    expect(testPantry.itemName).to.equal("banana");
    expect(testPantry.itemQuantity).to.equal(3);
  });

  it ("will increase item quantity of pantry based on user input", function() {
    var testPantry = new Pantry ("banana", 3);
    expect(testPantry.itemIncrease(2)).to.equal(5);
  })
});

describe('Shopping', function() {
  it("creates a new shopping list of items the user needs to buy", function () {
    var testShopping = new Shopping ("oats", 5);
    expect(testShopping.itemName).to.equal("oats");
    expect(testShopping.itemQuantity).to.equal(5);
  })
})
