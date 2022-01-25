document.querySelector(".harmburgerContainer").onclick=()=>{
      if( document.querySelector(".navclose"))return document.querySelector(".navclose").className="navopen"
      if(document.querySelector(".navopen"))return     document.querySelector(".navopen").className="navclose"

   
}

document.querySelector(".cancel").onclick=()=>{
    document.querySelector(".navopen").className="navclose"
}

