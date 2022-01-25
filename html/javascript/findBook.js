


let id;
document.addEventListener("DOMContentLoaded",()=>{
    
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        id=param[0]
    }
   if(!id)return window.location.href=`/bookStore.html`
   findVideo(id)


})


const findVideo=async(id)=>{
    try{
    const response=await fetch("/api/books/list/single",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({id})
})
const result=await response.json()
console.log(result)
 if(result.error ==true)return window.location.href=`/bookStore.html`

var hr= document.createElement("div")
hr.className="hr"
var div= document.createElement("div")
var image=document.createElement("img")
var textContainer=document.createElement("div")
var h3=document.createElement("h3")
var p=document.createElement("p")
var pricetext=document.createElement("p")
image.src=result.message.image_link
textContainer.className="textContainer"
h3.innerHTML=result.message.book_name
// p.className="description"
p.innerHTML=result.message.book_description
pricetext.innerHTML=`Total Price: ₦${result.message.price}`
pricetext.className="pricetext"
textContainer.append(h3,p,pricetext)
div.append(image,textContainer)
document.querySelector(".item").append(hr,div)

var paytext=document.createElement("p")
paytext.innerHTML=`To buy this pay  ₦${result.message.price} to the account details below ,take a screenshot of payment reciept or any evidence that you made payment and click purchase button.<p style="color:red"> After making payment the customer support will need to verify your payment. then you bought a video.you can see all this videos from your <a href="dashboard.html"> dashboard</a> <p> <p>Bank:<p> <p>Account Name:<p> <p>Account Number:<p>`
document.querySelector(".payText").append(paytext)
    }catch(err){
        window.location.href=`/bookStore.html`
    }
// <!-- <hr> 
// <div>
// <img src="css/assets/images (4).jpeg" alt="">

// <div class="textContainer">
// <h3 >Essential Biology</h3>
// <p class="description">THe simpler way to buy essential bla bla bla bla bla bla bla</p>
// <p class="pricetext">Price:₦200</p>
// </div>


}