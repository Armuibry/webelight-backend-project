const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        trim:true
    },
    price:{
        type: Number,
        required:true
    },
    strickPrice:{type:String},
    discount:{type:String},
    productSize:{type:String},
    link:{type:String},
    gender:{type:String},
    folded:{type:String},

    category:{
        type: String,
        trim: true,
    },
    otherImages:[{type:String}],
    productImage:[
        {img:{type:String}}
    ],
    size:{type: String},
    quantity:{type: Number, required:true},

    createdBy:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    updatedAt:{
        type: Date
    }
},{timestamps:true})

module.exports = new mongoose.model('Product',productSchema);