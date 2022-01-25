 const fetch=require("isomorphic-fetch")

// const fetchUser=async(Email,password)=>{
// const response=await fetch("http://localhost:3000/api/user/login",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({Email,password})
// })
// const result=await response.json()
// console.log(result)
// }

// fetchUser("Emails@gmail.com","password")

// const Book=require("./model/book")

// const createbook=async()=>{
// const book=await new Book({
//     image_link:"http://localhost:3000/css/assets/slack.svg",
//     book_link:"http://localhost:3000/css/assets/slack.svg",
//     download_link:"http://localhost:3000/css/assets/slack.svg",
//     book_name:"Queen of love",
//     book_description:"my first video uploaded",
//     price:20
// })
// const result=await book.save()
// console.log(result)
// }

// createbook()



const fetchBooks=async(token)=>{
const response=await fetch("http://localhost:3000/api/admin/verfy/token",{
    method:"POST",
    headers:{"content-type":"application/json"},
  body:JSON.stringify({token})
})
const result=await response.json()
console.log(result)
}

fetchBooks("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWVlZDcwMDZiODBhYjY3YzVkYWFkNGIiLCJpYXQiOjE2NDMwNDQwMjl9.tOlRZfir7Yj9MT6eFKbWOmT3rTEXWEo05QLWoIRWSig")

// const Admin=require("./admin/model/user")

// const createnewUser=async(Email,password)=>{
//  const admin=await new Admin({
//      Email,
//      password
//  })
//  const result=await admin.save()
//  console.log(result)
// }

// createnewUser("email@gmail.com","$2b$10$elK/VGErV5kbYAzPI3xLRelVHiher7Rl9lKavc7GA.mG2Lf8ZW38.")

// const hashPassword=require("./admin/hash/hashPassword")

// const hash=async()=>{
//     const result=await hashPassword("password")
// console.log(result)
// }
// hash()