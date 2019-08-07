// CALLING FUNCTIONS

function hi() {
    console.log('HI!');
}

console.log(hi ());
// This is how we call, or 'invoke' our function
// It's the START button on a machine.

function list() {
for(let i = 1; i<=10; i++){
    console.log(i);
}
list();

let arr = ['This', 'is', 'really', 'cool'];
//
// function arrList() {
//     for(let word in arrList){
//         console.log(arr[word])
//     }
// }

// arrList();

for(word of arr) {
    console.log(word)
}

arrList();