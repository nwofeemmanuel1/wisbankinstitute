
var borderColor="2px solid red"


document.querySelector("#upload").onclick=async()=>{
   const videoName= document.querySelector("#videoName")
   const description=document.querySelector("#description")
   const price=document.querySelector("#price")
   const thumbnail=document.querySelector("#thumbnail")
   const video=document.querySelector("#video")

   if(!videoName.value)return videoName.style.border=borderColor
   if(!description.value)return description.style.border=borderColor
   if(!price.value)return price.style.border=borderColor
   if(!thumbnail.value)return thumbnail.style.border=borderColor
   if(!video.value)return video.style.border=borderColor

   const formdata=new FormData()
   
   formdata.append("name",videoName.value)
   formdata.append("videoDescription",description.value)
   formdata.append("price",price.value)
   formdata.append("thumbnail",thumbnail.files[0])
   formdata.append("video",video.files[0])

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
    url:"/api/admin/upload/video",
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
