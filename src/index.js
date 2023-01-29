const express = require('express');
const cors = require('cors');
const connect = require('./connection.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoute')

const app = express();
const PORT = 5000 || process.env.PORT

app.use(cors());
app.use(express.json());
app.use('/api',paymentRoutes)
app.use('/api',userRoutes)
app.use('/api',productRoutes)
app.use('/api',adminRoutes)



// app.get("/api",(req,res)=>{
//     res.status(200).json({
//         message:"coming from server"
//     })
// });

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})