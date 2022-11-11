// let acitve_user = "xyz";
// localStorage.setItem("active_user", JSON.stringify(acitve_user));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push("");
document.querySelector("form").addEventListener("submit", makePayment);
function makePayment(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  if (form.name.value == "") {
    alert("Enter Name");
  } else if (form.card.value.length != 16) {
    alert("Card Number should be 16 Digit");
  } else if (Number(form.month.value) < 1 || Number(form.month.value > 12)) {
    alert("Month should be correct");
  } else if (form.year.value.length == 0) {
    alert("Enter Card Expire Year");
  } else if (Number(form.year.value) < 2022) {
    alert("Card is Expired");
  } else if (form.pin.value.length != 4) {
    alert("Pin Must be 4 digit");
  } else if (form.cvv.value.length != 3) {
    alert("CVV must be 3 digit");
  } else {
    addCourseData();
  }
}
function addCourseData() {
  let user_data = JSON.parse(localStorage.getItem("user_data")) || [];
  let active_user = JSON.parse(localStorage.getItem("active_user"));
  let cart = JSON.parse(localStorage.getItem("cart"));
  let index = -1;
  for (let i = 0; i < user_data.length; i++) {
    if (user_data[i].user == active_user) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    let data = {
      user: active_user,
      enrolled: [],
    };

    for (let i = 0; i < cart.length; i++) {
      data.enrolled.push(cart[i]);
    }
    user_data.push(data);
  } else {
    for (let i = 0; i < cart.length; i++) {
      user_data[index].enrolled.push(cart[i]);
    }
  }
  let flag = false;
  while (flag != true) {
    flag = checkOTP();
    if (flag) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("user_data", JSON.stringify(user_data));
      alert("Payment Successfull");
      break;
    }
  }
  //   Add Window.location to Homepage or Dashboard;
}
function checkOTP() {
  let otp = window.prompt("Enter otp");
  if (otp == 1234) {
    return true;
  } else {
    return false;
  }
}
