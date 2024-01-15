var username=document.getElementById("name")
var email=document.getElementById("email")
var send=document.getElementById("signup")
var change=document.getElementById("change")
var lab1=document.getElementById("forname")
var lab2=document.getElementById("foremail")
var lab3=document.getElementById("fornewpass")
var outpass=document.querySelector(".next")
var boxNew=document.getElementById("boxnewpassword")
var newpass=document.getElementById("newpass")
var show_hidden=document.getElementById("show_hidden3")

show_hidden.addEventListener("click",function(){
    if(show_hidden.innerHTML===`<i class="fa-regular fa-eye"></i>`){
        newpass.type="string"
        show_hidden.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`
    }
    else{
        newpass.type="password"
        show_hidden.innerHTML=`<i class="fa-regular fa-eye"></i>`
    }
})
send.addEventListener("click",function(e){
    e.preventDefault()
    lab1.innerHTML=""
    lab2.innerHTML=""
    if(username.value==="" || email.value===""){
        if(username.value===""){
            lab1.innerHTML="you must to enter your Username"
        }
        if(email.value===""){
            lab2.innerHTML="you must to enter your Email"
        }
    }else{
        if(username.value.trim()===localStorage.getItem("username").trim() && email.value.trim()===localStorage.getItem("email").trim()){
            outpass.innerHTML=`Your Password is: ${localStorage.getItem("password")} <a href="login.html">Log in</a>`
            boxNew.style.display="block"
            change.style.display="block"
        }else{
            if(username.value.trim() != localStorage.getItem("username").trim()){
                lab1.innerHTML=" your Username is incorrect"
            }
            if(email.value.trim() != localStorage.getItem("email").trim()){
                lab2.innerHTML="your Email is incorrect"
            }
        }
        // setTimeout(()=>{
        //     location="login.html"
        // },500)
    }
})
change.addEventListener("click",function(e){
    e.preventDefault()
    lab1.innerHTML=""
    lab2.innerHTML=""
    if(newpass.value===""){
        lab3.innerHTML="if you want to change, you must to enter new password"
    }else{
        localStorage.setItem("password",newpass.value)
        outpass.innerHTML=`Your Password is: ${localStorage.getItem("password")} <a href="login.html">Log in</a>`
        setTimeout(()=>{
            window.location="login.html"
        },500)
    }
})
function change(x){
    if(x==1){
        lab1.innerHTML=""
    }
    if(x==2){
        lab2.innerHTML=""
    }
}