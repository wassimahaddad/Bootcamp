message('welcome');
let words = [
    'nature','highway','bicycle','station','tower','telephone',
    'computer','forward','function','strawberry','breakfast',
    'metal','jazz','banana','factory','blizzard','satisfaction'];

let rndWord = randomWord(words); // pick a random work from the "words" array
let resultArr = hideWord(rndWord); // mask all letters with asterisks and put in array
let resultCounter = 0; //counter for successfull guesses.
let attempt = 10;
let inputArr = [0];  // array to insert all successful input attempts in.
let inputItem = 0;
console.log(' _______________________________________________________________________________');
console.log('|                                                                               |');
console.log('| In this game you will be presented with a masked word that you have to guess. |');
console.log('| You can try guessing the word letter by letter, or by typing the whole word.  |');
console.log('| You have 10 guessing attempts, you will lose an attempt at each wrong guess.  |');
console.log('|                                                                               |');
console.log('|  - A right guess will expose all the occurences of the guessed letter.        |');
console.log('|_______________________________________________________________________________|');
console.log('\n',"Let's start",'\n');
console.log('The word is:',commaRemove(resultArr),'\n'); 


while (attempt > 0 && resultCounter<rndWord.length) {
    const input = require('readline-sync');
    let str0 = input.question('you have '+attempt+' attempts, please enter one letter or a '+rndWord.length+'-letter word: ');
    let str = str0.toLowerCase();
    let result = letterIndex(rndWord,str);  // Index of input if exists

    while (validInput(str)>0 || (str.length > 1 && str.length !=  rndWord.length)) {
        let validStr0 = input.question('Ivalid input, please enter one letter or a '+rndWord.length+'-letter word: ');
        let validStr = validStr0.toLowerCase();
        str = validStr;
        result = letterIndex(rndWord,str);
    }      
   
    if (str == rndWord) {
        console.log('\n');
        console.log("That's right, the word is: ",rndWord,'\n');
        message('amazing');
        resultArr = str.split('');
        attempt =  -1;
    }

    else if (result.length > 0)    {

        if (uniqueInput(inputArr,str) != 0) {  //count only unique input
            resultCounter = resultCounter+result.length; 
            attempt = attempt;
            inputArr[inputItem] = str; 
            inputItem +=1;            
        }
        else {
            resultCounter = resultCounter;
            attempt = attempt;
                        
        }             
    }

    else {
        resultCounter = resultCounter;
        attempt = attempt-1;
    }      
    
    if (attempt != -1) {
        console.log('\n');
        resultArr = insertResult(result, resultArr, str);  
        console.log(commaRemove(resultArr),'\n');       
    }

    if (resultCounter == rndWord.length) {
        message('good job');
    }

    else if (attempt == 0) {
        console.log('You have',attempt,'attempts left, the word is "'+rndWord+'"','\n');
        console.log('Good luck next time','\n');
    } 
  
}

// functions --------------------------------------------------------------------------



function validInput(a) { // check if input is valid: lowercase and uppercase letters only

    
    let strArr = a.split('');   //insert input in array
    let len = a.length;        //how many elements
    let counter = 0;
    let legit = 0;
    let ln = 0;
    let cnt = 0;
    let invalid = 0;
    if (Number.isNaN(a.charCodeAt()) == true) { // block spacebar and enter
        
        invalid = 1;
        counter = len;
    }
    else {
    while ( counter < len) {   //check symbols and/or numbers)

        legit = strArr[counter];  // break array into single elements
        ln = legit.length;           // length of each element
        cnt = 0;
        
        
        while (cnt < ln ) {
            if (Number.isNaN(a.charCodeAt()) || legit.charCodeAt(cnt) < 65 || legit.charCodeAt(cnt)> 122 || ( legit.charCodeAt(cnt)   > 90 &&  legit.charCodeAt(cnt)  < 97) ) {  //check if not letters (lowercase and caps)
                invalid = invalid+1;
            }    
            else {
                invalid = invalid;
            }       
            cnt +=1;  
        }
        
        counter += 1;       //look for symbols/number in the next element
    }
    }
    return invalid;
}


function uniqueInput (a,b) { // check if input has already been used, return 0 for repetition
    let len = a.length;
    let counter = 0;
    while (counter <len) {
        if (b == a[counter]) {
            counter = len;
            return 0;
        }
        else {
            counter +=1;
        }
        
    }
    
}

