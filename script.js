var loginbtn = document.querySelector(".login")
var loginheading = document.querySelector("#login-heading")
var check =0


// loginbtn.addEventListener("click", function(){
//     loginheading.innerHTML = "Sign up"
// })


loginbtn.addEventListener("click", function(){
    if(check==0){
        loginheading.innerHTML = "Sign up"
        check=1
    }
    else{
        loginheading.innerHTML = "login"
        check=0
    }
    
})