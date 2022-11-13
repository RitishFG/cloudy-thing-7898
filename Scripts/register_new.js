function store(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.length == 0){
        alert('Please fill in email');

    }else if(pw.length == 0){
        alert('Please fill in password');

    }else if(name.length == 0 && pw.length == 0){
        alert('Please fill in email and password');

    }else if(pw.length < 8){
        alert('Min of 8');

    }else if(!pw.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        let obj = {name,pw,email}
        localStorage.setItem('register_data',JSON.stringify(obj));
        alert('Your account has been created');
    }
}

//checking
function check(){
     var data = JSON.parse(localStorage.getItem('register_data'))

    var userEmail = document.getElementById('userEmail').value;
    var userPw = document.getElementById('userPw').value;
    var userRemember = document.getElementById("rememberMe");

    if(userEmail == data.email && userPw == data.pw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}