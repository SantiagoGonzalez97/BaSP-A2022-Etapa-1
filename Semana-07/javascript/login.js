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
        validateEmailAlert = true;
    }else {
        var p = document.getElementById("email-error");
        p.classList.replace("hidden", "active");
        email.classList.add("border-red");
        validateEmailAlert = false;
    }
}
password.onblur = function(){
    var passwordValue = password.value;
    if(passwordValue === null || passwordValue === '' || passwordValue.length <= 7 || passwordValue.search(/[0-9]/) < 0 ){
        p = document.getElementById("password-error");
        p.classList.replace("hidden", "active");
        password.classList.remove("border-green");
        password.classList.add("border-red");
        validatePasswordAlert = false;
    } else {
        p = document.getElementById("password-error");
        p.classList.replace("active", "hidden");
        password.classList.remove("border-red");
        password.classList.add("border-green");
        validatePasswordAlert = true;
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

//Event onclick
    login.onclick = function(e){
        e.preventDefault()
        if(validateEmailAlert && validatePasswordAlert){
            get(email.value, password.value);
        }
    }
}

//Week-07
function get(email,password){
    var urls = {
        email: 'rose@radiumrocket.com',
        password: 'BaSP2022'
    }
    if(urls.email === email && urls.password === password){
        urlsOk  = '?email=' + urls.email + '&password=' + urls.password;
    } else{
        urlsOk = '';
    }
fetch('https://basp-m2022-api-rest-server.herokuapp.com/login' + urlsOk)
    .then(function(res){
        return res.json();
    })
    .then(function(responseJson){
        if(responseJson.success){
            alert('Logged successfully\nEmail: ' + responseJson.msg + '\nPassword: ' + responseJson.msg);
        }
        else{
            alert('Failed login!\nNot an employee');
        }
    })
    .catch(function(error){
        console.log(error);
    })
}





