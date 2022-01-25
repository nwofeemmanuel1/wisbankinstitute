const express=require("express")
const Router=express.Router()
const validateUser=require("../validation/validateUser")
const genToken=require("../token/genToken")
const hashPassword=require("../hash/hashpassword")
const User=require("../model/user")

Router.post("/",async(req,res)=>{
 const isvalid= validateUser(req.body)
  if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
  
  try{
    const user=  await User.findOne({Email:req.body.Email})
    if(user)return res.status(400).json({error:true,errMessage:"User already exist please login"})

   const password= await hashPassword(req.body.password)

  const newUser=  await new User({
        Email:req.body.Email,
        phoneNumber:req.body.phoneNumber,
        country:req.body.country,
        balance:0,
        password:password
    })

   const result= await newUser.save()
 const token= genToken(result._id)
res.status(200).json({error:false,message:{Email:result.Email,id:result._id},token})
  }catch(err){
      return res.status(400).json({error:true,errMessage:err.message})
  }


})


module.exports=Router