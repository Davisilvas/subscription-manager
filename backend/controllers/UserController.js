const User = require('../models/User')

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET;

// generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "100d",
    })
}

// register
const register = async (req, res) => {
    res.send("Registro")
}

module.exports = {
    register,
}