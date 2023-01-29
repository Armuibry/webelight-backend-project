const stripe = require('stripe')(process.env.STRIP_SECRET)

exports.getPayment = async(req , res)=>{
    const id = req.body.id
    const amount = req.body.amount

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:"INR",
            description:"Amir Website",
            payment_method: id,
            confirm: true
        })
    
        res.status(200).json({
            message:"Payment Success",
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "Payment Failed",
            success: false
        })
    }
}