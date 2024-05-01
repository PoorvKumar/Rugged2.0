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
// const request = require("supertest");
// const app = require("../../app"); // Import your Express app
// const { ObjectId } = require("mongodb");
// const { generateToken, generateRefreshToken } = require("../../utils/jwtUtil");
// const Product = require("../../models/product");
// const User = require("../../models/user");
// describe("Update Product", () => {
//  // JWT token for authentication
//   const findUserById = async (userId) => {
//     try {
//       // Convert the string to ObjectId
//       const objectId = new ObjectId(userId);

//       const user = await User.findById(objectId);
//       if (!user) {
//         console.log("User not found");
//         return null; // Or handle the case when user is not found
//       }
//       // console.log("User found:", user);
//       return user;
//     } catch (error) {
//       console.error("Error finding user:", error.message);
//       throw error; // Or handle the error appropriately
//     }
//   };
//   beforeAll(async () => {
//   });
//   beforeEach(async() => {
// })

//   it("should update a product", async () => {
//     const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
//     const token = generateToken(user);
//     const  ham= "6632c907b0c2dd21963eb2e1"; // Replace with a valid product ID
//     const productId = new ObjectId(ham);
//     const updatedProductData = {
//       id: productId,
//       productName: "Updated Product Name",
//       shortDescription: "Updated short description",
//       price: "19.99",
//       brand: "Updated Brand",
//       stockQuantity: "50",
//       discount: "10",
//       length: "10.5",
//       width: "5.2",
//       height: "3.7",
//       description: "Updated product description",
//       imageUrls: [{ name: "https://example.com/updated-image.jpg" }],
//       tags: [{ name: "tag1" }, { name: "tag2" }],
//       categories: [{ name: "category1" }, { name: "category2" }],
//       colors: [{ name: "red" }, { name: "blue" }],
//     };

//     const response = await request(app).patch(
//       "/api/admin/updateProduct",
//       updatedProductData,
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//       // .set("Authorization", "Bearer " +token);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("_id", productId);
//     expect(response.body.name).toBe(updatedProductData.productName);
//     expect(response.body.shortDescription).toBe(
//       updatedProductData.shortDescription
//     );
//     expect(response.body.price).toBe(parseInt(updatedProductData.price));
//     expect(response.body.brand).toBe(updatedProductData.brand);
//     expect(response.body.stockQuantity).toBe(
//       parseInt(updatedProductData.stockQuantity)
//     );
//     expect(response.body.discount).toBe(updatedProductData.discount);
//     expect(response.body.dimensions.length).toBe(
//       parseFloat(updatedProductData.length)
//     );
//     expect(response.body.dimensions.width).toBe(
//       parseFloat(updatedProductData.width)
//     );
//     expect(response.body.dimensions.height).toBe(
//       parseFloat(updatedProductData.height)
//     );
//     expect(response.body.description).toBe(updatedProductData.description);
//     expect(response.body.images[0].source).toBe(
//       updatedProductData.imageUrls[0].name
//     );
//     expect(response.body.tags).toEqual(
//       updatedProductData.tags.map((tag) => tag.name)
//     );
//     expect(response.body.categories).toEqual(
//       updatedProductData.categories.map((category) => category.name)
//     );
//     expect(response.body.colours).toEqual(
//       updatedProductData.colors.map((color) => color.name)
//     );
//   });

//   it("should return 400 if missing information", async () => {
//         const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
//         const token = generateToken(user);
//     const updatedProductData = {
//       id: "62f9d7b2a8d7c3ee0c2b9c1a", // Replace with a valid product ID
//     };

//     const response = await request(app)
//       .patch("/api/admin/updateProduct",updatedProductData)
//       .set("Authorization", "Bearer " +token);

//     expect(response.status).toBe(400);
//     expect(response.body).toHaveProperty("msg", "Missing Information");
//   });
// });
