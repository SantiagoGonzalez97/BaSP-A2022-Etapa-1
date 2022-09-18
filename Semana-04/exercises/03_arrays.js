//3. Arrays
//a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.a): ', meses[4]);
console.log('Exercise 3.a): ', meses[10]);

//b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log('Exercise 3.b): ', meses);

//c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift('First');
meses.push('Last');
console.log('Exercise 3.c): ', meses);

//d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift();
meses.pop();
console.log('Exercise 3.d): ', meses);

//e) Invertir el orden del array (utilizar reverse).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log('Exercise 3.e): ', meses);

//f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.f): ', meses.join('-'));

//g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var meses;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Exercise 3.g): ', meses.slice(4,11));