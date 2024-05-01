const User = require("../models/user");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const { ObjectId } = require("mongodb");
const getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const cacheKey = `users-${page}-${limit}`;
    const cachedUsers = await req.redisClient.get(cacheKey);
    if (cachedUsers) {
      console.log("Users retrieved from cache!");
      return res.json(JSON.parse(cachedUsers));
    }

    const users = await User.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    await req.redisClient.set(cacheKey, JSON.stringify(users), "EX", 3600); // Cache for 1 hour

    return res.json(users);
  } catch (err) {
    next(err);
  }
};

const getAllUsersNoLimit = async (req, res, next) => {
  try {
    const cacheKey = `all_users`;
    const cachedUsers = await req.redisClient.get(cacheKey);
    if (cachedUsers) {
      console.log("All users retrieved from cache!");
      return res.json(JSON.parse(cachedUsers));
    }

    const users = await User.find();
    await req.redisClient.set(cacheKey, JSON.stringify(users), "EX", 3600); // Cache for 1 hour

    return res.json(users);
  } catch (err) {
    next(err);
  }
};
const getUserPostById = async (req, res, next) => {
  try {
    // Extract user ID from req._id
    const userId = req.user._id;

    // Call your UserPost model method here using userId
    const userPosts = await User.find({ _id: userId }); // Assuming you have a UserPost model

    // You can further process the userPosts as needed

    return res.json(userPosts);
  } catch (err) {
    console.error(err);
    // Pass the error to the error handling middleware
    next(err);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cacheKey = `user-${id}`;

    const cachedUser = await req.redisClient.get(cacheKey);

    if (cachedUser) {
      console.log(`User with ID ${id} retrieved from cache!`);
      return res.json(JSON.parse(cachedUser)); // Parse cached JSON string
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    await req.redisClient.set(cacheKey, JSON.stringify(user), "EX", 3600); // Cache for 1 hour

    return res.json(user);
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const id = req.user._id;
    const update = req.body;
    const user = await User.findByIdAndUpdate(id, update, { new: true });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const nid = new ObjectId(id);
    const user = await User.findByIdAndDelete(nid);
    console.log("id hai yehh ",nid)
    if (!user) {
      return res.status(404).json({ msg: `User not found ${id}` });
    }
    await req.redisClient.del("all_users");
    return res.json({ msg: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};

const addAddress = async (req, res, next) => {
  const { name, phoneNumber, street, city, landmark, state, pincode } =
    req.body;
  try {
    const newAddress = {
      name,
      phoneNumber,
      street,
      city,
      landmark,
      state,
      pincode,
    };
    const user = req.user;
    // console.log(newAddress)
    // console.log("need", user.addresses)
    user.addresses.push(newAddress);
    await user.save();
    res.status(201).json({ message: "Address added successfully", user });
  } catch (err) {
    next(err);
  }
};

const deleteAddress = async (req, res, next) => {
  const { _id, name, phoneNumber, street, city, landmark, state, pincode } =
    req.body;
  try {
    const newAddress = {
      _id,
      name,
      phoneNumber,
      street,
      city,
      landmark,
      state,
      pincode,
    };
    const user = req.user;
    const adr = user.addresses.find((addr) => addr._id !== newAddress._id);
    user.addresses = adr;
    await user.save();
    res.status(201).json({ message: "Address deleted successfully", user });
  } catch (err) {
    next(err);
  }
};
const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res
        .status(404)
        .json({ msg: "Current Password or New Password not provided." });
    }
    const match = await bcrypt.compare(oldPassword, req.user.password);
    let updatedUser;
    if (match) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        { password: hashedPassword },
        { new: true }
      );
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserPostById,
  updateProfile,
  deleteUser,
  addAddress,
  changePassword,
  deleteAddress,
  getAllUsersNoLimit,
};
