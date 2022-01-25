const databaseUrl=process.env.databaseUrl
const mongoose=require("mongoose")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to register database"))
.catch((err)=>console.log(err.message))

const registerSchema=new mongoose.Schema({
Email:{
    type:String,
    required:true,
    unique:true,
    maxlength:1000
},
phoneNumber:{
    type:String,
    required:true,
   maxlength:1000
},

country:{
    type:String,
    required:true,
    maxlength:500
},
balance:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true,
    minlength:7
}
})

const User=mongoose.model("user",registerSchema)
module.exports=User