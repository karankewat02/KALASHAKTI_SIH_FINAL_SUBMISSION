const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
        usename:{type:String},
        userType: {type: String, required:true},
        name: {type: String, required:true},
        pno: {type: String, required:true},
        cartStatus:{type: Boolean, default: false},
        cartId:{type:String, default:''},
        isAdmin: {
            type:Boolean,
            default:false,
        },
    },
    {timestamps:true}

);

module.exports = mongoose.model("User",UserSchema);