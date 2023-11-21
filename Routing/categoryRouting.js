const { postData, SearchData, searchBar } = require("./categoryControl")
const categoryRouting=require("express").Router()
categoryRouting.post("/postdata",postData)
categoryRouting.get("/Searchdata",SearchData)
categoryRouting.get("/Searchbar",searchBar)
module.exports=categoryRouting