const express=require("express")
const Router=express.Router()
const User=require("../model/user")
const BookSale=require("../model/bookSale")
const Book=require("../model/book")
const validateSaleBook=require("../validation/validateAdminSaleBook")
const PendingBookSale=require("../model/pendingBookSale")

Router.post("/",async(req,res)=>{
  //Remember to include the pending book here
  console.log(req.body)
const isvalid=validateSaleBook(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})


try{
const user=await User.findById(req.body.user)
if(!user)return res.status(404).json({error:true,errMessage:"User was not found please login or register to buy book"})
const book=await Book.findById(req.body.book)
if(!book)return res.status(404).json({error:true,errMesage:"OOps seems this book no longer exist please contact webmaster"})

await PendingBookSale.findByIdAndDelete(req.body.pendingBook)

const bookSale=await new BookSale({
    book:req.body.book,
    user:req.body.user
})

// await user.save()
await bookSale.save()
res.status(200).json({error:false,message:"Success you bought a book please go to database to access"})
}catch(err){
    res.status(400).json({error:true,errMessage:err.message})
}

})
module.exports=Router
