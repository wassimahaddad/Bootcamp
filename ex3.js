let numArr = ['Zero', 'One' , 'Two' , 'Three' , 'Four' , 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const input = require('readline-sync');
let num = input.question("Enter a number between 0 and 9: ");
console.log(numArr[num]);
