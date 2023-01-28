const stripe = require('stripe')(process.env.STRIP_SECRET)

exports.getPayment = async(req,res)=>{
    const { id , amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:"INR",
            description:"Amir Website",
            payment_method: id,
            confirm: true
        })
    
        console.log("payment ", payment);
    
        res.status(200).json({
            message:"Payment Success",
            success: "true"
        })
    } catch (error) {
        console.log("error",error);
        res.status(400).json({
            message: "Payment Failed",
            success: false
        })
    }
}