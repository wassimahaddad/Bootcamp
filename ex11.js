const input = require('readline-sync');
let str = input.question("please enter a work to check if it's a plaindrome: ");
let strRev = str.toLowerCase().split('').reverse().join('');
if (str.toLowerCase() == strRev) {
    console.log('\n',"It's a palindrome",'\n')
}
else {
console.log('\n',"it's not a palindorme",'\n');
}