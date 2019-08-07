//Expressions
function hi(){
    (1)   (2)  (3)
    console.log('HI!');
}

//     vs.

let hey = function hi(){
    console.log('HI!');
}

// The variable 'hey' is now representative of the function 'hi()'

/*
Differece between declaration and expression:
Declaration gets hoisted
Expression does not
*/

// ANONOMOUS FUNCTION

let hi = function (){
    console.log('HEY!');
}