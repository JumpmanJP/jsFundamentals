// PARAMETERS

function hi(name) {
           ///(1)
    console.log(`Hi ${name}`)
                     ///(2)
}

hi('Danielle');
hi('Zach');
    ////(3)

    // 1 - The parameter(s) we need to take into the function
    // 2 - Using string interpolation, we can refer to the parameter we passed
    // 3 - This is where we define what the parameter's value will be

function pet(animal) {
    console.log(`My puppy's name is ${animal}!`)
}

pet('Mo');
pet('Georgie');
pet('Nugget');



function person(fName,iName) {
    // let wName = fName + ' ' + iName;
    let wName = fName + iName;
    console.log(`Hello, my name is ${wName}!`)
}

person('JP', 'OG');
