const mongoose=require("mongoose")
const databaseUrl=process.env.databaseUrl
require("./video")
require("./user")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to videoSale database"))
.catch(err=>console.log(err.message))

const videoSaleSchema=new mongoose.Schema({
    video:{
type:mongoose.Schema.Types.ObjectId,
ref:"video",
required:true,
    },
    user:{
   type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
    }
})
const videoSale=mongoose.model("videoSale",videoSaleSchema)
module.exports=videoSale

