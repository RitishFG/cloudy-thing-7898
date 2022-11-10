import { navbar } from "../Components/nav.js";

let nav_div = document.getElementById("mnav");
nav_div.innerHTML = navbar();

const Nav_footer = () => {
  const openMenu = document.querySelector("#show-menu");
  const closeMenu = document.querySelector("#hide-menu");

  const sideMenu = document.querySelector("#nav-menu");

  openMenu.addEventListener("click", function () {
    sideMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    sideMenu.classList.remove("active");
  });
};

Nav_footer();





import { footer } from "../Components/foter.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();



export { Nav_footer };
