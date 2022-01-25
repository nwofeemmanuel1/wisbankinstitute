const verifyToken=async(token)=>{
    const response=await fetch("/api/admin/verfy/token",{
        method:"POST",
        headers:{"content-type":"application/json"},
      body:JSON.stringify({token})
    })
    const result=await response.json()
    // console.log(result)
    if(result.error ==true)return window.location.replace("/admin/dashboard/");
    return true
    }
    


const checkmail=(cname)=>{
   
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
        }
    }
  
    return   window.location.replace("/admin/dashboard/");
  }

((cname)=>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // c.substring(name.length, c.length)
            // console.log(c.substring(name.length, c.length))
            verifyToken( c.substring(name.length, c.length))
            return checkmail("adminMail") ;
        }
    }
    
    return window.location.replace("/admin/dashboard/");;
  })("adminToken")
  