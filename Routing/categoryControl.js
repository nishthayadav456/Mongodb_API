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
const searchBar= async (req, res) => {
    const { Model} = req.query;
    const queryObj = {};
    if (Model) {
      queryObj.Model = { $regex: Model, $options: "i" };
    }
    try {
      const finds = await storeModel.find(queryObj);
      res.send(finds);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  };
module.exports={postData,SearchData,searchBar }