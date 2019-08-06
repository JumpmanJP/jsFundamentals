//Hoisting

console.log(scissors);

scissors = 'blue';

console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log ('this is all hoisted!');
}

var a = 'This is not hoisted';

//functions get hoisted. Variables do not.

// Hoisting does not exist. It is an illusion. Code doesn't acutally get moved. 
// JS reads through code twice remembering left hand side of variables and functions. 
asdf