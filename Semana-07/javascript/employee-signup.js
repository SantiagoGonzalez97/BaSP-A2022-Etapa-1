window.onload = function(){
//Validation names
var nombre = document.getElementById("name");
var surname = document.getElementById("surname");
var dni = document.getElementById("dni");
var dob = document.getElementById("dob");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var location = document.getElementById("location");
var postal = document.getElementById("postal");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordRepeat = document.getElementById("password-repeat");
var buttonCreate = document.getElementById("btn-create");


// Alert validations
var validateNameAlert = false;
var validateSurnameAlert = false;
var validateDniAlert = false;
var validateDobAlert = false;
var validatePhoneAlert = false;
var validateAddressAlert = false;
var validateLocationAlert = false;
var validatePostalAlert = false;
var validateEmailAlert = false;
var validatePasswordAlert = false;
var validatePasswordRepeatAlert = false;

//Event onblur
nombre.onblur = function(){
var nameValue = nombre.value;
    if(nameValue.length < 4 || nameValue === null || nameValue === ''){
        p = document.getElementById("name-error-length");
        p.classList.replace("hidden", "active");
        nombre.classList.remove("border-green");
        nombre.classList.add("border-red");
    }else{
        p = document.getElementById("name-error-length");
        p.classList.replace("active", "hidden");
        nombre.classList.remove("border-red");
        nombre.classList.add("border-green");
        validateNameAlert = true;
    }
    if(nameValue.search(/[^0-9]/) < 0){
        p = document.getElementById("name-error-caracter");
        p.classList.replace("hidden", "active");
        nombre.classList.remove("border-green");
        nombre.classList.add("border-red");
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
        surname.classList.remove("border-red");
        surname.classList.add("border-green");
        validateSurnameAlert = true;
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
        validateDniAlert = true;
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
        validateDobAlert = true;
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
        validatePhoneAlert = true;
    }
}
address.onblur = function() {
    var addressValue = address.value;
    if (addressValue.length < 5){
        p = document.getElementById("address-error-length");
        p.classList.replace("hidden", "active");
        address.classList.add("border-red");
    } else {
        p = document.getElementById("address-error-length");
        p.classList.replace("active", "hidden");
        if (addressValue.indexOf(" ") === -1){
            var p = document.getElementById("address-error-space");
            p.classList.replace("hidden", "active");
            address.classList.add("border-red");
        } else {
            p = document.getElementById("address-error-space");
            p.classList.replace("active", "hidden");
            var letterAddress = 0;
            var numberAddress = 0;
            var spacesAddress = 0;
            for (var i = 0; i < addressValue.length; i++) {
                letra = addressValue.substring(i,i+1);
                var ascii = letra.charCodeAt();
                if (letra == Number(letra) && ascii != 32){
                    numberAddress += 1;
                } else if (!((ascii < 65) || (ascii > 90 && ascii < 97) || (ascii > 122) && (ascii != 209 && ascii != 241))){
                    letterAddress += 1;
                } else if (ascii == 32 ){
                    spacesAddress += 1
                }
            }
            if(letterAddress == 0 || numberAddress == 0){
                var p = document.getElementById("address-error-caracter");
                p.classList.replace("hidden", "active");
                address.classList.add("border-red");
            } else if(letterAddress + numberAddress + spacesAddress == addressValue.length){
                p = document.getElementById("address-error-caracter");
                p.classList.replace("active", "hidden");
                var p2 = document.getElementById("address-error-caracter-special");
                p2.classList.replace("active", "hidden");
                address.classList.remove("border-red");
                address.classList.add("border-green");
                validateAddressAlert = true;
            } else {
                var p = document.getElementById("address-error-caracter-special");
                p.classList.replace("hidden", "active");
                address.classList.add("border-red");
            }
        }
    }
}
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
        validateLocationAlert = true;
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
            validatePostalAlert = true;
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
        return passwordOk = password.value;
    }
}
passwordRepeat.onblur = function(){
    var passwordRepeatValue = passwordRepeat.value;
    if(passwordRepeatValue != passwordOk){
        p = document.getElementById("password-repeat-error");
        p.classList.replace("hidden", "active");
        passwordRepeat.classList.add("border-red");
    } else{
        p = document.getElementById("password-repeat-error");
        p.classList.replace("active", "hidden");
        passwordRepeat.classList.remove("border-red");
        passwordRepeat.classList.add("border-green");
        validatePasswordRepeatAlert = true;
    }
}

// Event onfocus
nombre.onfocus = function(){
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
address.onfocus = function(){
    p = document.getElementById("address-error-length");
    p.classList.replace("active", "hidden");
    p = document.getElementById("address-error-space");
    p.classList.replace("active", "hidden");
    p = document.getElementById("address-error-caracter");
    p.classList.replace("active", "hidden");
    p = document.getElementById("address-error-caracter-special");
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

//Event onclick
    buttonCreate.onclick = function(e){
        e.preventDefault()
        if(validateNameAlert && validateSurnameAlert && validateDniAlert && validateDobAlert && validatePhoneAlert
            && validateAddressAlert &&validateLocationAlert && validatePostalAlert && validateEmailAlert
            && validatePasswordAlert && validatePasswordRepeatAlert){
            gett();
        }
    }

//Week-07
function locall(){
    localStorage.setItem('name', nombre.value);
    localStorage.setItem('lastName', surname.value);
    localStorage.setItem('dni', dni.value);
    localStorage.setItem('dob', dob.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', location.value);
    localStorage.setItem('zip', postal.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}

function gett(){
fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup' + '?name=' + nombre.value + '&lastName=' + surname.value
    + '&dni=' + dni.value + '&dob=' + dob.value  + '&phone=' + phone.value + '&address=' + address.value + '&city='
    + location.value + '&zip=' + postal.value + '&email=' + email.value + '&password=' + password.value)
    .then(function(res){
        return res.json();
    })
    .then(function(responseJson){
        if(responseJson.success){
            alert('Registration successfully!\n' + responseJson.msg + '\nName: ' + nombre.value + '\nLast name: ' + surname.value
            + '\nDNI: ' + dni.value + '\nDate of birth: ' + dob.value + '\nPhone: ' + phone.value + '\nAddress: ' + address.value
            + '\nCity: ' + location.value + '\nZip: '+ postal.value + '\nEmail: ' + email.value + '\nPassword: ' + password.value);
            locall();
        } else{
            alert('Error: Failed to register');
        }
    })
    .catch(function(error){
        console.log(error);
        alert('Error');
    })
}
}
function getItems(){
    nombre.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('surname');
    dni.value = localStorage.getItem('dni');
    dob.value = localStorage.getItem('dob');
    phone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    location.value = localStorage.getItem('city');
    postal.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
}