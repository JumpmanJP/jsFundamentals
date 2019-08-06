/* ****
? SWITCH
*/

let friend = 'Bob';

switch (friend) {
    case 'Autumn':
        console.log("Hey Autumn, when are we going rock wall climbing?")
        break;
    case 'Dave':
        console.log("Hey Dave, how is Cooper?")
        break;
    case 'Alecx':
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}

let dessert = 'Ice cream';

switch (dessert) {
    case 'pie':
        console.log ('Pie, pie, me oh my!')
        break;
    case 'cake':
        console.log ('Cake is great!')
        break;
    case 'Ice cream':
        console.log (`I scream for ${dessert}`)
        break;
    default:
        console.log('Not on the menu.')
}

let age = 5;

switch (true){
    case (age >= 25):
        console.log('Yay! You\'re an adult now.');
        break;
    case (age >= 21):
        console.log('You can legally drink now.');
        break;
    case (age <= 18):
        console.log('Still a kid.');
        break;
    default:
        console.log('Did not work.');
};