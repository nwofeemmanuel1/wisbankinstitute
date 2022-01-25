 const express=require("express")
 const Router=express.Router()
 const verifyToken=require("../token/validateToken")
 const upload=require("./multer")
 const validatePendingVideoSale=require("../validation/validatePendingVideoSale")
const PendingVideoSale=require("../model/pendingVideoSale")
const cloudinary = require('./cloudinary')
const fs = require('fs');


Router.post("/",upload.any("image"),verifyToken, async(req,res)=>{
    // console.log(req.body)
    const isvalid=validatePendingVideoSale(req.body)
    if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})

try{

    const uploader = async (path) => await cloudinary.uploads(path, 'Images');

    let urls ;
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path)
      urls=newPath
      fs.unlinkSync(path)
    }
    console.log(urls)
    const pendingVideoSale=await new PendingVideoSale({
            video:req.body.video,
            user:req.body.user,
            name_used_for_payment: req.body.name_used_for_payment,
            payment_date:req.body.payment_date,
            payment_time:req.body.payment_time,
            phone_number:req.body.phoneNumber,
            evidence_of_payment:urls.url
        })
        
        const videoSale=await pendingVideoSale.save()
        res.status(200).json({error:false,message:"success you bought a video you can see this book on pending book order however we will notify you when your payment is verified so you can access and download book anytime anywhere with unlimited downloads"})
        
}catch(err){
    console.log(`multer error = ${err}`)
    res.status(400).json({error:true,errMessage:err.message})
}



})
module.exports=Router






Router.post("/list",verifyToken, async(req,res)=>{
    if(!req.body.user||req.body.user.length>=100)return res.status(403).json({error:true,errMessage:"a valid user id is required"})
    
    try {
        const pendingVideoSale=await PendingVideoSale.find({user:req.body.user})
        .populate("video")
    
        if(pendingVideoSale.length <=0)return res.status(404).json({error:true,errMessage:"You have no pending video order at the moment"})
        res.status(200).json({error:false,message:pendingVideoSale})
    } catch (error) {
        res.status(400).json({error:true,errMessage:error.message})
    }
    })
    module.exports=Router
