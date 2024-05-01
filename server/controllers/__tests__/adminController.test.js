require("dotenv").config();

const request = require("supertest");
const { generateToken, generateRefreshToken } = require("../../utils/jwtUtil");
const mongoose = require("mongoose");
const app = require("../../app"); // Assuming your Express app is in 'app.js'
const Product = require("../../models/product");
const User = require("../../models/user");
const Order = require("../../models/order");
const Cart = require("../../models/cart");
const { ObjectId } = require("mongodb");
beforeAll(async () => {
//  monSer= await connectToDB();
});

// Clear the test database before each test
beforeEach(async () => {
},50000);
afterEach(async () => {
  // await Product.deleteMany();
});
// Disconnect from the test database after all tests
afterAll(async () => {
});
//
const findUserById = async (userId) => {
  try {
    // Convert the string to ObjectId
    const objectId = new ObjectId(userId);

    const user = await User.findById(objectId);
    if (!user) {
      console.log("User not found");
      return null; // Or handle the case when user is not found
    }
    // console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error finding user:", error.message);
    throw error; // Or handle the error appropriately
  }
};
const jwt = require("jsonwebtoken");

// 

describe("API tests", () => {
  // Test for getAllProducts
test("GET /api/products", async () => {
  // Generate a mock token
  const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
  const token=generateToken(user)

  const response = await request(app)
    .get("/api/admin/products")
    .set("Authorization", "Bearer " + token);

  expect(response.status).toBe(200);
  expect(response.body.length).toBe(16); // Check if products are returned
  // Add more assertions based on your API response
}, 50000);
  test("GET /api/products with invalid token", async () => {
    // Generate a mock token
    const token ='invalid';

    const response = await request(app)
      .get("/api/admin/products")
      .set("Authorization", "Bearer " +token);

    expect(response.status).toBe(430);
   // Check if products are returned
    // Add more assertions based on your API response
  }, 50000);
test("GET /api/non-existent-route", async () => {
  const response = await request(app).get("/api/non-existent-route");
  expect(response.status).toBe(404); // Expect 404 Not Found
  
});


 // Test for getUserByID
 test("GET /api/user", async () => {
   //  const user = await createUser(); // Function to create a user for testing
   const user = findUserById("662fd0b42ba9fbb1c6a5eb3c");
   const uid = "662fd0b42ba9fbb1c6a5eb3c";
  const token=generateToken(user)
   const response = await request(app)
     .get(`/api/admin/userbyid?userId=${uid}`)
     .set("Authorization", "Bearer " + token);
   expect(response.status).toBe(200);
   expect(response.body._id).toBe(uid); // Check if correct user is returned
 });

//  // Test for updateProduct
//  test("PUT /api/product/:id", async () => {
//    const product = await createProduct(); // Function to create a product for testing
//    const update = { name: "New Product Name" }; // Example update
//    const response = await request(app)
//      .put(`/api/product/${product._id}`)
//      .send({ ...product, ...update });

//    expect(response.status).toBe(200);
//    expect(response.body.name).toBe(update.name); // Check if product name is updated
//  });

//  // Test for deleteProduct
//  test("DELETE /api/product/:id", async () => {
//    const product = await createProduct(); // Function to create a product for testing
//    const response = await request(app).delete(`/api/product/${product._id}`);
//    expect(response.status).toBe(200);

//    // Check if product is deleted
//    const deletedProduct = await Product.findById(product._id);
//    expect(deletedProduct).toBeNull();

//    // Check if product is removed from users' carts
//    const cartItems = await Cart.find({ "items.product": product._id });
//    expect(cartItems.length).toBe(0);
//  });
});
