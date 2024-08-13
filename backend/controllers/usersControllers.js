const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require ('express-async-handler')
const User = require ('../models/usersModel')

const registrarUser = (req, res) => {
    
    
    res.status(201).json({ message: "crear usuario" })
}

const loginUser = (req, res) => {
    res.status(200).json({ message: "login usuario" })
}

const dataUser = (req, res) => {
    res.status(200).json({ message: "datos usuario" })
}

module.exports = {
    registrarUser,
    loginUser,
    dataUser
}