'use strict';

/*
  Exercice n°1
*/

//My Digital School Forever

/*
  Exercice n°2
*/

/*
  My Digital School Forever every day
*/

/*
  Exercice n°3
*/

var string = '42';
var number = 42;
var float = 42.0;
var bool = true;
var array = [string, number, float];
var date = new Date();
var object = {
    'string': string,
    'number': number,
    'float': float,
}
var undef = undefined;
var nul = null;

/*
  Exercice n°4
*/

var my42count = 'quarante-deux';
console.log(my42count.length);

/*
  Exercice n°5
*/

var isOtherVariable = (otherVariable) => otherVariable || 42;

/*
  Exercice n°6
*/

var myArray42 = ['q','u','a','r','a','n','t','e','d','e','u','x'];

/*
  Exercice n°7
*/

var myArray42Len = myArray42.length;
console.log(myArray42Len)

/*
  Exercice n°8
*/

var resultOfConcat = "La grande réponse sur la vie, l’univers et le reste !".concat(myArray42.join(""));
console.log(resultOfConcat);

/*
  Exercice n°9
*/

var verifyArray42 = [Math.floor(Math.random() * 42) + 1];
console.log(verifyArray42.includes(42));

/*
  Exercice n°10
*/

var my42type = (variable) => (typeof variable).toString();
console.log(my42type(string))
console.log(my42type(number))
console.log(my42type(float))
console.log(my42type(bool))
console.log(my42type(array))
console.log(my42type(date))
console.log(my42type(object))
console.log(my42type(undef))
console.log(my42type(nul))

/*
  Exercice n°11
*/

var compute42 = (32+10).toString();
console.log(compute42);

/*
  Exercice n°12
*/

var transfor42inLetters = (4242424242).toString().split('42').join('quarante-deux ');
console.log(transfor42inLetters);

/*
  Exerice n°13
*/

var a = 24;
var b = 42;
var c = a;
a = b;
b = c;
console.log(a, b);