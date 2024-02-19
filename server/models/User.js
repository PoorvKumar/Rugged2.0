const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim: true
    },
    email: 
    {
        type: String,
        required: true,
        unique: true
    },
    password: 
    {
        type: String,
    },
    address: { type: String },
    phoneNumber: { type: String },
    roles:
    {
        type: [String],
        enum: ["admin","customer","seller","blogger"],
        default: ["customer"]
    },
    refreshToken:
    {
        type: String
    }
},
{
    timestamps: true
});

const User=mongoose.model("user",UserSchema);
module.exports=User;