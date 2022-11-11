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
// Test code to make cart Local Storage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let items = {
//   image: "https://assets.interntheory.com/courses/banner/1573118304.png",
//   title: "Offline Digital Marketing Course",
//   description:
//     "Learn the art of digital marketing. Sign up for this offline ...",
//   old_price: "₹ 19999",
//   new_price: "₹ 9999",
//   EMI: "EMI Starting at ₹ 572/monthhelp_outline",
// };
// cart.push(items);
// console.log(items);
// localStorage.setItem("cart", JSON.stringify(cart));

// LocalStorage Variables Created
// 1 - Cart - which will have the details of items in the cart
// 2 - Total - which will store the total amount of cart
getCartItems();
// getItems will be called when cart is opened
function getCartItems() {
  // cart will store the courses selected by user
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart.length);
  if (cart.length == 0) {
    // is nothing selected then emptycart needs to be displayed
    displayEmptyCart();
  } else {
    // else items in the cart need to be displayed
    displayCart(cart);
  }
}

function displayEmptyCart() {
  // here h2 tag and image saying empty cart will be appended
  let m = document.querySelector("#cart_items");
  let h2 = document.createElement("h2");
  h2.innerText = "Cart";
  m.append(h2);
  let div = document.createElement("div");
  //   div.setAttribute("id", "noitem");
  let i = document.createElement("img");
  i.setAttribute("id", "nocart");
  i.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JGyBEKsrSjQWZJTJ-B8uNYsOGMbtasr3YA&usqp=CAU";
  div.append(i);
  m.append(div);
  //   empty bill will be displayed by calling emptyBill
  emptyBill();
}

function emptyBill() {
  // all the values on right side of the main div will be 0
  let amount = document.querySelector("#amount>p:nth-child(2)");
  amount.innerText = "Rs. 0";
  let cgst = document.querySelector("#cgst>p:nth-child(2)");
  cgst.innerText = "Rs. 0";
  let sgst = document.querySelector("#sgst>p:nth-child(2)");
  sgst.innerText = "Rs. 0";
  let total = document.querySelector("#total>h2:nth-child(2)");
  total.innerText = "Rs. 0";
  //   apply coupon button and checkout button are disabled
  document.querySelector("#check").disabled = true;
  document.querySelector("#go").disabled = true;
}

function displayCart(data) {
  //   apply coupon and checkout button are enabled
  document.querySelector("#check").disabled = false;
  document.querySelector("#go").disabled = false;
  let m = document.querySelector("#cart_items");
  m.innerHTML = null;
  let h = document.createElement("h2");
  h.innerText = "Cart";
  m.append(h);
  //   foreach loop on data which has all the courses selected by user
  data.forEach(function (el, i) {
    // appending data to left side
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let p = document.createElement("p");
    p.innerText = el.title;
    let p2 = document.createElement("p");
    p2.innerText = "Rs. " + el.new_price;
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function (event) {
      // click on remove button will delete the parent Node and will call deleteCartItem function with index
      event.target.parentNode.remove();
      deleteCartItem(i);
    });
    div.append(img, p, p2, btn);
    m.append(div);
    let hr = document.createElement("hr");
    m.append(hr);
  });
  //   show bill is called to calculate amount
  showBill(data);
}

function showBill(data) {
  //   total sum  calculated
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = sum + Number(data[i].new_price.substring(2));
  }
  let amount = document.querySelector("#amount>p:nth-child(2)");
  amount.innerText = "Rs. " + sum;
  //   CGST AND SGST Calculated on total sum
  let cgst = document.querySelector("#cgst>p:nth-child(2)");
  cgst.innerText = "Rs. " + Math.floor(0.09 * sum);
  let sgst = document.querySelector("#sgst>p:nth-child(2)");
  sgst.innerText = "Rs. " + Math.floor(0.09 * sum);
  let total = document.querySelector("#total>h2:nth-child(2)");
  let t = sum + 2 * Math.floor(0.09 * sum);
  //   total amount after summation appended
  total.innerText = "Rs. " + t;
  //   eventListener for checkout and coupon code added
  document.querySelector("#go").addEventListener("click", checkCoupon);
  document.querySelector("#check").addEventListener("click", toCheckout);
}

function checkCoupon() {
  // checking enetered coupon code
  let text = document.querySelector("#couponcode").value;
  if (text == "FIRSTCOURSE") {
    // if coupon is Masai20 add 20% discount
    alert("Coupon Applied");
    let total = document.querySelector("#total>h2:nth-child(2)");
    // Substring need to be calulated as current total amount also has Rs. in the beginning
    let t = Number(total.innerText.substring(4));
    t = t - Math.floor(0.2 * t);
    total.innerText = "Rs. " + t;
    // new value updated
    document.querySelector("#go").removeEventListener("click", checkCoupon);
  } else {
    alert("Invalid Coupon");
    let t = document.querySelector("#couponcode");
    t.value = null;
    // incorrect coupon value
  }
}

function toCheckout() {
  // on checkout total amount is fetched from HTML Tag
  let t = document.querySelector("#total>h2:nth-child(2)").innerText;
  let total = JSON.parse(localStorage.getItem("total")) || 0;
  //   Substring calculated as total has Rs. in the starting
  total = Number(t.substring(4));
  //   total added in local storage
  localStorage.setItem("total", JSON.stringify(total));
  //   Move to new HTML Page
  window.location = "checkout.html";
}

function deleteCartItem(i) {
  // will fetch cart items from local storage and splice the clicked index
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(i, 1);
  //   store the updated cart on localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  //   Calling getCartItems again such that if cart becomes empty then accordingly flow can be created
  getCartItems();
}
