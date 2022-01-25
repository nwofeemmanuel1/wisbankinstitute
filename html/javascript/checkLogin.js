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
  
    return   window.location.replace("/login.html");
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
            return checkmail("email") ;
        }
    }
    
    return window.location.replace("/login.html");;
  })("token")
  