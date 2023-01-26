const Product = require('../model/productModel');

exports.getProduct = (req,res) => {

    res.json({
        message:"hi from server all ok"
    })
//    const product =  Product.find({});
//    res.status(200).json(product);
}
exports.createProduct = (req,res) => {
    const {name,description,price,category,quantity,createdBy,strickPrice,discount,otherImages,productSize,link,gender,folded} = req.body;

    let productImage = []

    // if(otherImages.length > 0){
    //     otherImages = otherImages.map(file => {
    //         return file
    //     })
    // }

    const product = new Product({
        name:name,
        description,
        price,
        productSize,
        category,
        gender,
        folded,
        strickPrice,
        discount,
        link,
        quantity,
        otherImages,
        productImage,
        createdBy: req._id
    })

    product.save((error,product)=> {
        if(error) return res.status(400).json({error})

        if(product) return res.status(201).json({
            product
        })
    })

}