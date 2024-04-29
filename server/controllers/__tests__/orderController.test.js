// addition.test.js

// Test suite for addition function
describe("addition", () => {
  // Test case for addition
  it("adds 1 + 2 to equal 3", () => {
    // Define addition function
    function add(a, b) {
      return a + b;
    }

    // Arrange
    const num1 = 1;
    const num2 = 2;

    // Act
    const result = add(num1, num2);

    // Assert
    expect(result).toBe(3);
  });

  // Add more test cases if needed
});
