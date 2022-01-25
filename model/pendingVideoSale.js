const mongoose=require("mongoose")
const databaseUrl=process.env.databaseUrl
require("./video")
require("./user")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to pendingVideoSale database"))
.catch(err=>console.log(err.message))

const pendingVideoSaleSchema=new mongoose.Schema({

    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video",
        required:true
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
    },
  name_used_for_payment:{
      type:String,
      required:true,
      max:1000
  },
  payment_date:{
    type:String,
    required:true,
 max:12
  },

  payment_time:{
      type:String,
      required:true,
      max:6
  },

  evidence_of_payment:{
      type:String,
      required:true
  }

})
const PendingVideoSale=mongoose.model("pendingVideoSale",pendingVideoSaleSchema)
module.exports=PendingVideoSale