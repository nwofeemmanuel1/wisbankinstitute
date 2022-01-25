// document.querySelector("#next").onclick=()=>{
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

const getToken=(cname)=>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
           return c.substring(name.length, c.length)
            // console.log(c.substring(name.length, c.length))
            // return checkmail("email") ;
        }
    }
    
    return window.location.replace("/login.html");;
  }

var borderColor="2px solid red"

let book;


document.querySelector("#next").onclick=async()=>{
 

   const payerName= document.querySelector("#payerName")
   const date=document.querySelector("#date")
   const time=document.querySelector("#time")
   const phoneNumber=document.querySelector("#phoneNumber")
   const screenshot=document.querySelector("#screenshot")
   const token=getToken("token")
   const params = new URLSearchParams(window.location.search)
   for (const param of params) {
       book=param[0]
   }

   const user=getToken("identity")
//    alert(user)
   if(!payerName.value)return payerName.style.border=borderColor
   if(!date.value)return date.style.border=borderColor
   if(!time.value)return time.style.border=borderColor
   if(!phoneNumber.value)return phoneNumber.style.border=borderColor
   if(!screenshot.value)return screenshot.style.border=borderColor
//    alert(token)

   const formdata=new FormData()
   formdata.append("book",book)
   formdata.append("user",user)
   formdata.append("image",screenshot.files[0])
   formdata.append("name_used_for_payment",payerName.value)
   formdata.append("payment_date",date.value)
   formdata.append("payment_time",time.value)
   formdata.append("phone_number",phoneNumber.value)
   formdata.append("token",token)

try{
    document.querySelector("#next").innerHTML="proccessing..."
const response=await fetch("/api/create/pending/book/sale",{
    method:"POST",
    body:formdata
})
const result=await response.json()
console.log(result)
if(result.error==true){
    document.querySelector(".errMessage").innerHTML=result.errMessage
    document.querySelector("#next").innerHTML="Try again"
    return
}
document.querySelector("#next").innerHTML="Success"
}catch(err){
    console.log(err.message)
    if(err.message="Unexpected token < in JSON at position 0"){
        document.querySelector(".errMessage").innerHTML="Unsopported file format screenshot must be an image"
        document.querySelector("#next").innerHTML="Try again"
        return
    }
    document.querySelector(".errMessage").innerHTML=err.message
     document.querySelector("#next").innerHTML="Try again"
}


}

document.querySelectorAll("input").forEach(inp=>inp.oninput=()=>inp.style.border="green")
