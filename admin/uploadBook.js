const express=require("express")
const Router=express.Router()
const verifyToken=require("../token/validateToken")
const upload=require("./uploads/upload")
const cloudinary = require('./uploads/cloudinary')
const fs = require('fs');
const Book=require("../model/book")

Router.post("/",upload.any("bookCover","book"), async(req,res)=>{
console.log(req.files)
console.log(req.body)

try{
const uploader = async (path) => await cloudinary.uploads(path, 'Images');

const urls = []
const files = req.files;
for (const file of files) {
  const { path } = file;
  const newPath = await uploader(path)
  urls.push(newPath)
  fs.unlinkSync(path)
}

console.log(urls)
 for (data of urls)
 if(data.error==true)return res.status(400).json({error:true,errMessage:data.errMessage})

const getImage=()=>{
  for (data of urls)
  if(data.format =='jpeg' || data.format =="jpg" ||data.format||"png")return data.url 

}
const getPdf=()=>{
  for (data of urls)
  if(data.format =='pdf')return data.url
}


const imageLink=getImage()
const bookLink=getPdf()
console.log(bookLink,imageLink)
const book=await new Book({
  image_link:imageLink,
  book_link:bookLink,
  download_link:bookLink,
  book_name:req.body.name,
  book_description:req.body.bookDescription,
  price:req.body.price
})
const result=await book.save()
console.log(result)
res.status(200).json({
    error:false,
  message: 'new book uploaded successfully',

})

}catch(err){
    console.log(err.message)
res.status(400).json({error:true,errMessage:err.message})
}

// const isvalid=validatePendingBookSale(req.body)
// if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
// try{

// const pendingBookSale=await new PendingBookSale({
//     book:req.body.book,
//     user:req.body.user,
//     name_used_for_payment: req.body.name_used_for_payment,
//     payment_date:req.body.payment_date,
//     payment_time:req.body.payment_time,
//     phone_number:req.body.phoneNumber,
//     evidence_of_payment:"screenshot link"
// })

// const bookSale=await pendingBookSale.save()
// res.status(200).json({error:false,errMessage:"success we will notify you when your payment is verified"})

// }catch(err){
//     res.status(400).json({error:true,errMessage:err.message})
// }

})
module.exports=Router