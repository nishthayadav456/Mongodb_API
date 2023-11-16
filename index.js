const express=require('express');
const app=express();
app.use(express.json())
const cors=require("cors");
const categoryRouting=require('./Routing/categoryRouting')
const connection=require("./Routing/config")

app.use(cors({
    origin:"*"
}))
app.use("/api",categoryRouting)
app.listen(4002,async()=>{
    try{
        await connection()
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});