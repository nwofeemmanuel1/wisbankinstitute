 const databaseUrl=process.env.databaseUrl
// const databaseUrl="mongodb://localhost:27017/wisbankInstitute"
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

password:{
    type:String,
    required:true,
    minlength:7
}
})

const User=mongoose.model("admin",registerSchema)
module.exports=User