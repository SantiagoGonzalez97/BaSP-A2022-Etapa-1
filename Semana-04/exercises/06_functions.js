//6. Funciones
//a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
var myVarA;
function suma(a, b){
    return a + b;
}
myVarA = suma(1,2)
console.log('Exercise 6.a): ' + myVarA)

//b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaB(a,b) {
    if (isNaN(a) || isNaN(b)){
        alert('Exercise 6.b): ' + 'Parameter Error\nIts not a number');
        return NaN;
    }
    return a + b;
}
myVarA = sumaB(1,2)

//c) Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(i){
    if (Number.isInteger(i)){
        return true;
    }
    return false;
    }
i = validateInteger(10)

//d) A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).
function sumaD(a,b){
    if (isNaN(a) || isNaN(b)){
        alert('Exercise 6.d): ' + 'Parameter Error\nIts not a number');
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        if (!validateInteger(a)) {
            alert('Exercise 6.d): ' + 'Parameter Error\nIts not an integer: ' + Math.round(a));
        }
        if (!validateInteger(b)) {
            alert('Exercise 6.d): ' + 'Parameter Error\nIts not an integer: ' + Math.round(b));
        }
    } else {
        return console.log('Exercise 6.d): ' +  (a + b));
    }   
}
myVarA = sumaD(1,2)

//e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function validateInteger(a,b){
    if (!validateInteger(a) || !validateInteger(b)){
        if (!validateInteger(a)) {
            alert('Exercise 6.e): ' + 'Parameter Error\nIts not an integer: ' + Math.round(a));
        }
        if (!validateInteger(b)) {
            alert('Exercise 6.e): ' + 'Parameter Error\nIts not an integer: ' + Math.round(b));
        }
        return (a + b)
    }
    function sumaD(a,b){
        if (isNaN(a) || isNaN(b)){
            alert('Exercise 6.e): ' + 'Parameter Error\nIts not a number');
            return NaN;
        }
        else{
            validateInteger(a);
            validateInteger(b);
            return a + b
        }
    }
    myVarA = sumaD(1,2)
}

