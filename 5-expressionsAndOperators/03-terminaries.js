let number = 6;

if(number > 0) {
    console.log(true);
} else {
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false);

if (number == 0) {
    console.log('Number is 0');
} else if ('Number >= 5') {
    console.log('Number is bigger than 5');
} else if (number < 0) {
    console.log('Number is smaller than 0');
} else {
    console.log('Nope');
}

(number == 0) ? console.log ('Number is 0') : (number >= 5) ? console.log ('Number is bigger than 5') : (number < 0) ? console.log('Number is smaller than 0') : console.log('Nope');

let age = 19;
(age >= 25) ? console.log('Number is bigger than 25') : (age >= 21) ? console.log('Number is smaller than 21') : (age >= 18) ? console.log('Number is greater than 18.') : (age <= 18) ? console.log('Number is smaller than 18'): console.log('Nope');

