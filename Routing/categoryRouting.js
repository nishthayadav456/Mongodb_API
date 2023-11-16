const { postData, SearchData, Mobile2 } = require("./categoryControl")

const categoryRouting=require("express").Router()

categoryRouting.post("/postdata",postData)
categoryRouting.get("/Searchdata",SearchData)
categoryRouting.get("/mobile",Mobile2)
module.exports=categoryRouting