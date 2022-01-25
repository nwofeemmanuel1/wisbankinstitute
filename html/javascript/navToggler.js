

document.querySelector(".navbar-toggler-icon").onclick=()=>{
    if(document.querySelector("#collapsibleNavId").className !="navbar-collapse collapse show")return document.querySelector("#collapsibleNavId").className ="navbar-collapse collapse show"
    document.querySelector("#collapsibleNavId").className="collapse navbar-collapse"
   
}