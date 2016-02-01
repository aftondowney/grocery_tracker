describe('User', function() {
  it("creates a new user with given inputs", function() {
    var testUser = new User ("Tina", "Turner", "turner@gmail.com");
    expect(testUser.firstName).to.equal("Tina");
    expect(testUser.lastName).to.equal("Turner");
    expect(testUser.email).to.equal("turner@gmail.com");
    expect(testUser.pantry).to.eql([]);
    expect(testUser.shopping).to.eql([]);
  });
});
