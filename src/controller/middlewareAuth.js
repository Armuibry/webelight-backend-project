 const jwt = require('jsonwebtoken')

 exports.userAuth = (req,res,next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,process.env.JWT_PUBLIC_KEY)
    }else{
        res.status(400).json({
            Message: 'Not authorised please login again'
        })
    }
 }