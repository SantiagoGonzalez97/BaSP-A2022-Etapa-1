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
    if(dniValue.length < 8 && isNaN(dniValue) || dniValue === null || dniValue === ''){
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
phone.onfocus = function(){
    var phoneValue = phone.value;
    if(phoneValue < 11 && isNaN(phoneValue) || phoneValue === null || phoneValue === '' ){
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

























































}