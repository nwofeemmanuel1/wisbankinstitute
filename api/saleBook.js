const express=require("express")
const Router=express.Router()
const User=require("../model/user")
const BookSale=require("../model/bookSale")
const Book=require("../model/book")
const validateSaleBook=require("../validation/validateSaleBook")

const verifyToken=require("../token/validateToken")
Router.post("/",verifyToken,async(req,res)=>{
const isvalid=validateSaleBook(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:err.message})

try{
const user=await User.findById(req.body.user)
if(!user)return res.status(404).json({error:true,errMessage:"User was not found please login or register to buy book"})
const book=await Book.findById(req.body.book)
if(!book)return res.status(404).json({error:true,errMesage:"OOps seems this book no longer exist please contact webmaster"})

if(book.price > user.balance)return res.status(400).json({error:true,errMessage:"insufficient balance please go to dashboard and deposit into your account"})

user.set({
    balance:user.balance-book.price
})
const bookSale=await new BookSale({
    book:req.body.book,
    user:req.body.user
})

await user.save()
await bookSale.save()
res.status(200).json({error:false,message:"Success you bought a book please go to database to access"})
}catch(err){
    res.status(400).json({error:true,errMessage:err.message})
}

})


Router.post("/list",verifyToken,async(req,res)=>{
if(!req.body.user ||req.body.user.length >=1000)return res.status(403).json({error:true,errMessage:"A valid user is required"})
    const user=await User.findById(req.body.user)
if(!user)return res.status(404).json({error:true,errMessage:"An error occured User was not found please login or register to buy book"})

try{
const booksale=await BookSale.find({user:req.body.user})
.populate("book")

if(booksale.length <=0)return res.status(404).json({error:true,errMessage:"You have not bought any book at the moment"})
res.status(200).json({error:false,message:booksale})
}catch(error){
    res.status(400).json({error:true,errMessage:error.message})
}
})


// Router.post("/single",verifyToken,async(req,res)=>{
//     if(!req.body.user ||req.body.user.length >=1000)return res.status(403).json({error:true,errMessage:"A valid user is required"})
//         const user=await User.findById(req.body.user)
//     if(!user)return res.status(404).json({error:true,errMessage:"An error occured User was not found please login or register to buy book"})
    
//     try{
//     const booksale=await BookSale.find({user:req.body.user})
//     .populate("book")
//     .populate("user")
//     if(booksale.length <=0)return res.status(404).json({error:true,errMessage:"You have not bought any book at the moment"})
//     res.status(200).json({error:false,message:booksale})
//     }catch(error){
//         res.status(400).json({error:true,errMessage:error.message})
//     }
//     })

module.exports=Router
