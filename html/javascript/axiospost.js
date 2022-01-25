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



var borderColor="2px solid red"


document.querySelector("#next").onclick=async()=>{
   const payerName= document.querySelector("#payerName")
   const date=document.querySelector("#date")
   const time=document.querySelector("#time")
   const phoneNumber=document.querySelector("#phoneNumber")
   const screenshot=document.querySelector("#screenshot")

//    if(!payerName.value)return payerName.style.border=borderColor
//    if(!date.value)return date.style.border=borderColor
//    if(!time.value)return time.style.border=borderColor
//    if(!phoneNumber.value)return phoneNumber.style.border=borderColor
//    if(!screenshot.value)return screenshot.style.border=borderColor

   const formdata=new FormData()
   formdata.append("image",screenshot.files[0])
   formdata.append("name_used_for_payment",payerName.value)
   formdata.append("payment_date",date.value)
   formdata.append("payment_time",time.value)
   formdata.append("phone_number",phoneNumber.value)

//    screenshot.files[0]
try{
// const response=await fetch("http://localhost:3000/api/create/pending/book/sale",{
//     method:"POST",
//     // headers:{"content-type":"application/json"},
//     body:formdata
// })
// const result=await response.text()
// console.log(result)

var t=1

axios({
    method:"post",
    url:"http://localhost:3000/api/create/pending/book/sale",
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
