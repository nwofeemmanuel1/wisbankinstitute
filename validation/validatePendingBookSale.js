const Joi=require("joi")
const validatePendingBookSale=(req)=>{

    const schema=Joi.object({
    book:Joi.string().required().max(1000),
    user:Joi.string().required().max(1000),
    name_used_for_payment:Joi.string().required().max(1000),
    payment_date:Joi.string().required().max(11),
    payment_time:Joi.string().required().max(10),
    phone_number:Joi.number().required(),
    // evidence_of_payment:Joi.string().required().max(1500)
    })

  const result=  schema.validate({book:req.book, user:req.user,name_used_for_payment:req.name_used_for_payment,
    payment_date:req.payment_date,payment_time:req.payment_time,phone_number:req.phone_number,
    // evidence_of_payment:req.evidence_of_payment
})
  if(result.error)return result.error.message
  return true
}
module.exports=validatePendingBookSale