const express=require("express")
const Router=express.Router()
const Books=require("../model/book")
Router.get("/",async(req,res)=>{
const books=await Books.find()
.select("-book_link  -download_link")
.sort()
if(books.length <=0)return res.status(404).json({error:true,errMessage:"OOPS no book is available for sale at the moment"})
res.status(200).json({error:false,message:books})
})




Router.post("/single",async(req,res)=>{
    if(!req.body.id ||req.body.id >=1000)return res.status(403).json({error:true,errMessage:"forbidden request"})
    const book=await Books.findById(req.body.id)
    .select("-book_link  -download_link")
    .sort()
    if(!book)return res.status(404).json({error:true,errMessage:"Hmm seems this book has been deleted"})
    res.status(200).json({error:false,message:book})
    })
    
module.exports=Router