function commaRemove(a) { //convert array back to a one syllable string 
    let len = a.length;
    let counter = 0;
    while (counter < len) {
        a = a.toString().replace(',','');
        counter += 1;
    }
    return a;
}

function letterIndex(a,b) { //check if letter exists in word, returns index
    loopcounter = 0;
    let arr = a.split('');
    let len = arr.length;
    let location = [];
    let arrcounter = 0;
    while (loopcounter < len) {
        if (arr[loopcounter] == b) {
            location[arrcounter] = loopcounter;
            arrcounter += 1;
        }              
        loopcounter += 1;        
    }
    return location;
}



function insertResult(a,b,c) { // insert result in all-asterisk array 
    let len = a.length;
    let str = b;
    let counter = 0;
    
    while (counter < len) {
        str[a[counter]] = c;
        counter +=1;
    }  

    return str;
}



function hideWord(a){ // set all array members to *
    let len = a.length;
    counter  = 0;
    let asterisk = [];
    while (counter < len) {
        asterisk[counter] = '*';
        counter += 1;
        }
    return asterisk;    
}



function randomWord(a) {   //pick random word
    let len = a.length-1;
    let idx = Math.floor(Math.random() * len);
    return a[idx];
}

function message(a) {

    if (a == 'welcome') {

        console.log('\n','\n','\n',
    
        '██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗ ','\n',
        '██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗','\n',
        '██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║','\n',
        '██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║','\n',
        '╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝','\n',
        ' ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝ ','\n',
                                                                                            
            '     ██╗  ██╗ █████╗ ███╗   ██╗ ██████╗     ███╗   ███╗ █████╗ ███╗   ██╗            ','\n',
            '     ██║  ██║██╔══██╗████╗  ██║██╔════╝     ████╗ ████║██╔══██╗████╗  ██║            ','\n',
            '     ███████║███████║██╔██╗ ██║██║  ███╗    ██╔████╔██║███████║██╔██╗ ██║            ','\n',
            '     ██╔══██║██╔══██║██║╚██╗██║██║   ██║    ██║╚██╔╝██║██╔══██║██║╚██╗██║            ','\n',
            '     ██║  ██║██║  ██║██║ ╚████║╚██████╔╝    ██║ ╚═╝ ██║██║  ██║██║ ╚████║            ','\n',
            '     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ','\n'
        );
    }
    else if (a == 'amazing') {

        console.log('\n',

        '██╗   ██╗ ██████╗ ██╗   ██╗     █████╗ ██████╗ ███████╗ ','\n',   
        '╚██╗ ██╔╝██╔═══██╗██║   ██║    ██╔══██╗██╔══██╗██╔════╝    ','\n',
        ' ╚████╔╝ ██║   ██║██║   ██║    ███████║██████╔╝█████╗      ','\n',
        '  ╚██╔╝  ██║   ██║██║   ██║    ██╔══██║██╔══██╗██╔══╝      ','\n',
        '   ██║   ╚██████╔╝╚██████╔╝    ██║  ██║██║  ██║███████╗    ','\n',
        '   ╚═╝    ╚═════╝  ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ','\n',
                                                           
        ' █████╗ ███╗   ███╗ █████╗ ███████╗██╗███╗   ██╗ ██████╗   ','\n',
        '██╔══██╗████╗ ████║██╔══██╗╚══███╔╝██║████╗  ██║██╔════╝   ','\n',
        '███████║██╔████╔██║███████║  ███╔╝ ██║██╔██╗ ██║██║  ███╗  ','\n',
        '██╔══██║██║╚██╔╝██║██╔══██║ ███╔╝  ██║██║╚██╗██║██║   ██║  ','\n',
        '██║  ██║██║ ╚═╝ ██║██║  ██║███████╗██║██║ ╚████║╚██████╔╝  ','\n',
        '╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝','\n','\n'
        );
    }
    
    else if (a == 'good job') {

        console.log('\n',

    ' ██████╗  ██████╗  ██████╗ ██████╗          ██╗ ██████╗ ██████╗ ','\n',
    '██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗         ██║██╔═══██╗██╔══██╗','\n',
    '██║  ███╗██║   ██║██║   ██║██║  ██║         ██║██║   ██║██████╔╝','\n',
    '██║   ██║██║   ██║██║   ██║██║  ██║    ██   ██║██║   ██║██╔══██╗','\n',
    '╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝    ╚█████╔╝╚██████╔╝██████╔╝','\n',
    ' ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝      ╚════╝  ╚═════╝ ╚═════╝','\n','\n'
        );
    }
}