let online_course=[
{
image:"https://assets.interntheory.com/courses/banner/1573118304.png",
title:"Offline Digital Marketing Course",
description:"Learn the art of digital marketing. Sign up for this offline ...",
old_price:"₹ 19999",
new_price:"₹ 9999",
EMI:"EMI Starting at ₹ 572/month"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120159.png",
title:"Offline Stock Market Course",
description:"Learn how to trade and invest in stock markets. Enroll for t ...",
old_price:"₹ 19999",
new_price:"₹ 9999",
EMI:"EMI Starting at ₹ 572/month"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120767.png",
title:"Offline Tally + GST Course",
description:"Sign up for this offline tally and GST course and learn how ...",
old_price:"₹ 15999",
new_price:"₹ 7999",
EMI:"EMI Starting at ₹ 458/month"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120508.png",
title:"Offline Advanced Excel Course",
description:"Master MS Excel. Take the offline ms excel course and learn ...",
old_price:"₹ 19999",
new_price:"₹ 5999",
EMI:"EMI Starting at ₹ 343/month"
}
]

// navbar appending
import {navbar} from "../Components/nav.js";
let nav=document.getElementById("navbar")
nav.innerHTML=navbar();

import { footer } from "../Components/footerr.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();




const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})

appendData(online_course)
// image:"https://assets.interntheory.com/courses/banner/1573118304.png",
// title:"Offline Digital Marketing Course",
// description:"Learn the art of digital marketing. Sign up for this offline ...",
// old_price:"₹ 19999",
// new_price:"₹ 9999",
// EMI:"EMI Starting at ₹ 572/month"


function appendData(course){
    let container=document.getElementById("container");
    container.innerHTML=null
    course.forEach((el)=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=el.image;
// img.style.width="200px"

let title=document.createElement("h4")
title.innerText=el.title;
let desc=document.createElement("p");
desc.innerText=el.description;

let line=document.createElement("hr");
line.style.margin="20px 0 20px 0"
// line.style.color="red"
// price
let div2=document.createElement("div");
let op=document.createElement("p");
op.innerText=el.old_price;
op.style.textDecoration="line-through"
let np=document.createElement("h3");
np.innerText=el.new_price;
div2.append(op,np);

let emi=document.createElement("h4");
emi.innerText=el.EMI;
emi.setAttribute("class","emi1")
emi.style.color="#ffb33e"

// button
let div3=document.createElement("div");
let know=document.createElement("a");
know.innerText="KNOW MORE";
know.style.color="#3d95e1";
know.style.padding="10px";
know.addEventListener("click",()=>{
knowMore(el);
})
let adc=document.createElement("button");
adc.innerText="ADD TO CART";
adc.addEventListener("click",()=>{
addToCart(el);
})
// adc.style.backgroundColor="red"
// adc.style.color="white"
// adc.style.borderRadius="4px"
div3.append(know,adc);

// apend all inside card
div.append(img,title,desc,line,div2,emi,div3);
container.append(div)

    })
}
function addToCart(el){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.push(el);
localStorage.setItem("cart",JSON.stringify(cart));
}

function knowMore(el){
    localStorage.setItem("knowMore",JSON.stringify(el));
    window.location.href="./knowMore.html"
}