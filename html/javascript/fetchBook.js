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

   let handlePurchase=(button,id)=>{
    //   button.innerHTML="proccessing..."
     checkLogin("token",`/shop-book.html?${id}`,id)
    //  window.location.href=`/shop-video.html?${video._id}`
    }

document.addEventListener("DOMContentLoaded",async()=>{
    try{

        const response=await fetch("/api/books/list")
        const result=await response.json()
        // console.log(result)
        if(result.error ==true)return document.querySelector(".load").innerHTML=`<p style="color:red; "> ${result.errMessage}</p>`
        document.querySelector(".loading").style.display="none"
        result.message.forEach(book => {
           console.log(book)
           var div=document.createElement("div")
           var image=document.createElement("img")
           var pricediv=document.createElement("div")
           var button=document.createElement("button")
           div.className=book._id
           image.src=book.image_link;
           pricediv.className="price";
           pricediv.innerHTML=`₦${book.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}`
           button.innerHTML="Buy book"
           button.id=`"${book._id}"`
           button.onclick=()=>handlePurchase(button,book._id)
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
        document.querySelector(".load").innerHTML=`<p style="color:red; "> ${err.message}</p>`

    }
})