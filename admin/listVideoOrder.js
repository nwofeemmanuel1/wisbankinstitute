const express=require("express")
const Router=express.Router()
const pendingVideoSale=require("../model/pendingVideoSale")
// const pendingVideoSale=require("../model/pendingVideoSale")

Router.post("/",async(req,res)=>{
    try{
const pendingVideo=await pendingVideoSale.find()
.populate("video")
.populate("user")

if(pendingVideo.length <=0)return res.status(404).json({error:true,errMessage:"OOPS you have no pending video order to verify"})
res.status(200).json({error:false,message:pendingVideo})
    }catch(err){
        
    }

})
module.exports=Router
