const express = require('express');
const {AdminSignIn} = require('../controller/adminAuth')


const router = express();

router.post('/admin',AdminSignIn);

module.exports = router;