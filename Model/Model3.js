const mongo= require("mongoose")
    const userInfo =mongo.Schema({
      name:{
        type:String,
       },
      email:{
        type:String,
        unique:true,
        required:true,
      },
      password:{
        type:String,
        required:true,
      }
    })
        const User=mongo.model("UserData",userInfo);
        module.exports=User