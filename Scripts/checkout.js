// let acitve_user = "abc";
// localStorage.setItem("active_user", JSON.stringify(acitve_user));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push("");
document.querySelector("form").addEventListener("submit", makePayment);
function makePayment(event) {
  event.preventDefault();
  // checking card details
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
    // if card details are correct function call to addCourseData
    addCourseData();
  }
}
function addCourseData() {
  let user_data = JSON.parse(localStorage.getItem("user_data")) || [];
  let active_user = JSON.parse(localStorage.getItem("active_user"));
  let cart = JSON.parse(localStorage.getItem("cart"));
  let index = -1;
  // checking if user has taken a course before or not
  for (let i = 0; i < user_data.length; i++) {
    if (user_data[i].user == active_user) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    // if not then adding user to local storage variable
    let data = {
      user: active_user,
      enrolled: [],
    };

    for (let i = 0; i < cart.length; i++) {
      data.enrolled.push(cart[i]);
    }
    user_data.push(data);
  } else {
    // else adding the course in the enrolled section of that user element in local storage
    for (let i = 0; i < cart.length; i++) {
      user_data[index].enrolled.push(cart[i]);
    }
  }
  let flag = false;
  while (flag != true) {
    // getting otp and checking till otp is correct
    flag = checkOTP();
    if (flag) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("user_data", JSON.stringify(user_data));
      // clearing cart details and appending user_data to local storage
      alert("Payment Successfull");
      break;
    }
  }
  //   Add Window.location to Homepage or Dashboard;
  window.location = "index.html";
}
function checkOTP() {
  let otp = window.prompt("Enter otp");
  if (otp == 1234) {
    return true;
  } else {
    return false;
  }
}
