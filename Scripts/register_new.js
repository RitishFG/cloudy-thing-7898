function store() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pw = document.getElementById("pw").value;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (name.length == 0) {
    alert("Please fill in email");
  } else if (pw.length == 0) {
    alert("Please fill in password");
  } else if (name.length == 0 && pw.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.length < 8) {
    alert("Min of 8");
  } else if (!pw.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
    let obj = { name, pw, email };
    login_data.push(obj);
    localStorage.setItem("login_data", JSON.stringify(login_data));
    // localStorage.setItem('register_data',JSON.stringify(obj));
    alert("Your account has been created");
  }
}

//checking
function check(event) {
  // event.preventDefault();
  var data = JSON.parse(localStorage.getItem("login_data"));
  let active_user = JSON.parse(localStorage.getItem("active_user")) || null;
  var userEmail = document.getElementById("userEmail").value;
  var userPw = document.getElementById("userPw").value;
  var userRemember = document.getElementById("rememberMe");
  let flag = -1;
  if (userEmail == "admin" && userPw == "admin") {
    window.location = "admin.html";
    flag = 1;
  }
  if (flag == -1) {
    data.forEach(function (el) {
      if (el.email == userEmail && el.pw == userPw) {
        alert("Login Successfull");
        flag = 2;
        active_user = el.name;
        console.log(active_user);
        localStorage.setItem("active_user", JSON.stringify(active_user));
        window.location = "index.html";
      }
    });
    if (flag == -1) {
      alert("Incorrect Details");
    }
  }
  // if (userEmail == data.email && userPw == data.pw) {
  //   alert("You are logged in.");
  // } else {
  //   alert("Error on login");
  // }
}
