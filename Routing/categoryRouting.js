const {mobileControler,laptopControler,watchesControler,TelevisionControler,accessoriesControler,homeControler}=require('../Routing/categoryControl')
const categoryRouting=require("express").Router()
categoryRouting.get("/home",homeControler)
categoryRouting.get("/television",TelevisionControler)
categoryRouting.get("/laptop",laptopControler)
categoryRouting.get("/mobile",mobileControler)
categoryRouting.get("/watches",watchesControler )
categoryRouting.get("/accessories",accessoriesControler)

module.exports=categoryRouting