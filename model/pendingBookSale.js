const mongoose=require("mongoose")
const databaseUrl=process.env.databaseUrl
require("./book")
require("./user")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to pendingBooksale database"))
.catch(err=>console.log(err.message))

const pendingBookSaleSchema=new mongoose.Schema({

    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
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
 max:11
  },

  payment_time:{
      type:String,
      required:true,
      max:10
  },
  phone_number:{
    type:String,
    required:true,
    
  },

  evidence_of_payment:{
      type:String,
      required:true,
      maxlength:1500
  }

})
const PendingBookSale=mongoose.model("PendingBookSale",pendingBookSaleSchema)
module.exports=PendingBookSale