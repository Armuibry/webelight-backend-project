const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB = process.env.MONGO_URL
mongoose.set('strictQuery', false);
mongoose.connect(DB,{
    useNewUrlParser:true,
    
}).then(()=>{
    console.log("DB Connection Success")
}).catch((err)=>{
    console.log(err);
})