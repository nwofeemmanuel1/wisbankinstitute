const Joi=require("joi")

const validateUser=(req)=>{
const schema=Joi.object({
Email:Joi.string().email().required().max(1000),
phoneNumber:Joi.string().required().max(1000),
country:Joi.string().required().max(500),
password:Joi.string().required().min(7)
})

const result=schema.validate({Email:req.Email,phoneNumber:req.phoneNumber,country:req.country,password:req.password})
if(result.error)return result.error.message
return true

}

module.exports=validateUser


