




// const loginUser=async(email,password)=>{
 

//  try{

//  document.querySelector("#login").innerHTML="proccessing..."
//   const response= await fetch("/api/login",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({email,password})
//     })
//     const result=await response.json()
//     console.log(result)
//     if(result.error){
//       document.querySelector(".errMessage").innerHTML=result.errMessage
//       document.querySelector("#login").innerHTML="try again"
//     }
//      return setCookie(result.user.email,result.token)
//   }catch(err){
//     // document.querySelector(".errMessage").innerHTML="an error occured please try again"
//     document.querySelector("#login").innerHTML="try again"
//   }
// }

// //response gotten

// // loginUser("email@gmail.com","password")

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




// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector("#login").onclick=()=>{
//       event.preventDefault()
//     const email=document.querySelector("#email")
//     const password=document.querySelector("#password")
//     if(!email.value)return document.querySelector(".errMessage").innerHTML="Email is required"
//     if(!password.value)return document.querySelector(".errMessage").innerHTML="Password is required"
//     if(password.value.length < 8)return document.querySelector(".errMessage").innerHTML="Password must be greater than 8 characters"

//     document.querySelector(".errMessage").innerHTML=""

//     loginUser(email.value,password.value)
//     }
// })








// const signUpButton = document.getElementById("signUp");
// const signInButton =document.getElementById("login");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// // signInButton.addEventListener("click", () => {
// //   container.classList.remove("right-panel-active");
// // });

// document.addEventListener("DOMContentLoaded",()=>{
//   document.querySelector(".ghost").onclick=()=> container.classList.remove("right-panel-active");

// })


function setCookie(email, token) {
  // alert("called")
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000);
    let expires = "expires="+ d.toUTCString();
    document.cookie=`adminMail=${email} ; ${expires}`
    document.cookie = `adminToken=${token} ; ${expires}`;
    window.location.href="/admin/dashboard/dashboard.html"
    
  } 






const loginAdmin=async(Email,password)=>{
try {
 const response=await fetch("/api/admin/login",{
   method:"POST",
   headers:{"content-type":"application/json"},
   body:JSON.stringify({Email,password})
 }) 
const result= await response.json()
console.log(result)
if(result.error==true){
  document.querySelector("#submit").innerHTML="Try again"
  document.querySelector(".errMessage").innerHTML=result.errMessage
  return
}

document.querySelector("#submit").innerHTML="Success"
setCookie(result.message.Email, result.token)

} catch (error) {
  console.log(error)
}

  }



document.querySelector("#submit").onclick=()=>{
  event.preventDefault()
 const email= document.querySelector("#email")
 const password=document.querySelector("#password")

 if(!email.value)return  document.querySelector("#email").style.border="2px solid red"
 if(!password.value)return  document.querySelector("#password").style.border="2px solid red"

 document.querySelector("#submit").innerHTML="Proccessing..."
 loginAdmin(email.value,password.value)

}

document.querySelectorAll("input").forEach((input)=>{
  input.onkeyup=()=>{
input.style.border="1px solid #e1e2f0"
  }
})
