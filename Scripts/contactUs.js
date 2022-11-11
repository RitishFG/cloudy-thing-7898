import {navbar} from "../Components/nav.js";
let nav=document.getElementById("navbar")
nav.innerHTML=navbar();

const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})
//=================================================================

import { footer } from "../Components/footerr.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();

document.getElementById("submit").addEventListener("click",myfun);

function myfun(event){
    event.preventDefault();

    alert("we will get back to you soon")
}