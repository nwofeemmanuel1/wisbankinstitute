const express=require("express")
const Router=express.Router()
const User=require("../model/user")
const VideoSale=require("../model/videoSale")
const Video=require("../model/video")
const validateSaleVideo=require("../validation/validateAdminSaleVideo")
const PendingVideoSale=require("../model/pendingVideoSale")

Router.post("/",async(req,res)=>{
  //Remember to include the pending book here
  console.log(req.body)
const isvalid=validateSaleVideo(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})


try{
const user=await User.findById(req.body.user)
if(!user)return res.status(404).json({error:true,errMessage:"User was not found please login or register to buy book"})
const video=await Video.findById(req.body.video)
if(!video)return res.status(404).json({error:true,errMessage:"OOps seems this video no longer exist please contact webmaster"})

await PendingVideoSale.findByIdAndDelete(req.body.pendingVideo)

const videoSale=await new VideoSale({
    video:req.body.video,
    user:req.body.user
})
// await user.save()
await videoSale.save()  
res.status(200).json({error:false,message:"Success You verified this video and the user will now access their video from their dashboard.please send them an email or give them a phone call"})
}catch(err){
    console.log(err)
    res.status(400).json({error:true,errMessage:err.message})
}

})
module.exports=Router
