const bcrypt = require('bcryptjs');
const User = require('../models/users');

exports.signup_post = (req, res) => {
    const {first_name, last_name, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const userInstance = new User(null, first_name, last_name, email, hash);
    userInstance.save();
    res.send(200);
}