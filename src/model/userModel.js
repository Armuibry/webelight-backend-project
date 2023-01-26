const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim:true,
        min:3,
        max:20
    },
    lastName:{
        type: String,
        required: true,
        min:3,
        max:20
    },
    userName:{
        type: String,
        trim: true,
        unique: true,
        lowercase:true,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    contact:{
        type:String,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: "user"
    },
    profile:{
        type: String,
    }
},{timestamps:true})


module.exports = mongoose.model('User',userSchema);