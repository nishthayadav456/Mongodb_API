const databaseurl="mongodb+srv://nishthayadav1122:nishthayadv1234@cluster0.rf6gu5a.mongodb.net/Ecommerce?retryWrites=true&w=majority"
const mongoose=require("mongoose");
const connection=async()=>{
    try{
        await mongoose.connect(databaseurl)
        console.log("connection made succesfully")
    }
    catch(err){
        console.log("error occured",err)
    }
}
module.exports=connection