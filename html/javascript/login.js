

function setCookie(email,id, token) {
  // alert("called")
  console.log(id)
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000);
    let expires = "expires="+ d.toUTCString();
    document.cookie=`email=${email} ; ${expires}`
    document.cookie=`identity=${id} ; ${expires}`
    document.cookie = `token=${token} ; ${expires}`;
    let navigate;
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        navigate=param[0]
    }
    if(navigate)return window.location.replace(navigate)
  window.location.replace("/dashboard.html")
  } 



const loginUser=async(email,password)=>{
 

 try{

 document.querySelector("#login").innerHTML="proccessing..."
  const response= await fetch("/api/user/login",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({Email:email,password})
    })
    const result=await response.json()
    console.log(result)
    if(result.error){
      document.querySelector(".errMessage").innerHTML=result.errMessage
      document.querySelector("#login").innerHTML="try again"
      return
    }
    document.querySelector("#login").innerHTML="success"
     return setCookie(result.message.Email,result.message.id,result.token)

  }catch(err){
    document.querySelector(".errMessage").innerHTML=err.message
    document.querySelector("#login").innerHTML="try again"
  }
}

const registerUser=async(Email,phoneNumber,country,password)=>{
  try{

    document.querySelector("#register").innerHTML="proccessing..."
     const response= await fetch("/api/user/register",{
   method:"POST",
   headers:{"content-type":"application/json"},
   body:JSON.stringify({Email,phoneNumber,country,password})
       })
       const result=await response.json()
       console.log(result)
       if(result.error){
         document.querySelector(".errmessage2").innerHTML=result.errMessage
         document.querySelector("#register").innerHTML="try again"
         return
       }
       document.querySelector("#register").innerHTML="success"
        return setCookie(result.message.Email,result.message.id,result.token)
     }catch(err){
       document.querySelector(".errmessage2").innerHTML=err.message
       document.querySelector("#register").innerHTML="try again"
     }
}
//response gotten

// loginUser("email@gmail.com","password")

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//           c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//           return c.substring(name.length, c.length);
//       }
//   }
//   return "";
// }




document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#login").onclick=()=>{
      event.preventDefault()
    const email=document.querySelector("#email")
    const password=document.querySelector("#password")
    if(!email.value)return document.querySelector(".errMessage").innerHTML="Email is required"
    if(!password.value)return document.querySelector(".errMessage").innerHTML="Password is required"
    if(password.value.length < 8)return document.querySelector(".errMessage").innerHTML="Password must be greater than 8 characters"

    document.querySelector(".errMessage").innerHTML=""

    loginUser(email.value,password.value)
    }






    document.querySelector("#register").onclick=()=>{
      let errorColor="2px solid red"
      event.preventDefault()
     const email= document.querySelector("#registerEmail")
     const phoneNumber=document.querySelector("#registerNumber")
     const country=document.querySelector("select")
     const registerPassword=document.querySelector("#registerPassword")
     if(!email.value)return email.style.border=errorColor
     if(!phoneNumber.value)return phoneNumber.style.border=errorColor;
     if(!country.value)return country.style.border=errorColor;
     if(!registerPassword.value)return registerPassword.style.border=errorColor
     if(registerPassword.value.length <=7){
      registerPassword.style.border=errorColor
      document.querySelector(".errmessage2").innerHTML="Password must be atleast 8 characters long"
      return 
     }
     document.querySelector(".errmessage2").innerHTML=""
     registerUser(email.value,phoneNumber.value,country.value,registerPassword.value)
    }

    document.querySelectorAll("input").forEach(input=>{
      document.querySelector(".errmessage2").innerHTML=""
     input.onkeyup=()=> input.style.border="0.1px solid #fff"
    })
    document.querySelector("select").onchange=()=>document.querySelector("select").style.border="0.1px solid #fff"
})








const signUpButton = document.getElementById("signUp");
const signInButton =document.getElementById("login");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector(".ghost").onclick=()=> container.classList.remove("right-panel-active");

// })

