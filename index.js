const express=require('express');
const app=express();
const cors=require("cors");

const categoryRouting=require('./Routing/categoryRouting')
const connection=require("./Routing/config")

// app.use('express')
app.use(cors({
    origin:"*"
}))

app.use("/api",categoryRouting)
app.listen(4000,async()=>{
    try{
        await connection()
        console.log('server is running in port 4000')
    }
    catch(err){
        console.log('error found')
    }
});