window.onload = function() {
//Validation names
var email = document.getElementById("email");
console.log("email", email)
var password = document.getElementById("password");
console.log("password", password)
var login = document.getElementById("btn-login");
console.log("btn-login", login);

//Events onblur
email.onblur = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValue = email.value;
    var validateEmail = emailExpression.test(emailValue);
    if (validateEmail){
        p = document.getElementById("email-error");
        p.classList.replace("active", "hidden");
        email.classList.remove("border-red");
        email.classList.add("border-green");
    }else {
        var p = document.getElementById("email-error");
        p.classList.replace("hidden", "active");
        email.classList.add("border-red");
    }
}
password.onblur = function(){
    var passwordValue = password.value;
    if(passwordValue === null || passwordValue === '' || passwordValue.length <= 7 || passwordValue.search(/[0-9]/) < 0 ){
        p = document.getElementById("password-error");
        p.classList.replace("hidden", "active");
        password.classList.remove("border-green");
        password.classList.add("border-red");
    } else {
        p = document.getElementById("password-error");
        p.classList.replace("active", "hidden");
        password.classList.remove("border-red");
        password.classList.add("border-green");
    }
}

//Events onfocus
    email.onfocus = function(){
        p = document.getElementById("email-error");
        p.classList.replace("active", "hidden");
    }
    password.onfocus = function(){
        p = document.getElementById("password-error");
        p.classList.replace("active", "hidden");
    }
}