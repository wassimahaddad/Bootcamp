
const input = require('readline-sync');
let userinp = input.question('\n'+"Please enter an integer:  ");

forceInt(userinp);
minmax(userinp);

function forceInt(n) { //accept only integer, repeat prompt when not integer
    let counter = 1;
    while (counter >0) {
        if (Number.isNaN(n*1) || (n-Math.floor(n))>0 ) {
         const input = require('readline-sync');
         let inp = input.question('\n'+"Input is not an integer, please enter an integer:  ");
         n = inp;
        counter +=1;
        }
        else {
        n = n;
        counter = 0;
        }
    }
}

function minmax (n) {    
    let newArr = []
    let counter =0;
    while (counter < n) {
        newArr.push(Math.floor(Math.random() * 50) + 1)
        counter +=1;
    }
    console.log('\n')
    console.log('This is a random array of',n,'elements:',newArr,'\n');
    newArr.sort(function(a, b){return a - b});
    console.log('Min is ',newArr[0]);
    console.log('Max is ',newArr[n-1],'\n');
}

