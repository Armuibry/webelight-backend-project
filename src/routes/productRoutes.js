const express = require('express');
const {getProduct,createProduct} = require('../controller/productAuth');
const multer = require('multer');
const {userAuth} = require('../controller/middlewareAuth')
const path = require('path');

const date = new Date();
const currDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,path.join(path.dirname(__dirname),'upload'))
    },
    filename: function(req, file, cb){
        cb(null, currDate +"-"+file.originalname)
    }
})

const upload = multer({storage})

const router = express();


router.get('/products',getProduct)
router.post('/products',upload.array('productImage'),createProduct)


module.exports = router;