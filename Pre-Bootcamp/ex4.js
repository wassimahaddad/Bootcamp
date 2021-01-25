const input = require('readline-sync');
let num = input.question("How many people are you going with?");
if (Number.isNaN(num*1) || num>20 || num<1 || (num-Math.floor(num))>0 ) {
    throw "stop execution";
}

const input2 = require('readline-sync');
let kosh = input2.question("Should it be Kosher? (y/n)");
let mehad = 0;
if (kosh == 'y' || kosh == 'Y') {
    const input3 = require('readline-sync');
    mehad = input3.question("Should it be Kashurut Lemehadrin? (y/n)");
    if (mehad == 'y' || mehad == 'Y' || mehad == 'n' || mehad == 'N') {
    }
    else { 
        throw "stop execution";
    }
}

else if (kosh == 'n' || kosh == 'N') {
}
else { 
    throw "stop execution";
}

const food = require('readline-sync');
kind = ['Meet', 'Vegetarian', 'Vegan'];
index = food.keyInSelect(kind, 'What kind of food do you want?');

let koshArr = ['The Kosher meat restaurant', 'The Kosher vegetarian restaurant', 'The Kosher vegan restaurant']
let mehadArr = ['The Mehadrin meat restaurant', 'The Mehadrin vegetarian restaurant', 'The Mehadrin vegan restaurant']
let neutArr = ['The Meat restaurant', 'The Vegetarian restaurant', 'The Vegan restaurant']

if ( kosh == 'n' || kosh == 'N') {
    if (index == 0) {
        console.log ('We recommend you go to: ' + neutArr[0])
    }
    else if (index == 1) {
        console.log ('We recommend you go to: ' + neutArr[1])
    } 
    else if (index == 2) {
        console.log ('We recommend you go to: ' + neutArr[2])
    } 
}

else if ( mehad == 'n' || mehad == 'N') {
    if (index == 0) {
        console.log ('We recommend you go to: ' + koshArr[0])
    }
    else if (index == 1) {
        console.log ('We recommend you go to: ' + koshArr[1])
    } 
    else if (index == 2) {
        console.log ('We recommend you go to: ' + koshArr[2])
    } 
}
else if ( mehad == 'y' || mehad == 'Y') {
    if (index == 0) {
        console.log ('We recommend you go to: ' + mehadArr[0])
    }
    else if (index == 1) {
        console.log ('We recommend you go to: ' + mehadArr[1])
    } 
    else if (index == 2) {
        console.log ('We recommend you go to: ' + mehadArr[2])
    } 
}



