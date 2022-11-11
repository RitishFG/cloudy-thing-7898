import { navbar } from "../Components/nav.js";

let nav_div = document.getElementById("mnav")
nav_div.innerHTML = navbar()

const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})


console.log("fusljfskldfkls")







let LSdata = JSON.parse(localStorage.getItem("element"))




let content = document.getElementById("rightcontainers")

const Knowing = (data) => {
    let heading = document.createElement("h3")
    heading.innerText = data.company.display_name;

    let bel = document.createElement('p')
    bel.innerText = "Job Opportunity";

    let cat = document.createElement('p')
    cat.innerText = "Job Category:" + data.category.label;

    let line = document.createElement('hr')
    let line1 = document.createElement('hr')

    let opening = document.createElement('p')
    opening.innerText = "Openings: 1"

    let startdate = document.createElement('p')
    startdate.innerText = "Start Date : 8th Nov 2022"

    let applicationdeadline = document.createElement('p')
    applicationdeadline.innerText = "Application Deadline : 8th Dec 2022"

    let salary = document.createElement('p')
    salary.innerText = data.salary_min + " - " + data.salary_max + " " + "per month"

    let descheading = document.createElement('h4')
    descheading.innerText = "Job Description:"
    descheading.style.marginTop = "20px"
    descheading.style.marginBottom = "10px"

    let desc = document.createElement('p')
    desc.innerText = data.description

    let locheading=document.createElement('h4')
    locheading.innerText="Location"
    locheading.style.marginTop="10px"

     let div=document.createElement('div')
div.setAttribute("class","mass")

    let location=document.createElement('img')
    location.src="https://cdn-icons-png.flaticon.com/512/684/684850.png"
    location.style.width="3%";
    location.style.height="21px";
    location.style.marginTop="10px"

    let lock=document.createElement('p')
    lock.innerText=data.location.display_name;
    lock.style.marginTop="5px"
    lock.style.marginLeft="7px"

    div.append(location,lock)


    let btndiv=document.createElement("div")
    btndiv.setAttribute("id","buttonsdiv")

    let btnintern=document.createElement('button')
    btnintern.setAttribute("id","backtointern")
    btnintern.innerText="BACK TO INTERNSHIPS"
    btnintern.addEventListener("click",()=>{
        gotoInternship()
    })
   

    let btnapply=document.createElement("button")
    btnapply.setAttribute('id',"apply")
    btnapply.innerText="APPLY"
    btnapply.addEventListener('click',()=>{
        Gotocheckout()
    })
    

    btndiv.append(btnintern,btnapply)

    content.append(heading, bel, cat, line, opening, startdate, applicationdeadline, salary, descheading, desc,line1,locheading,div,btndiv)


}
Knowing(LSdata)



const gotoInternship=()=>{
    window.location.href="Internship.html"
}

const Gotocheckout=()=>{
    window.location.href="cart.html"
}