const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.AdminSignIn = (req, res) => {
    const { email } = req.body;

    User.find({ email })
        .exec((error, data) => {
            if (data) {
                const { password } = data[0];
                console.log(data);
                const match = bcrypt.compareSync(req.body.password, password)
                if (match) {
                    const token = jwt.sign({ _id: data._id }, process.env.JWT_PUBLIC_KEY, { expiresIn: '24h' });
                    res.cookies('token',token,{httpOnly : true, expires: 24*60*60*1000});
                    const { firstName, lastName, email, role, _id, fullName } = data[0];

                    res.status(200).json({
                        token,
                        user: { firstName, lastName, email, role, _id, fullName }
                    })
                } else {
                    return res.status(400).json({
                        mesage: "Invalid Password"
                    })
                }
            } else {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            }
        })
}