const mongoose = require("mongoose");

// Address schema
const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
});

// User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    addresses: [AddressSchema],
    phoneNumber: {
        type: String
    },
    roles: {
        type: [String],
        enum: ["admin", "customer", "seller", "blogger"],
        default: ["customer"]
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
