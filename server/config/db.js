const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName:
        process.env.NODE_ENV === "test"
          ? process.env.MONGO_DB_TEST
          : process.env.MONGO_DB_NAME,
    });
    console.log("MongoDB connection established");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}
module.exports = connectDB;
