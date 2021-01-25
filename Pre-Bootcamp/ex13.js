const input = require('readline-sync');
console.log('\n')
let str = input.question("please enter a string: ");
console.log('\n')
let strArr = str.split(' ');   //insert input in string
let len = strArr.length;        //how many "words"
let counter = 0;
let legit = 0;
let ln = 0;
let cnt = 0;

while ( counter < len) {   //remove non-words (strings with symbols and/or numbers)

legit =  strArr[counter];  // break array into single "words"
ln = legit.length           // length of each "word"
cnt = 0;

while (cnt < ln ) {
    if ( legit.charCodeAt(cnt) < 65 || legit.charCodeAt(cnt)> 122 || ( legit.charCodeAt(cnt)   > 90 &&  legit.charCodeAt(cnt)  < 97) ) {  //check if not letters (lowercase and caps)
    
    strArr.splice(counter, 1)   //remove non-word from string
    len -= 1;                   // reduce length of array afetr non-word removal
    counter -= 1;               // reduce counter to match new array length
    cnt = ln;                   //stop the loop to avoid removing other members of the array when second number/symobol or more are found in the same "word".
    }
    else {
    cnt += 1
    }
    
    
}

counter += 1;       //look for symbols/number in the next "word"
}


len = strArr.length;  //new string length after non-words removal
counter =0;             // reset counter
let newArr = [];        //array that contains the number of letters for each of the words in the new string
let big = 0;        
let long = 0;

while (counter < len) {      // look for the longer "word"
    newArr[counter] = strArr[counter].length;
    if (newArr[counter] > big) {
        long = strArr[counter]; // longer word
        big = newArr[counter];  //number of letters of longer word
    }
    
    else if (newArr[counter] == big) {   //if two words of the same length are found
        long = long+','+strArr[counter];
    }
    else {
        long = long;
        big = big;
    }
    
    counter += 1;
    }
    
    if (long == 0) {
        console.log('\n','The text entered does not contain words', '\n');   
    }
    else {
    console.log('\n','The longest words in the string: ', long, '\n');
    }
    




