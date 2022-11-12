import { navbar } from "../Components/nav.js";

let nav_div= document.getElementById("mnav")
nav_div.innerHTML=navbar()



const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})






let cr_div = document.getElementById("crousel")
const slideShow = () =>{
    let images = [
        `https://i.ibb.co/KGYmjrK/c1.png`,
        `https://i.ibb.co/f8jCLMf/c2.png`,
        `https://i.ibb.co/9N9b70T/c3.png`,
        `https://i.ibb.co/HtG30kF/c4.png`
    ]
    
let imgele = document.createElement("img")
let i= 1;
setInterval (function(){
    if(i==images.length){
        i=0
    }
 imgele.src=images[i]
 cr_div.append(imgele)
i++
},3000)



}

slideShow()



import { footer } from "../Components/footerr.js";


let foot = document.getElementById("footer")
foot.innerHTML = footer()