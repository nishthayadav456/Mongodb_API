const express=require('express');
const categoryRouting=require('./Routing/categoryRouting')
const app=express();
const cors=require("cors");

app.use(cors({
    origin:"*"
}))
// app.use("/api",categoryRouting);

app.use("/api",categoryRouting)
app.listen(4002,()=>{
    try{
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});