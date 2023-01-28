 const jwt = require('jsonwebtoken')

 exports.userAuth = (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(token){
            let verifyUser = jwt.verify(token,process.env.JWT_PUBLIC_KEY)
            if(verifyUser){
                next()
            }
        }
    } catch (error) {
        return res.status(400).json({
            Message: 'Not authorised please login again'
        })
    }
 }