import {navbar} from "../Components/nav.js"
let nav=document.getElementById('navbar')
nav.innerHTML=navbar()


import {footer} from "../Components/footerr.js"
let fot=document.getElementById('footer')
fot.innerHTML=footer()


const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})