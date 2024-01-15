var username=document.getElementById("name")
var pass=document.getElementById("password")
var send=document.getElementById("signup")
var lab1=document.getElementById("forname")
var lab2=document.getElementById("forpass")
var err=document.getElementById("error")
var showandhidden=document.getElementById("show_hidden")
var togglebox=document.getElementById("toggle")
var circle=document.getElementById("circle")

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
if(!(localStorage.getItem("toggle"))){
    localStorage.setItem("toggle","no")
}
localStorage.setItem("toggle","no")
togglebox.addEventListener("click",function(){
    if(localStorage.getItem("toggle")==="no"){
        localStorage.setItem("toggle","yes")
        circle.style.boxShadow="inset 0 0 6px 1px black"
    }else{
        localStorage.setItem("toggle","no")
        circle.style.boxShadow="0 0 4px 1px black"
    }
})

send.addEventListener("click",function(e){
    e.preventDefault()
    lab1.innerHTML=""
    lab2.innerHTML=""
    username.style.color="black"
    pass.style.color="black"
    username.style.boxShadow="0 0 0 0 black"
    pass.style.boxShadow="0 0 0 0 black"
    if(username.value==="" || pass.value==="" ){
        if(username.value===""){
            lab1.innerHTML="you must to enter your Username"
        }
        if(pass.value===""){
            lab2.innerHTML="you must to enter your Password"
        }
    }else{
        if(localStorage.getItem("username") && localStorage.getItem("password")){
            let name=localStorage.getItem("username")
            let password=localStorage.getItem("password")
            if(username.value.trim() === name.trim() && pass.value.trim() === password.trim()){
                setTimeout(()=>{
                    location="home.html"
                },500)
            }
            else{
                if(username.value.trim() != name.trim()){
                    lab1.innerHTML="username not correct"
                    username.style.color="red"
                    username.style.boxShadow="0 0 5px 0 red"
                }
                if(pass.value.trim() != password.trim()){
                    lab2.innerHTML="password not correct"
                    pass.style.color="red"
                    pass.style.boxShadow="0 0 5px 0 red"
                }
            }
        }else{
            lab1.innerHTML="you don`t have any Account!!!!!"
            lab1.style.display="flex"
            lab1.style.justifyContent="space-evenly"
            lab1.style.color="black"
            lab1.style.textShadow="none"
            lab1.style.fontWeight="bold"
            lab1.style.fontSize="18px"
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
}