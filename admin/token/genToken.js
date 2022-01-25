const jwt=require("jsonwebtoken")

const genToken=(userId)=>{
const token=jwt.sign({userId},process.env.adminTokenKey)
return token
}

module.exports=genToken