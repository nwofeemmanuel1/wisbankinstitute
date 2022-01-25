const express=require("express")
const Router=express.Router()
const pendingBookSale=require("../model/pendingBookSale")
// const pendingVideoSale=require("../model/pendingVideoSale")

Router.post("/",async(req,res)=>{
    try{
const pendingBook=await pendingBookSale.find()
.populate("book")
.populate("user")

if(pendingBook.length <=0)return res.status(404).json({error:true,errMessage:"OOPS you have no pending book order to verify"})
res.status(200).json({error:false,message:pendingBook})
    }catch(err){
        
    }

})
module.exports=Router
