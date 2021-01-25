
const input = require('readline-sync');

let num1 = input.question("Enter a number: ");
let num2 = input.question("Enter another number: ");


function makes10(n) {
 
    if (n == 10) {
        return "makes 10";
    }
    else {
        return "Nope";
    }
}
console.log(makes10(Number(num1)+Number(num2)));


