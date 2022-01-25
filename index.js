const express=require("express")
const app=express()
const cors=require("cors")

const helmet=require("helmet")
app.use(express.json())
require("dotenv").config()
app.use(cors())




app.use("/",express.static("html"))
const register=require("./api/register")
app.use("/api/user/register",register)
const login=require("./api/login")
app.use("/api/user/login",login)
const books=require("./api/listBooks")
app.use("/api/books/list",books)
const videos=require("./api/listVideos")
app.use("/api/videos/list",videos)

const createPendingBookSale=require("./api/createPendingBookSale")
app.use("/api/create/pending/book/sale",createPendingBookSale)
const createPendingVideoSale=require("./api/createPendingVideoSale")
app.use("/api/create/pending/video/sale",createPendingVideoSale)

const saleBook=require("./api/saleBook")
app.use("/api/book/sale",saleBook)
const saleVideo=require("./api/saleVideo")
app.use("/api/video/sale",saleVideo)


const adminSaleBook=require("./admin/adminVerifyBookOrder")
app.use("/api/admin/verify/BookOrder",adminSaleBook)
const adminVerifyBookOrder=require("./admin/listBookOrder")
app.use("/api/admin/listBookOrder",adminVerifyBookOrder)
const listVideoOrder=require("./admin/listVideoOrder")
app.use("/api/admin/listVideoOrder",listVideoOrder)

const adminVerifyVideoOrder=require("./admin/adminVerifyVideoOrder")
app.use("/api/admin/verify/videoOrder",adminVerifyVideoOrder)

const uploadBook=require("./admin/uploadBook")
app.use("/api/admin/upload/book",uploadBook)

const uploadVideo=require("./admin/uploadVideo")
app.use("/api/admin/upload/video",uploadVideo)


const adminLogin=require("./admin/login")
app.use("/api/admin/login",adminLogin)

const adminVerifyToken=require("./admin/validateToken")
app.use("/api/admin/verfy/token",adminVerifyToken)
// const uploadVideo=require("./admin/uploadVideo")
// app.use("/api/admin/upload/video",uploadVideo)

// app.post("/api/axios",async(req,res)=>{
// console.log(req)
// res.json({error:false,message:"Sent Something"})
// })
const port=process.env.PORT||3000
app.listen(port,()=>console.log(`server is running on port ${port}`))