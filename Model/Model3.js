const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
});

const userModel = mongoose.model("Data", userSchema);
module.exports = { userModel };