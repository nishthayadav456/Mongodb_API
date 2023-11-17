const {storeModel}=require("../Model/model2")
const {  home } = require("./contextData")

const postData=async(req,res)=>{
    try{
    const first =await storeModel.create(home)
    res.send(first)
    }
    catch(err){
        res.status(500).send({err:err.message})
    }
}
const SearchData =async(req,res)=>{
    
    const second =await storeModel.find({})
    res.send(second)
    
}



module.exports={postData,SearchData }