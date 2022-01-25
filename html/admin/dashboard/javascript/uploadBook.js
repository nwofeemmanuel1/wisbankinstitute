// const fetchUser=async(Email,password)=>{
//     const response=await fetch("http://localhost:3000/api/user/login",{
//         method:"POST",
//         headers:{"content-type":"application/json"},
//         body:JSON.stringify({Email,password})
//     })
//     const result=await response.json()
//     console.log(result)
//     }
    
//     fetchUser("Emails@gmail.com","password")


// console.log(axios)
// axios({
//     method:"post",
//     url:"http://localhost:3000/api/user/login",
//     data:{
//         Email:"Emails@gmail.com",
//         password:"password"
//     },
//     onUploadProgress:(p)=>{
//         console.log(p)
//     }
// }).then(data=>{
//     console.log(data)
// })










// document.querySelector("#purchase").onclick=()=>{
//     document.querySelector(".inputs").style.display="block"
//     document.querySelector("#details").scrollIntoView({behavior:"smooth"})
// }




// const fetchUser=async(Email,password)=>{
//     const response=await fetch("/api/create/pending/book/sale",{
//         method:"POST",
//         headers:{"content-type":"application/json"},
//         body:JSON.stringify({Email,password})
//     })
//     const result=await response.json()
//     console.log(result)
//     }

// alert("upload age")

var borderColor="2px solid red"


document.querySelector("#next").onclick=async()=>{
   const name= document.querySelector("#name")
   const bookDescription=document.querySelector("#bookDescription")
   const price=document.querySelector("#price")
   const bookCover=document.querySelector("#bookCover")
   const book=document.querySelector("#book")

   if(!name.value)return name.style.border=borderColor
   if(!bookDescription.value)return bookDescription.style.border=borderColor
   if(!price.value)return price.style.border=borderColor
   if(!bookCover.value)return bookCover.style.border=borderColor
   if(!book.value)return book.style.border=borderColor

   const formdata=new FormData()
   
   formdata.append("name",name.value)
   formdata.append("bookDescription",bookDescription.value)
   formdata.append("price",price.value)
   formdata.append("bookCover",bookCover.files[0])
   formdata.append("book",book.files[0])
//    book.files[0]
try{
// const response=await fetch("http://localhost:3000/api/create/pending/book/sale",{
//     method:"POST",
//     // headers:{"content-type":"application/json"},
//     body:formdata
// })
// const result=await response.text()
// console.log(result)



axios({
    method:"post",
    url:"/api/admin/upload/book",
    data:formdata,
    onUploadProgress:(p)=>{
        // console.log(p)
        const percentage=Math.floor((p.loaded*100)/p.total)
        console.log(`${percentage}%`)
    }
}).then(data=>{
    console.log(data)
    
})

}catch(err){
    console.log(err.message)
}


}

document.querySelectorAll("input").forEach(inp=>inp.oninput=()=>inp.style.border="green")
