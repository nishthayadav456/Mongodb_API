const { LoginData, RegisterData } = require("./catControl")
const catRouting=require("express").Router()
catRouting.get("/login",LoginData)
catRouting.get("/register",RegisterData)
module.exports=catRouting