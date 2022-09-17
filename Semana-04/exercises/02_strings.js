//2. Strings
//a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var text;
text = 'this text its going to be in uppercase';
console.log('Exercise 2.a): ', text.toUpperCase());

//b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var wordB;
wordB = 'Programming';
console.log('Exercise 2.b): ', wordB.substring(0,5));

//c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var wordC;
wordC = 'Programming';
console.log('Exercise 2.c): ', wordC.substring(8,11));

//d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var wordD, total;
wordD = 'programming ';
total = wordD.substring(0,1).toUpperCase() + wordD.substring(1, wordD.indexOf(' ')).toLowerCase();
console.log('Exercise 2.d): ', total);

//e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var wordE, index;
wordE = 'Radium Rocket'
index = wordE.indexOf(' ')
console.log('Exercise 2.e): ', index);

//f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var wordF, total;
wordF = 'professional programmer'
total = wordF.substring(0,1).toUpperCase() + wordF.substring(1, wordF.indexOf(' ')).toLowerCase()
+ ' ' + wordF.substring(wordF.indexOf(' ')+ 1, wordF.indexOf(' ')+2).toUpperCase() +
wordF.substring(wordF.indexOf(' ') + 2).toLowerCase();
console.log('Exercise 2.f): ', total);



