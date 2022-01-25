const express=require("express")
const Router=express.Router()
const verifyToken=require("../token/validateToken")
const validatePendingBookSale=require("../validation/validatePendingBookSale")
const upload=require("./multer")
const PendingBookSale=require("../model/pendingBookSale")
const cloudinary = require('./cloudinary')
const fs = require('fs');

Router.post("/",upload.any("image"),verifyToken, async(req,res)=>{
const isvalid=validatePendingBookSale(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
// console.log(req.files)

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

// console.log(urls.url)

// res.status(200).json({
//     error:false,
//   message: 'images uploaded successfully',
//   data: urls
// })

const pendingBookSale=await new PendingBookSale({
    book:req.body.book,
    user:req.body.user,
    name_used_for_payment: req.body.name_used_for_payment,
    payment_date:req.body.payment_date,
    payment_time:req.body.payment_time,
    phone_number:req.body.phone_number,
    evidence_of_payment:urls.url
})

const bookSale=await pendingBookSale.save()
res.status(200).json({error:false,errMessage:"success you bought a video you can see this video on pending video order however we will notify you when your payment is verified so you can watch / download video"})


}catch(err){
    console.log(err)
    res.status(400).json({error:true,errMessage:err.message})
}

// try{

// const pendingBookSale=await new PendingBookSale({
//     book:req.body.book,
//     user:req.body.user,
//     name_used_for_payment: req.body.name_used_for_payment,
//     payment_date:req.body.payment_date,
//     payment_time:req.body.payment_time,
//     phone_number:req.body.phone_number,
//     evidence_of_payment:"screenshot link"
// })

// const bookSale=await pendingBookSale.save()
// res.status(200).json({error:false,errMessage:"success you bought a video you can see this video on pending video order however we will notify you when your payment is verified so you can watch / download video"})

// }catch(err){
//     res.status(400).json({error:true,errMessage:err.message})
// }




})






Router.post("/list",verifyToken, async(req,res)=>{
if(!req.body.user||req.body.user.length>=100)return res.status(403).json({error:true,errMessage:"a valid user id is required"})

try {
    const pendingBookSale=await PendingBookSale.find({user:req.body.user})
    .populate("book")

    if(pendingBookSale.length <=0)return res.status(404).json({error:true,errMessage:"You have no pending book order at the moment"})
    res.status(200).json({error:false,message:pendingBookSale})
} catch (error) {
    res.status(400).json({error:true,errMessage:error.message})
}
})
module.exports=Router