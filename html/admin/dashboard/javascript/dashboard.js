
document.querySelector(".harmburgericon").onclick=(event)=>{
    // event.target.className="sidenav"
    if( document.querySelector(".navlinks")){
        document.querySelector(".navlinksclose").className="navlinksclosed"
         document.querySelector(".navlinks").className="nonavlinks"
    }
   document.querySelector(".navlinksclosed").className="navlinksclose"
    document.querySelector(".nonavlinks").className="navlinks"

    document.querySelector(".navlinksclose").onclick=(e)=>{
        document.querySelector(".navlinksclose").className="navlinksclosed"
         document.querySelector(".navlinks").className="nonavlinks"

         if(document.querySelector("#drop")){
            document.querySelector("#drop").className="nodrop"
                document.querySelector("#drop").id="droped"
}

if(document.querySelector("#drop2")){
    document.querySelector("#drop2").className="nodrop"
    document.querySelector("#drop2").id="droped2"
}

    }
}


    if(document.querySelector(".navlinksclose")){
       
        document.querySelector(".navlinksclose").onclick=(event)=>alert("clicked")
                //  event.target.className="navlinksclosed"
                //  document.querySelector(".navlinks").className="nonavlinks"
            // document.querySelector(".navlinks").className="nonavlinks"
            // document.querySelector(".navlinksclose").style.display="none"
            // // event.target.className="navlinksclosed"
            // }

    }


document.querySelectorAll(".dropdown")[0].onclick=()=>{
    if(document.querySelector("#drop")){
    document.querySelector("#drop").className="nodrop"
        document.querySelector("#drop").id="droped"
    }else{
        document.querySelector("#droped").className="drop"
        document.querySelector("#droped").id="drop" 
    }
}

document.querySelectorAll(".dropdown")[1].onclick=()=>{
    // alert("clicked")
    if(document.querySelector("#drop2")){
        document.querySelector("#drop2").className="nodrop"
        document.querySelector("#drop2").id="droped2"
    }else{
        document.querySelector("#droped2").className="drop"
        document.querySelector("#droped2").id="drop2"
    }

}


document.querySelector(".usericon").onclick=()=>{
    if(document.querySelector("#hideme").className == "hideme"){
        document.querySelector("#hideme").className="me" 
    }else{
        document.querySelector("#hideme").className="hideme" 
    }

}


document.querySelector("#logout").onclick=()=>{
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

     window.location.href="login.html"
}