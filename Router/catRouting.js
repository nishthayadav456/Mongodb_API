const userRoutes = require('express').Router();
const {Signup,Login} = require('../Router/catControl')
userRoutes.post('/register',Signup)
userRoutes.post('/login',Login)

module.exports = userRoutes