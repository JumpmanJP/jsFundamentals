/*******
FAT ARROW FUNCTIONS
 */

 let hi = () => {
//     (1)   (2)
     console.log('hello!')
 }

 hi();

// -> NOT THE SAME AS =>
// 1 - We need to set the fat arrow function to a ariable
// 2 - We use the 'fat arrow' to signify its a function.

// Block Body
// *****
let hi = () => {
    console.log('hi')
}

let apple = (x) => {
    console.log(`There are ${x} apples in the basket.`);
}
apples(12);

// Consice Body
// *****
let hi = () => console.log('hi');
let apple = x => console.log(`There are ${x} apple in the basket.`);
apples (10);
// More than one parameter will require parenthesis
// Return (if one-line fat arrow function) is implied

//LINE BREAKS ARE BAD
let func = () => console.log('hi'); //thsi works

/*
let func = ()
//    => console.log('hi'); // not okay
*/

