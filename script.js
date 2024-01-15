var outname=document.getElementById("username")
var username=localStorage.getItem("username")
var box=document.getElementById("main")
var lovetag=document.getElementById("lovetag")
var lovePage=document.getElementById("lovePage")
var lovebox=document.getElementById("lovebox")
var closelove=document.getElementById("closelove")
var logout=document.querySelector(".logout")
var shoppingtag=document.getElementById("shoppingtag")
var shoppingPage=document.getElementById("shoppingPage")
var addedbox=document.getElementById("addedbox")
var closeshopping=document.getElementById("closeshopping")
var counter=document.getElementById("counter")
var buy=document.getElementById("buy")

outname.innerHTML=username
lovetag.addEventListener("click",function(){
    lovePage.style.display="block"
    lovebox.innerHTML =""
    if(localStorage.getItem("loveItems")){
        let loveItems=JSON.parse(localStorage.getItem("loveItems"))
        loveItems.map((item)=>{
            if(localStorage.getItem("addeditems")){
                var addeditems=JSON.parse(localStorage.getItem("addeditems"))
                var finded=addeditems.some((ele)=>{return ele.id===item.id})
                if(finded ){
                    lovebox.innerHTML += `<div class="itemlove" id="id${item.id}">
                                    <diV class="leftlove">
                                        <img src="${item.src}">
                                        <div class="info">
                                            <p>${item.name}</p>
                                            <h2>${item.price}$</h2>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="removelove" onclick="removelove(${item.id})">X</button>
                                        <button class="addlove" id="add${item.id}" onclick="addaction2(${item.id})" >Remove</button>
                                    </div>
                                </div>`
                }else{
                    lovebox.innerHTML += `<div class="itemlove" id="id${item.id}">
                                    <diV class="leftlove">
                                        <img src="${item.src}">
                                        <div class="info">
                                            <p>${item.name}</p>
                                            <h2>${item.price}$</h2>
                                            <p class="counter">Count:<input type="number" min="1" value="1" ></p>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="removelove" onclick="removelove(${item.id})">X</button>
                                        <button class="addlove" id="add${item.id}" onclick="addaction2(${item.id})" >Add</button>
                                    </div>
                                </div>`
                }
            }else{
                lovebox.innerHTML += `<div class="itemlove" id="id${item.id}">
                                    <diV class="leftlove">
                                        <img src="${item.src}">
                                        <div class="info">
                                            <p>${item.name}</p>
                                            <h2>${item.price}$</h2>
                                            <p class="counter">Count:<input type="number" min="1" value="1" ></p>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="removelove" onclick="removelove(${item.id})">X</button>
                                        <button class="addlove" id="add${item.id}" onclick="addaction2(${item.id})" >Add</button>
                                    </div>
                                </div>`
            }
        })
    }
    if(lovebox.innerHTML ===""){
        lovebox.innerHTML=`<h3 class="noitemlove">No Items in Your faviorite tap</h3>`
    }
})
closelove.addEventListener("click",function(){
    if(lovePage.style.display="block"){
        lovePage.style.display="none"
    }
})
shoppingtag.addEventListener("click",function(){
    shoppingPage.style.display="block"
    addedbox.innerHTML =""
    if(localStorage.getItem("addeditems")){
        let addeddone=JSON.parse(localStorage.getItem("addeditems"))
        addeddone.map((item)=>{
            var countid=document.getElementById(`count${item.id}`)
            addedbox.innerHTML += `<div class="itemlove" id="id${item.id}">
                                    <diV class="leftlove">
                                        <img src="${item.src}">
                                        <div class="info">
                                            <p>${item.name}</p>
                                            <h2>${item.price}$</h2>
                                            <p class="counter">Number of item: ${countid.value}</p>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="removelove" onclick="removeadded(${item.id})">X</button>
                                        <div class="total">T.B: <span id="num${item.id}">${item.price * countid.value}</span>$</div>
                                    </div>
                                </div>`
        })
    }
    if(addedbox.innerHTML ===""){
        addedbox.innerHTML=`<h3 class="noitemlove">No Items in Your shopping tap</h3>`
        buy.style.display="none"
    }else{
        buy.style.display="block"
    }
})
closeshopping.addEventListener("click",function(){
    shoppingPage.style.display="none"
})
logout.addEventListener("click",function(){
    localStorage.setItem("toggle","no")
    localStorage.removeItem("addeditems")
    localStorage.removeItem("loveItems")
})
let AllProductes=[
    {
        id:5,
        src:"images/flower6.webp",
        name:"Sunflowers",
        price:300,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===5})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:1,
        src:"images/flower2.jpeg",
        name:"Simple_flowers",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===1})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },

    {
        id:2,
        src:"images/flower8.jpeg",
        name:"box_flowers",
        price:300,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===2})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:3,
        src:"images/flower4.jpeg",
        name:"Bink_flowers",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===3})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:4,
        src:"images/flower5.webp",
        name:"Red_flowers",
        price:100,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===4})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:6,
        src:"images/flower7.jpeg",
        name:"Rose_vase",
        price:250,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===6})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:7,
        src:"images/flower9.jpeg",
        name:"Bouquet_flowers",
        price:390,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===7})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:8,
        src:"images/flower10.jpeg",
        name:"Simple_gold",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===8})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:9,
        src:"images/flower11.jpeg",
        name:"Purple_roses",
        price:400,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===9})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:10,
        src:"images/flower12.jpeg",
        name:"Natural_roses",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===10})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:11,
        src:"images/flower13.jpeg",
        name:"Big_box",
        price:700,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===11})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:12,
        src:"images/flower14.jpeg",
        name:"Rose_flowers",
        price:600,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===12})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:13,
        src:"images/flower15.webp",
        name:"Simple_flowers",
        price:100,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===13})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:14,
        src:"images/flower16.webp",
        name:"romantic_flowers",
        price:500,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===14})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:15,
        src:"images/flower17.jpeg",
        name:"stick_roses",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===15})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:16,
        src:"images/flower18.jpeg",
        name:"box-roses",
        price:150,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===16})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:17,
        src:"images/flower19.webp",
        name:"white_flowers",
        price:300,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===17})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
    {
        id:18,
        src:"images/flower20.jpeg",
        name:"white-roses",
        price:800,
        love:(()=>{
            if(localStorage.getItem("loveItems")){
                return JSON.parse(localStorage.getItem("loveItems")).some((e)=>{return e.id===18})?"love":"love1"
            }else{
                return "love1"
            }
        })(),
    },
]
var products =AllProductes.map((ele)=>{
    return `<div class="cart">
                <img src="${ele.src}">
                <div class="info1">
                    <h3>${ele.name}</h3>
                    <i class="fa-regular fa-heart esr${ele.id} ${ele.love}" onClick="love(${ele.id})"></i>
                </div>
                <div class="info">
                    <p>${ele.price}$</p>
                    <p class="counter">Count:<input type="number" min="1" value="1" id="count${ele.id}"></p>
                </div>
                <button onclick="addaction(${ele.id})" id="btn${ele.id}">Add</button>
            </div>`
})
if(localStorage.getItem("addeditems") && (JSON.parse(localStorage.getItem("addeditems"))).length!=0){
    counter.style.display="block"
    counter.innerHTML=(JSON.parse(localStorage.getItem("addeditems"))).length
}else{
    counter.style.display="none"
}
products.map((e)=>{
    box.innerHTML += e
})
var favorite=localStorage.getItem("loveItems")? JSON.parse(localStorage.getItem("loveItems")) : []
var added=localStorage.getItem("addeditems")? JSON.parse(localStorage.getItem("addeditems")) : []
function love(e){
    var x=document.querySelector(`.esr${e}`)
    x.classList.toggle("love")
    AllProductes.forEach((item)=>{
        if(item.id === e){
            if(favorite.length===0){
                favorite.push(item)
            }else{
                var check=favorite.some((item)=>{
                    return item.id===e
                })
                if(!check){
                    favorite.push(item)
                }else{
                    favorite.splice(favorite.indexOf(item),1)
                }
            }
        }
    })
    localStorage.setItem("loveItems",JSON.stringify(favorite))
}
if(added.length>0){
    added.forEach((e)=>{
        var itembutton=document.getElementById(`btn${e.id}`)
        itembutton.style.boxShadow="black 1px 1px 5px 1px inset"
        itembutton.innerHTML="Remove"
    })
}
function addaction(id){
    var itemid=document.getElementById(`btn${id}`)
    AllProductes.forEach((item)=>{
        if(item.id === id){
            if(added.length===0){
                added.push(item)
                itemid.style.boxShadow="black 1px 1px 5px 1px inset"
                itemid.innerHTML="Remove"
                localStorage.setItem("addeditems",JSON.stringify(added))
            }else{
                var checker=added.some((ele)=>{
                    return ele.id===id
                })
                if(!checker){
                    added=JSON.parse(localStorage.getItem("addeditems"))
                    added.push(item)
                    itemid.style.boxShadow="black 1px 1px 5px 1px inset"
                    itemid.innerHTML="Remove"
                    localStorage.setItem("addeditems",JSON.stringify(added))
                }else{
                    added=JSON.parse(localStorage.getItem("addeditems"))
                    var del= added.filter((e)=>{return e.id!=id})
                    itemid.style.boxShadow="1px 1px 4px 0px black"
                    itemid.innerHTML="Add"
                    localStorage.setItem("addeditems",JSON.stringify(del))
                }
            }
        }
    })
    if(localStorage.getItem("addeditems") && (JSON.parse(localStorage.getItem("addeditems"))).length!=0){
        counter.style.display="block"
        counter.innerHTML=(JSON.parse(localStorage.getItem("addeditems"))).length
    }else{
        counter.style.display="none"
    }
}
function addaction2(id){
    var addlove=document.getElementById(`add${id}`)
    addlove.classList.toggle("done")
    favorite.forEach((ele)=>{
        if(ele.id === id){
            favorite.splice(favorite.indexOf(ele),1)
            localStorage.setItem("loveItems",JSON.stringify(favorite))
        }
    })
    var x=document.querySelector(`.esr${id}`)
    x.classList.toggle("love")
    var itembox=document.getElementById(`id${id}`)
    itembox.style.transition=".3s"
    itembox.style.opacity="0"
    itembox.style.marginLeft="100%"
    setTimeout(()=>{
        itembox.style.display="none"
    },300)
    AllProductes.forEach((item)=>{
        var changebtn=document.getElementById(`btn${id}`)
        if(item.id===id){
            if(addlove.innerHTML==="Remove"){
                added=JSON.parse(localStorage.getItem("addeditems"))
                var del= added.filter((e)=>{return e.id!=id})
                localStorage.setItem("addeditems",JSON.stringify(del))
                changebtn.style.boxShadow="1px 1px 4px 0px black"
                changebtn.innerHTML="Add"
            }else{
                added=JSON.parse(localStorage.getItem("addeditems"))
                added.push(item)
                localStorage.setItem("addeditems",JSON.stringify(added))
                changebtn.style.boxShadow="black 1px 1px 5px 1px inset"
                changebtn.innerHTML="Remove"
            }
        }
    })
    if(localStorage.getItem("addeditems") && (JSON.parse(localStorage.getItem("addeditems"))).length!=0){
        counter.style.display="block"
        counter.innerHTML=(JSON.parse(localStorage.getItem("addeditems"))).length
    }else{
        counter.style.display="none"
    }
    if(favorite.length==0){
        lovebox.innerHTML=`<h3 class="noitemlove">No Items in Your faviorite tap</h3>`
    }
}
function removelove(id){
    favorite.forEach((ele)=>{
        if(ele.id === id){
            favorite.splice(favorite.indexOf(ele),1)
            localStorage.setItem("loveItems",JSON.stringify(favorite))
        }
        if(favorite.length==0){
            lovebox.innerHTML=`<h3 class="noitemlove">No Items in Your faviorite tap</h3>`
        }
    })
    var x=document.querySelector(`.esr${id}`)
    x.classList.toggle("love")
    var itembox=document.getElementById(`id${id}`)
    itembox.style.transition=".3s"
    itembox.style.opacity="0"
    itembox.style.height="0"
    itembox.style.width="0"
    setTimeout(()=>{
        itembox.style.display="none"
    },300)
}
function removeadded(id){
    removelove(id)
    var mainitem=document.getElementById(`btn${id}`)
    mainitem.innerHTML="Add"
    mainitem.style.boxShadow="1px 1px 4px 0px black"
    added.forEach((e)=>{
        if(e.id===id){
            added=JSON.parse(localStorage.getItem("addeditems"))
            var del= added.filter((e)=>{return e.id!=id})
            localStorage.setItem("addeditems",JSON.stringify(del))
        }
    })
    if(JSON.parse(localStorage.getItem("addeditems")).length==0){
        addedbox.innerHTML=`<h3 class="noitemlove">No Items in Your shopping tap</h3>`
        buy.style.display="none"
    }else{
        buy.style.display="block"
    }
    if(localStorage.getItem("addeditems") && (JSON.parse(localStorage.getItem("addeditems"))).length!=0){
        counter.style.display="block"
        counter.innerHTML=(JSON.parse(localStorage.getItem("addeditems"))).length
    }else{
        counter.style.display="none"
    }
}
buy.addEventListener("click",function(){
    buy.style.boxShadow="inset 1px 1px 3px 1px black"
    added=[]
    counter.style.display="none"
    localStorage.setItem("addeditems",added)
    addedbox.innerHTML=`<h3 class="done">The request has been sent successfully</h3>`
    AllProductes.forEach((item)=>{
        var changebtn=document.getElementById(`btn${item.id}`)
        changebtn.style.boxShadow="1px 1px 4px 0px black"
        changebtn.innerHTML="Add"
    })
    buy.style.display="none"
})