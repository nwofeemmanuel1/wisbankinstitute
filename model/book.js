const mongoose=require("mongoose")
 const databaseUrl=process.env.databaseUrl
// const databaseUrl="mongodb://localhost:27017/wisbankInstitute"
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to books database"))
.catch(err=>console.log(err.message))

const bookSchema=new mongoose.Schema({
    image_link:{
        type:String,
        required:true,
        maxlength:2000
    },
    book_link:{
    type:String,
    required:true,
    max:1000
    },
    download_link:{
     type:String,
     required:true,
     maxlength:2000
    },

   book_name:{
type:String,
required:true,
maxlength:1000
    },
  book_description:{
        type:String,
        required:true,
        maxlength:2000
    },
  price:{
type:Number,
required:true,
min:0
  }

})
const Book=mongoose.model("book",bookSchema)
module.exports=Book

