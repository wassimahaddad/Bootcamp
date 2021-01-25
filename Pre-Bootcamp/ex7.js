const input = require('readline-sync');
let num = input.question("Please choose a positive number: ");
let counter = num;
let fact = num;

while  (counter != 1 )     {
    if (Number.isNaN(num*1) == false && (num-Math.floor(num)) == 0) {
    counter -= 1;
    num = num*counter;
    } 
    else {
    num = input.question("Please choose a positive number: ");
    counter = num;
    }
}
console.log('\n',fact+'!','=',num, '\n');