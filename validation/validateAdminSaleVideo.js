const Joi=require("joi")

const validateAdminSaleVideo=(req)=>{
const schema=Joi.object({
video:Joi.string().required().max(1000),
user:Joi.string().required().max(1000),
 pendingVideo:Joi.string().required().max(1000)
})
const result=schema.validate({video:req.video,user:req.user,pendingVideo:req.pendingVideo})
if(result.error)return result.error.message;
return true
}
module.exports=validateAdminSaleVideo