const {laptop,mobile,watches, accessories,home,television}=require("./contextData")
const mobileControler=(req,res)=>{
return res.send(mobile)
}
const laptopControler=(req,res)=>{
return res.send(laptop)
 }
const watchesControler=(req,res)=>{
 return res.send(watches)
 }
const TelevisionControler=(req,res)=>{
 return res.send(television)
 }
const accessoriesControler=(req,res)=>{
 return res.send(accessories)
 }
const homeControler=(req,res)=>{
 return res.send(home)
 }     
 module.exports={homeControler,accessoriesControler,TelevisionControler,watchesControler,laptopControler,mobileControler}