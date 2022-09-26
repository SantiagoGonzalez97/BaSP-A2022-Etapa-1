window.onload = function(){
//Validation names
var name = document.getElementById("name");
console.log("name", name)
var surname = document.getElementById("surname");
console.log("surname", surname)
var dni = document.getElementById("dni");
console.log("dni", dni);
var dob = document.getElementById("dob");
console.log("dob", dob);
var phone = document.getElementById("phone");
console.log("phone", phone)
var address = document.getElementById("address");
console.log("address", address)
var location = document.getElementById("location");
console.log("location", location)
var postal = document.getElementById("postal");
console.log("postal", postal);
var email = document.getElementById("email");
console.log("email", email)
var password = document.getElementById("password");
console.log("password", password);
var passwordRepeat = document.getElementById("password-repeat");
console.log("password-repeat", passwordRepeat);

//Event onblur
name.onblur = function(){
var nameValue = name.value;
    if(nameValue.length < 4 || nameValue === null || nameValue === ''){
        p = document.getElementById("name-error-length");
        p.classList.replace("hidden", "active");
        name.classList.remove("border-green");
        name.classList.add("border-red");
    }else{
        p = document.getElementById("name-error-length");
        p.classList.replace("active", "hidden");
        name.classList.remove("border-red");
        name.classList.add("border-green");
    }
    if(nameValue.search(/[^0-9]/) < 0){
        p = document.getElementById("name-error-caracter");
        p.classList.replace("hidden", "active");
        name.classList.remove("border-green");
        name.classList.add("border-red");
    }
}
surname.onblur = function(){
    var surnameValue = surname.value;
    if(surnameValue.length < 4 || surnameValue === null || surnameValue === ''){
        p = document.getElementById("surname-error-length");
        p.classList.replace("hidden", "active");
        surname.classList.remove("border-green");
        surname.classList.add("border-red");
    }else{
        p = document.getElementById("surname-error-length");
        p.classList.replace("active", "hidden");
        name.classList.remove("border-red");
        surname.classList.add("border-green");
    }
    if (surnameValue.search(/[^0-9]/)){
        p = document.getElementById("surname-error-caracter");
        p.classList.replace("hidden", "active");
        surname.classList.remove("border-green");
        surname.classList.add("border-red");
    }
}
dni.onblur = function(){
var dniValue = dni.value;
    if(dniValue.length < 8 || dniValue === null || dniValue === '' && isNaN(dniValue) ){
    p = document.getElementById("dni-error-length");
    p.classList.replace("hidden", "active");
    dni.classList.remove("border-green");
    dni.classList.add("border-red");
    } else {
        p = document.getElementById("dni-error-length");
        p.classList.replace("active", "hidden");
        dni.classList.add("border-green");
    }
}
dob.onblur = function(){
    var dobValue = dob.value;
    var dobValue = dob.value;
    var day = dobValue.substring(0,2);
    var slash1 = dobValue.substring(2,3);
    var month = dobValue.substring(3,5);
    var slash2 = dobValue.substring(5,6);
    var year = dobValue.substring(6);
    day = Number(day);
    month = Number(month);
    year = Number(year);
    if (day < 1 || day > 31){
        p = document.getElementById("date-error");
        p.classList.replace("hidden", "active");
        dob.classList.add("border-red")
    } else if(month < 1 || month > 12){
        p = document.getElementById("date-error");
        p.classList.replace("hidden", "active");
        dob.classList.add("border-red");
    } else if(year < 1900 || year > 2022){
        p = document.getElementById("date-error");
        p.classList.replace("hidden", "active");
        dob.classList.add("border-red");
    } else if(slash1 != '/' || slash2 != '/'){
        p = document.getElementById("date-error");
        p.classList.replace("hidden", "active");
        dob.classList.add("border-red");
    }else{
        p = document.getElementById("date-error");
        p.classList.replace("active", "hidden");
        p.classList.remove("border-red");
        dob.classList.add("border-green");
    }
}
phone.onblur = function(){
    var phoneValue = phone.value;
    if(phoneValue.length < 10 && !Number(phoneValue) || phoneValue === null || phoneValue === '' ){
        p = document.getElementById("phone-error-length");
        p.classList.replace("hidden", "active");
        phone.classList.add("border-red")
    } else{
        p = document.getElementById("phone-error-length");
        p.classList.replace("active", "hidden");
        phone.classList.remove("border-red");
        phone.classList.add("border-green");
    }
}
//adress.onblur

location.onblur = function(){
var locationValue = location.value;
    if(locationValue.length < 4){
        p = document.getElementById("location-error-length");
        p.classList.replace("hidden", "active");
        location.classList.add("border-red");
    }else {
        p = document.getElementById("location-error-length");
        p.classList.replace("active", "hidden");
        location.classList.add("border-green");
    }if(locationValue.search(/^[a-z0-9]+$/i)){
        p = document.getElementById("location-error-caracter");
        p.classList.replace("hidden", "active");
        location.classList.add("border-red");
    } else{
        p = document.getElementById("location-error-caracter");
        p.classList.replace("active", "hidden");
        location.classList.remove("border-red");
        location.classList.add("border-green");
    }
}
postal.onblur = function(){
var postalValue = postal.value;
    if(postalValue == Number(postalValue)){
        p = document.getElementById("postal-error-length");
        p.classList.replace("active", "hidden");
        if(postalValue.length == 4 || postalValue.length == 5){
            p = document.getElementById("postal-error-caracter");
            p.classList.replace("active", "hidden");
            postal.classList.remove("border-red");
            postal.classList.add("border-green");
        } else{
            p = document.getElementById("postal-error-caracter");
            p.classList.replace("hidden", "active");
            postal.classList.remove("border-green");
            postal.classList.add("border-red");
        }
    }else {
        p = document.getElementById("postal-error-length");
        p.classList.replace("hidden", "active");
        postal.classList.add("border-red");
    }
}
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
passwordRepeat.onblur = function(){
    var passwordRepeatValue = passwordRepeat.value;
    if(passwordRepeatValue != validatePasswordAlert){
        p = document.getElementById("password-repeat");
        p.classList.replace("hidden", "active");
        passwordRepeat.classList.add("border-red");
    } else{
        p = document.getElementById("password-repeat");
        p.classList.replace("active", "hidden");
        passwordRepeat.classList.remove("border-red");
        passwordRepeat.classList.add("border-green");
    }
}

// Event onfocus
name.onfocus = function(){
    p = document.getElementById("name-error-length");
    p.classList.replace("active", "hidden");
    p = document.getElementById("name-error-caracter");
    p.classList.replace("active", "hidden");
}
surname.onfocus = function(){
    p = document.getElementById("surname-error-length");
    p.classList.replace("active", "hidden");
    p = document.getElementById("surname-error-caracter");
    p.classList.replace("active", "hidden");
}
dni.onfocus = function(){
    p = document.getElementById("dni-error-length");
    p.classList.replace("active", "hidden");
}
dob.onfocus = function(){
    p = document.getElementById("date-error");
    p.classList.replace("active", "hidden");
}
phone.onfocus = function(){
    p = document.getElementById("phone-error-length");
    p.classList.replace("active", "hidden");
}
location.onfocus = function(){
    p = document.getElementById("location-error-length");
    p.classList.replace("active", "hidden");
    p = document.getElementById("location-error-caracter");
    p.classList.replace("active", "hidden");
}
postal.onfocus = function(){
    p = document.getElementById("postal-error-length");
    p.classList.replace("active", "hidden");
    p = document.getElementById("postal-error-caracter");
    p.classList.replace("active", "hidden");
}
email.onfocus = function(){
    p = document.getElementById("email-error");
    p.classList.replace("active", "hidden");
}
password.onfocus = function(){
    p = document.getElementById("password-error");
    p.classList.replace("active", "hidden");
}
passwordRepeat.onfocus = function(){
    p = document.getElementById("password-repeat");
    p.classList.replace("active", "hidden");
}






















































}