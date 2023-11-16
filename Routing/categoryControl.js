
const { storeSchema } = require("../Model/model")
const { home } = require("./contextData")

const postData=async(req,res)=>{
    const first =await storeSchema.create(home)
    res.send(first)
}
const SearchData =async(req,res)=>{
    const second =await storeSchema.find({})
    res.send(second)
}
module.exports={postData,SearchData }