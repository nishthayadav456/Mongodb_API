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
    const {Brand} = req.query;
    const queryObj = {};
    if (Brand) {
      queryObj.Brand = { $regex: Brand, $options: "i" };
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