const { check , validationResult} = require ("express-validator");
const jwt = require('jsonwebtoken');

exports.validateSignup = [
    check('firstName').notEmpty().withMessage('First Name is Required'),
    check('lastName').notEmpty().withMessage('Last Name is Required'),
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({min: 6}).withMessage('Password must be at least 6 character long...!')
];

exports.validSignin = [
    check('email').isEmail().withMessage('Valid email required'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 character long...!')
]

exports.isValidated = (req,res,next) => {
    const error = validationResult(req);
    if(error.array().length > 0){
        return res.status(400).json({error: error.array()[0].msg})
    }
    next();
}

exports.userVerificationRequired = (req,res,next) =>{
    const token = req.headers.token.split(" ")[1];
    const user = jwt.verify(token,process.env.JWT_PUBLIC_KEY);
    req.user = user;
    next(); 
}