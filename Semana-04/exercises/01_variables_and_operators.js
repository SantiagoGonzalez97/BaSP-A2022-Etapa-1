//1. Variables y Operadores:
//a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var firstNumber, secondNumber, suma;
firstNumber = 5;
secondNumber= 10;
suma = firstNumber + secondNumber;
console.log('Exercise 1.a): ', suma);

//b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var firstName, lastName, fullName;
firstName = 'Santiago ';
lastName = 'González';
fullName = firstName + lastName;
console.log('Exercise 1.b): ', fullName);

//c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
var  firstVar, secondVar, bothVar;
firstVar = 'Javascript';
secondVar = 'Exercises';
bothVar = firstVar.length + secondVar.length;
console.log('Exercise 1.c): ', bothVar);