const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: "User Already Exist"
            });
            const { firstName, lastName, email, password, contact } = req.body;
            const hash_password = bcrypt.hashSync(password, 10);

            const newUser = new User({
                firstName, lastName, email, password: hash_password, contact, userName: Math.random().toString()
            });
            let token;

            newUser.save((error, data) => {
                if (error) return res.status(400).json({
                    message: "Something went wrong",
                    error: `${error}`
                });

                if (data) {
                    token = jwt.sign({ _id: data._id }, process.env.JWT_PUBLIC_KEY, { expiresIn: '1h' });
                    return res.status(201).json({
                        token,
                        data,
                        message: 'User Created Successfully..!'
                    })

                }
            });
            user
        });

}

exports.signin = (req, res) => {
    User.find({ email: req.body.email })
        .exec((error, data) => {
            if (error) return res.status(400).json({
                massage: `${error}`,
                name: "error"
            })

            if (data) {
                const { password } = data[0];
                const match = bcrypt.compareSync(req.body.password, password)
                if (match) {
                    const token = jwt.sign({ _id: data._id }, process.env.JWT_PUBLIC_KEY, { expiresIn: '1h' });
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
                    message: "Not a valid user"
                });
            }
        })
}