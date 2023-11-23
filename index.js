const express=require('express');
const app=express();
const cors=require("cors");
const stripe=require("stripe")("sk_test_51OFItISCdgFzkvVr8YvTQo80pt3yeCOdoAXjBsgm3i7L4RDhkc6aSrujaJd3fK3XZ4EPaqZfeSCWWAK9yYJlSAfK00g8jNSDIE")
const categoryRouting=require('./Routing/categoryRouting')
const connection=require("./Routing/config");
const userRoutes = require('./Router/catRouting');
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/api",categoryRouting)
app.use("/api",userRoutes)

//payment API
app.post("/check/checkoutdata",async(req,res)=>{
const {products}=req.body
console.log(products)
const lineItems =products.map((product)=>({
    price_data:{
        currency:"inr",
        product_data:{
            
            name:product.heading,

        },
        unit_amount:product.price * 100
    },
    quantity:product.quantity
   }))
   const session =await stripe.checkout.sessions.create({
    payment_method_types:["card"],
     line_items:lineItems,
    mode:"payment",
    success_url:"https://timely-sunburst-2b7ddc.netlify.app/",
    cancel_url:"http://localhost:3000/cancel",


})
res.json({id:session.id})
})
app.listen(4000,async()=>{
    try{
        await connection()
        console.log('server is running in port 4000')
    }
    catch(err){
        console.log('error found')
    }
});