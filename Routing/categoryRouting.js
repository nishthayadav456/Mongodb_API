const { postData, SearchData } = require("./categoryControl")
const categoryRouting=require("express").Router()
categoryRouting.post("/postdata",postData)
categoryRouting.get("/Searchdata",SearchData)
module.exports=categoryRouting