const mongo= require("mongoose")
        const userSchema =mongo.Schema({
            id:"number",
            heading:"string",
            Brand:"string",
            Model:"string",
            image:"string",
            description:"string",
            price:"number",
            category:"string",
            casediameter:"string",
            chargers:"string"
        })
            const storeSchema=mongo.model("AllData",userSchema);
            module.exports={storeSchema}