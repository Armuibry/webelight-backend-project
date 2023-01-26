const express = require('express');
const {signup,signin} = require('../controller/userAuth.js');
const {isValidated , validateSignup, validSignin} = require('../validators/authValidation')

const router = express();

router.post("/user/signup",validateSignup,isValidated,signup);

router.post("/user/signin",validSignin,isValidated, signin);

module.exports = router;