const getCookie=(cname)=>{
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

   let handleShowVideo=(imageurl)=>{
    //   button.innerHTML="proccessing..."
    //  checkLogin("token",`/shop-video.html?${id}`,id)
    //  window.location.href=`/shop-video.html?${video._id}`
    }

document.addEventListener("DOMContentLoaded",async()=>{
    try{
   const token=getCookie("token")
   const user=getCookie("identity")
        const response=await fetch("/api/video/sale/list ",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({token,user})
        })
        const result=await response.json()
      console.log(result)
        if(result.error ==true)return document.querySelector(".load").innerHTML=`<p style="color:red; "> ${result.errMessage}</p>`
        document.querySelector(".loading").style.display="none"
        result.message.forEach(item => {
           console.log(item)
           var div=document.createElement("div")
           var image=document.createElement("img")
           var pricediv=document.createElement("div")
           var button=document.createElement("button")
           div.className=item._id
           image.src=item.video.image_link;
           pricediv.className="price";
           pricediv.innerHTML=`₦${item.video.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}`
           button.innerHTML="Watch/Download Now"
           button.id=`"${item._id}"`
           button.onclick=()=>handleShowVideo()
           div.append(image,pricediv,button)
           document.querySelector("main").append(div)
        //    <!-- <div>
        //    <img src="css/assets/images (4).jpeg" alt="">
        //    <div class="price">$20</div>
        //    <button>Add to cart</button>
        //        </div>
           
           
        //        <div>
           
        //        </div> -->
       });

    }catch (err){
        document.querySelector(".load").innerHTML=err.message

    }
})