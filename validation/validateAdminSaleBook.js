const Joi=require("joi")

const validateAdminSaleBook=(req)=>{
const schema=Joi.object({
book:Joi.string().required().max(1000),
user:Joi.string().required().max(1000),
 pendingBook:Joi.string().required().max(1000)
})
const result=schema.validate({book:req.book,user:req.user,pendingBook:req.pendingBook})
if(result.error)return result.error.message;
return true
}
module.exports=validateAdminSaleBook