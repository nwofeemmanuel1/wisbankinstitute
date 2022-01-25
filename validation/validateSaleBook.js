const Joi=require("joi")

const validateSaleBook=(req)=>{
const schema=Joi.object({
book:Joi.string().required().max(1000),
user:Joi.string().required().max(1000),
//  pendingBook:Joi.string().required().max(1000)
})
const result=schema.validate({book:req.book,user:req.user})
if(result.error)return result.error.message;
return true
}
module.exports=validateSaleBook


