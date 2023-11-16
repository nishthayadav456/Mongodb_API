
const { storeSchema } = require("../Model/model")
const { home, mobile } = require("./contextData")

const postData=async(req,res)=>{
    const first =await storeSchema.create(home)
    res.send(first)
}
const SearchData =async(req,res)=>{
    const second =await storeSchema.find({})
    res.send(second)
}
const Mobile2=(req,res)=>{
    return res.send(mobile)
}


module.exports={postData,SearchData,Mobile2 }