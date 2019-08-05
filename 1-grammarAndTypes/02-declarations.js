// Declarations

let a = 2;

let     b       =       1;
/*(1)   (2)     (3)     (4)

1-Keyword
2- Variable Name
3- Assignment Operator
4- Variable value
*/

let hello;
let Hello;
let firstName = 'JP';

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
  (=) assignment operator is NOT the same as the equal operator (== or ===)
*/

let x;
console.log('Declaration',x);

x = 10;
console.log('Initionalization 1:',x);

x = 33;
console.log('Inditialization 2:',x);

let y = 'Hello';
console.log('Both: ' , x, y);

//const

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);


