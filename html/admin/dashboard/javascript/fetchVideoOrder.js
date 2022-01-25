const checkLogin=(cname,locate,videoid)=>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            c.substring(name.length, c.length)
           
            window.location.href=`/shop-book.html?${videoid}`
            return
        }
    }
    
    return window.location.href=`/login.html?${locate}`;

}

   let handlePurchase=async(button,user,video,pendingVideo)=>{
    //  checkLogin("token",`/shop-book.html?${id}`,id)
   console.log(button,user,video,pendingVideo)
   button.innerHTML="Proccessing..."
try{
   const response=await fetch("/api/admin/verify/videoOrder",{
    method:"POST",
    headers:{"content-type":"application/json"},
  body:JSON.stringify({user,video,pendingVideo})
})
const result=await response.json()
console.log(result)
if(result.error==true)return console.log(result.errMessage)
 button.innerHTML="Success"

}catch(err){
    // alert(err.message)
    button.innerHTML="try again"
    console.log(err)
}
    }

document.addEventListener("DOMContentLoaded",async()=>{
    try{

        const response=await fetch("/api/admin/listVideoOrder",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({})
        })
        const result=await response.json()
        console.log(result)

        if(result.error ==true)return document.querySelector(".load").innerHTML=`<p style="color:red; "> ${result.errMessage}</p>`
        document.querySelector(".loading").style.display="none"
        result.message.forEach(item => {
         console.log(item.video)
           var div=document.createElement("div")
           var image=document.createElement("img")
           var pricediv=document.createElement("div")
           var button=document.createElement("button")
           div.className="PendingBookContainer";
           div.id=item.video._id
           image.src=item.video.image_link;
           image.id=item.video._id
           image.className="bookImage"
           pricediv.className="price";
           pricediv.innerHTML=`₦${item.video.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}`
          let buttonDiv=  document.createElement("div")
          buttonDiv.className="button"
          button.innerHTML="Verify"
          buttonDiv.append(button)

          let bE=document.createElement("p")
          let bp=document.createElement("p")
          let bN=document.createElement("p")
          let bD=document.createElement("p")
          let BT=document.createElement("p")
          let BL=document.createElement("div")
          bE.innerHTML=`Buyer Email: ${item.user.Email}`
          bE.id=item.user._id
          bE.className="userEmail"
          bp.innerHTML=`Phone Number: ${item.phone_number}`
          bN.innerHTML=`Payer Name: ${item.name_used_for_payment}`
          bD.innerHTML=`Date of Payment: ${item.payment_date}`
          BT.innerHTML=`Time of Payment: ${item.payment_time}`
        //   BL.innerHTML=`Payment evidence: ${item.evidence_of_payment}`
          BL.innerHTML=`<a href="${item.evidence_of_payment}" target="_blank">View Evdence of payment </a>`
        button.id=`"${item.video._id}"`
        button.onclick=()=>handlePurchase(button,item.user._id,item.video._id,item._id)
    
           div.append(image,pricediv, bE,bp,bN,bD,BT,BL,buttonDiv)
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
        document.querySelector(".load").innerHTML=`<p style="color:red; "> ${err.message}</p>`
    }
})