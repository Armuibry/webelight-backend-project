const express = require('express');
const {getPayment} = require('../controller/paymentAuth')

const router = express();

router.post("/user/payment",getPayment);

module.exports = router;