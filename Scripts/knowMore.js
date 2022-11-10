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

// localstorage data
let data=JSON.parse(localStorage.getItem("knowMore"));
// console.log(data.image)
let div=document.getElementById("container")
// background image
let div1=document.createElement("div");
let url=data.image
div1.style.backgroundImage=`url('${url}')`;

let divx=document.createElement("div")
divx.style.margin="20px 0 20px 150px"
divx.style.width="70%"

// title and description
let div2=document.createElement("div");
div2.style.padding="40px"
div2.style.margin="300px 0 0 0"
div2.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
let title=document.createElement("h1");
title.innerText=data.title;
title.style.margin="0px 0 20px 0"
let desc=document.createElement("p");
desc.innerText=data.description;
div2.append(title,desc)


let div4x=document.createElement("div");
div4x.style.padding="30px"
div4x.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
div4x.style.margin="20px 0 20px 0"
// key feture
let key=document.createElement("h1");
key.innerText="Key Features";
key.style.margin="0 0 20px 20px"
let d4x1=document.createElement("div");
d4x1.setAttribute("id","keyFeature");
let d41=document.createElement("div");
let img1=document.createElement("img");
img1.src="https://assets.interntheory.com/creative/features_icon/certified.png";
let tit1=document.createElement("h4");
tit1.innerText="Certified";
d41.append(img1,tit1)
// 
let d42=document.createElement("div");
let img2=document.createElement("img");
img2.src="https://assets.interntheory.com/creative/features_icon/study-at-your-own-time.png";
let tit2=document.createElement("h4");
tit2.innerText="Study At Your Own Time";
d42.append(img2,tit2)
// 
let d43=document.createElement("div");
let img3=document.createElement("img");
img3.src="https://assets.interntheory.com/creative/features_icon/learn-from-professional.png";
let tit3=document.createElement("h4");
tit3.innerText="Learn from Industry Professionals";
d43.append(img3,tit3)
// 
let d44=document.createElement("div");
let img4=document.createElement("img");
img4.src="https://assets.interntheory.com/creative/features_icon/study-more.png";
let tit4=document.createElement("h4");
tit4.innerText="More Practice, Less Theory"
d44.append(img4,tit4)
// 
d4x1.append(d41,d42,d43,d44);
let h1=document.createElement("hr")
// h1.style.border="dotted"

//What will a student get after the course?
let key1=document.createElement("h1");
key1.innerText="What will a student get after the course?";
key1.style.margin="20px 0 20px 20px"
let d4x2=document.createElement("div");
d4x2.setAttribute("id","key1");
let d4x21=document.createElement("div");
let img11=document.createElement("img");
img11.src="https://assets.interntheory.com/creative/features_icon/certified.png";
let tit11=document.createElement("h4");
tit11.innerText="Certified";
d4x21.append(img11,tit11)
// 
let d4x22=document.createElement("div");
let img22=document.createElement("img");
img22.src="https://assets.interntheory.com/creative/features_icon/study-at-your-own-time.png";
let tit22=document.createElement("h4");
tit22.innerText="Study At Your Own Time";
d4x22.append(img22,tit22)
// 
d4x2.append(d4x21,d4x22)
let h2=document.createElement("hr")
// h2.style.border="dotted"

// sllybus
let key2=document.createElement("h1");
key2.innerText="Syllabus";
key2.style.margin="20px 0 20px 20px"
// 
let key3=document.createElement("a");
let key31=document.createElement("p");
key3.innerText="Web Devlopment Course";
key3.style.color="#1d86df"
key31.innerText="Click here to see the syllabus ";
key3.style.margin="20px 0 0px 20px"
key31.style.margin="10px 0 0px 20px"
let h3=document.createElement("hr")
h3.style.margin="20px 0 20px 0"
// h2.style.border="dotted"
let key4=document.createElement("a");
let key41=document.createElement("p");
key4.innerText="Data Analytics with R Programming Course";
key4.style.color="#1d86df"
key41.innerText="Click here to see the syllabus ";
key4.style.margin="20px 20px 20px 20px"
key41.style.margin="10px 0 0px 20px"
let h4=document.createElement("hr")
h4.style.margin="20px 0 20px 0"
// h2.style.border="dotted"
let key5=document.createElement("a");
let key51=document.createElement("p");
key5.innerText="Android App Devlopment Using Kotlin Course";
key5.style.color="#1d86df"
key51.innerText="Click here to see the syllabus ";
key5.style.margin="20px 20px 20px 20px"
key51.style.margin="10px 0 0px 20px"
let h5=document.createElement("hr")
h5.style.margin="20px 0 20px 0"
// h2.style.border="dotted"
let key6=document.createElement("a");
let key61=document.createElement("p");
key6.innerText="R Programming Course";
key6.style.color="#1d86df"
key61.innerText="Click here to see the syllabus ";
key6.style.margin="20px 20px 20px 20px"
key61.style.margin="10px 0 0px 20px"
let h6=document.createElement("hr")
h6.style.margin="20px 0 20px 0"
// h2.style.border="dotted"

div4x.append(key,d4x1,h1,key1,d4x2,h2,key2,key3,key31,h3,key4,key41,h4,key5,key51,h5,key6,key61,h6)
divx.append(div2,div4x)
div.append(div1,divx)

