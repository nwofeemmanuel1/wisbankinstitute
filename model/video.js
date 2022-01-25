const mongoose=require("mongoose")
const databaseUrl=process.env.databaseUrl

mongoose.connect(databaseUrl)
.then(()=>console.log("connected to books database"))
.catch(err=>console.log(err.message))

const videoSchema=new mongoose.Schema({
   image_link:{
        type:String,
        required:true,
        maxlength:1000
    },
    video_link:{
    type:String,
    required:true,
    max:1000
    },
    download_link:{
     type:String,
     required:true,
     maxlength:1000
    },

  video_name:{
type:String,
required:true,
maxlength:1000
    },
  video_description:{
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
const Video=mongoose.model("video",videoSchema)
module.exports=Video

