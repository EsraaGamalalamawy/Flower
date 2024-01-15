var username=document.getElementById("name")
var email=document.getElementById("email")
var pass=document.getElementById("password")
var pass2=document.getElementById("password2")
var send=document.getElementById("signup")
var lab1=document.getElementById("forname")
var lab2=document.getElementById("foremail")
var lab3=document.getElementById("forpass")
var lab4=document.getElementById("forpass2")
var showandhidden=document.getElementById("show_hidden")
var showandhidden2=document.getElementById("show_hidden2")

showandhidden.addEventListener("click",function(){
    if(showandhidden.innerHTML===`<i class="fa-regular fa-eye"></i>`){
        pass.type="string"
        showandhidden.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`
    }
    else{
        pass.type="password"
        showandhidden.innerHTML=`<i class="fa-regular fa-eye"></i>`
    }
})
showandhidden2.addEventListener("click",function(){
    if(showandhidden2.innerHTML===`<i class="fa-regular fa-eye"></i>`){
        pass2.type="string"
        showandhidden2.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`
    }
    else{
        pass2.type="password"
        showandhidden2.innerHTML=`<i class="fa-regular fa-eye"></i>`
    }
})
send.addEventListener("click",function(e){
    e.preventDefault()
    lab1.innerHTML=""
    lab2.innerHTML=""
    lab3.innerHTML=""
    lab4.innerHTML=""
    if(username.value==="" || email.value==="" || pass.value==="" || pass2.value==="" ){
        if(username.value===""){
            lab1.innerHTML="you must to enter your Username"
        }
        if(email.value===""){
            lab2.innerHTML="you must to enter your Email"
        }
        if(pass.value===""){
            lab3.innerHTML="you must to enter your Password"
        }
        if(pass2.value===""){
            lab4.innerHTML="you must to enter your confirm Password"
        }
    }else{
        window.localStorage.setItem("username",username.value)
        window.localStorage.setItem("email",email.value)
        window.localStorage.setItem("password",pass.value)
        if(pass.value===pass2.value){
            setTimeout(()=>{
                location="login.html"
            },500)
        }else{
            lab4.innerHTML="confirming Password is incorrect"
        }
    }
})
function change(x){
    if(x==1){
        lab1.innerHTML=""
    }
    if(x==2){
        lab2.innerHTML=""
    }
    if(x==3){
        lab3.innerHTML=""
    }
    if(x==4){
        lab4.innerHTML=""
    }
}
if(localStorage.getItem("toggle")==="yes"){
    if(localStorage.getItem("username")){
        window.location="home.html"
    }
}