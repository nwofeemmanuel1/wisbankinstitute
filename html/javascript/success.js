// document.querySelector("#successImg").style.display="block"


let message;
const params = new URLSearchParams(window.location.search)
      for (const param of params) {
         message=param[0]
      }




     
document.addEventListener("DOMContentLoaded",()=>{

    setTimeout(()=> document.querySelector("#successImg").style.display="block",500)
    setTimeout(()=>{ document.querySelector("#successImg").style.display="none"
document.querySelector("#message").innerHTML=message
document.querySelector("#message").style.color="green"
},2100)

setTimeout(()=>window.location.replace("/dashboard.html"),4600)
})