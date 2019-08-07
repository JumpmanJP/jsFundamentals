for(let i = 0; i<10; i++){
    console.log(i);
}

for(let i = 0; i<=20; i +=2){
    console.log(i);
}

// /*
// NOTE: There is a danger of infinite loops. There are three main parts to a loop. 
// 1) The 'for' keyword
// 2) A variable initialization and declaration. 
// 3) The condition that needs to be met in order to end the loop.
// 4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 
// 5) Inside of the code block for the loop, refers to the current value of the variable for that loop 
// */
//  (initialization ; stopping condition; iteration statement)
for (let i = 0; i < 10; i++) {
    //(1)     (2)    (3)     (4)
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    //           (5)
    }

    for(let i = 10; i>=0; i --){
        console.log(i);
    }


    for (let i = 0; i >=-24; i-=2){
        console.log(i);
    }

    let name = 'jp'
    for(let i = '0'; i < name.length; i++){
        console.log(name[i]);
    }

let sum = 0
for(let i = 1; i <= 50; i++){
    sum += i
}

console.log(sum);
