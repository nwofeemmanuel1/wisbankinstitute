const express=require("express")
const Router=express.Router()
const Video=require("../model/video")
Router.get("/",async(req,res)=>{
const video=await Video.find()
.select("-video_link -download_link ")
.sort()
if(video.length <=0)return res.status(404).json({error:true,errMessage:"OOPS no video is available for sale at the moment"})
res.status(200).json({error:false,message:video})
})





Router.post("/single",async(req,res)=>{
    if(!req.body.id ||req.body.id >=1000)return res.status(403).json({error:true,errMessage:"forbidden request"})
    try{
const video=await Video.findById(req.body.id)
.select("-video_link -download_link ")
.sort()
// console.log(video)
if(!video)return res.status(404).json({error:true,errMessage:"Hmm seems the video has been deleted"})
 res.status(200).json({error:false,message:video})
    }catch(err){
        return res.status(400).json({error:true,errMessage:err.message})
    }
})


module.exports=Router