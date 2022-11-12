import { navbar } from "../Components/nav.js";

// console.log(navbar);
let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();
const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function () {
  sideMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  sideMenu.classList.remove("active");
});

let active_user = JSON.parse(localStorage.getItem("active_user")) || null;
if (active_user) {
  displayUser();
}
function displayUser() {
  let name = document.querySelector("#name");
  name.innerText = active_user;
  getCourses();
}
function getCourses() {
  let user_data = JSON.parse(localStorage.getItem("user_data")) || [];
  if (user_data.length != 0) {
    let index = -1;
    for (let i = 0; i < user_data.length; i++) {
      if (user_data[i].user == active_user) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      noCourse();
    } else {
      displayCourse(user_data[index].enrolled);
    }
  }
}
function noCourse() {
  let m = document.querySelector("#purchased");
  let h1 = document.createElement("h1");
  h1.innerText = "No Course Purchased";
  m.append(h1);
}
function displayCourse(data) {
  //   console.log(data);
  let m = document.querySelector("#purchased");
  m.innerHTML = null;
  let hdiv = document.createElement("div");
  hdiv.classList = "parentdiv";
  hdiv.setAttribute("id", "hd");
  let h31 = document.createElement("h3");
  h31.innerText = "S.No.";
  let h32 = document.createElement("h3");
  h32.innerText = "Course Name";
  let h = document.createElement("hr");
  h.classList = "di";
  hdiv.append(h31, h32);
  m.append(hdiv, h);
  data.forEach(function (el, i) {
    let div = document.createElement("div");
    div.classList = "parentdiv";
    let p = document.createElement("p");
    p.innerText = i + 1;
    let p2 = document.createElement("p");
    p2.innerText = el.title;
    let h = document.createElement("hr");
    h.classList = "di";
    div.append(p, p2);
    m.append(div, h);
    // console.log(el);
  });
}
function sendTo() {
  window.location = "online_course.html";
}
document.querySelector("#one").addEventListener("click", sendTo);
document.querySelector("#two").addEventListener("click", sendTo);
import { footer } from "../Components/footerr.js";
let foot = document.querySelector("#footer");
foot.innerHTML = footer();
