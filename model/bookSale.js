const mongoose=require("mongoose")
const databaseUrl=process.env.databaseUrl
require("./book")
require("./user")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to bookSale database"))
.catch(err=>console.log(err.message))

const bookSaleSchema=new mongoose.Schema({
    book:{
type:mongoose.Schema.Types.ObjectId,
ref:"book",
required:true,
    },
    user:{
   type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
    }
})
const BookSale=mongoose.model("bookSale",bookSaleSchema)
module.exports=BookSale

