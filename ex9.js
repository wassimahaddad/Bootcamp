const input = require('readline-sync');
let num = input.question("Please choose a natural number: ");
let x = 1;

while ( x <= num) {

let y = 1;
let counter = 0;


while ( y < x) {
    y += 1;
    if (x % y == 0) {
        counter += 1;
    }
    else {
        counter = counter;
    }
}
if (counter == 1 ) {
console.log(x);
}

x += 1

}
