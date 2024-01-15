var icon=document.getElementById("settings")
var tap=document.getElementById("settingstap")
var colors=document.querySelectorAll(".colors div")
var header=document.getElementById("header")



var x=true
icon.addEventListener("click",function(){
    if(x){
        tap.style.transform="translateX(0px)"
    }
    else{
        tap.style.transform="translateX(-100%)"
    }
    x=!x
})
if(localStorage.getItem("color")){
    var coloritem=localStorage.getItem("color")
    icon.style.background=coloritem;
    header.style.background=coloritem;
    if(document.getElementById("form") || document.getElementById("nametitle")){
        var box=document.getElementById("form")
        var title=document.getElementById("nametitle")
        box.style.background=coloritem;
        title.style.background=coloritem;
    }
    if(document.getElementById("main")){
        var carts=document.getElementsByClassName("cart")
        for(let i=0;i<carts.length;i++){
            carts[i].style.background=coloritem;
        }
    }
    colors.forEach((i)=>{
        i.classList.remove("active")
    })
    document.querySelector(`[data-color="${coloritem}"]`).classList.add("active")
}
colors.forEach((e)=>{
    e.addEventListener("click",function(){
        colors.forEach((i)=>{
            i.classList.remove("active")
        })
        e.classList.add("active")
        var coloritem=e.dataset.color
        window.localStorage.setItem("color",coloritem)
        var color=window.localStorage.getItem("color")
        icon.style.background=color
        header.style.background=color
        if(document.getElementById("form") || document.getElementById("nametitle")){
            var box=document.getElementById("form")
            var title=document.getElementById("nametitle")
            box.style.background=color;
            title.style.background=color;
        }
        if(document.getElementById("main")){
            var carts=document.getElementsByClassName("cart")
            for(let i=0;i<carts.length;i++){
                carts[i].style.background=color;
            }
        }
    })
})