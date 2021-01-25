console.log(
    '\n', '\n','\n',
    '**************************************************', '\n', 
    '*                                                *','\n', 
    '*           Welcome to the Math Quizz            *','\n', 
    '*      You are 5 question away from stardom      *','\n', 
    '*                                                *','\n', 
    '*          answer the questions below            *','\n', 
    '*           and show us what you got             *','\n', 
    '*                                                *','\n',  
    '**************************************************'
    )


const question1 = require('readline-sync');
options1 = [3.14156, 3.14157, 3.14158, 3.14159 ];
index = question1.keyInSelect(options1, 'which of the values above is the value Pi?');
let counter = 0;
if (index == 3) {
counter += 1;
}


const question2 = require('readline-sync');
options2 = [1.61603, 1.61703, 1.61803,1.61903 ];
index = question2.keyInSelect(options2, 'which of the values above is the golden ration?');
if (index == 2) {
counter += 1;
}


const question3 = require('readline-sync');
options3 = ['Aleph-zero', 'Inf-one', 'tinyfinity', 'cloudsy' ];
index = question3.keyInSelect(options3, 'which of the names above is the smallest inifinite number?');
if (index == 0) {
counter += 1;
}

const question4 = require('readline-sync');
options4 = [2020, 'MMXX', 11111100100, '7E5' ];
index = question4.keyInSelect(options4, 'which of the above values is different (decimal, roman, binary, hex):');
if (index == 3) {
counter += 1;
}

const question5 = require('readline-sync');
options5 = [20 , 21 , 22 , 23 ];
index = question5.keyInSelect(options5, 'Which of the above is the missing number in this Fibonacci sequence = 0, 1, 1, 2, 3, 5, 8, 13, __ , 34,');
if (index == 1) {
counter += 1;
}

if ( counter == 5) {
console.log('\n', '\n', 
    '**********************************************************************','\n', 
    '*                                                                    *','\n', 
    '*                              5 out of 5                            *','\n', 
    '*           You are an absolute genious! and a certified Math Wiz    *','\n', 
    '*                                                                    *','\n', 
    '*                                                                    *','\n', 
    '*                                                                    *','\n', 
    '*                      ****                      ****                *','\n', 
    '*                      ****                      ****                *','\n', 
    '*                                                                    *','\n', 
    '*                                                                    *','\n', 
    '*           ********                                  ********       *','\n', 
    '*              ********                             *******          *','\n', 
    '*                 ********                       *******             *','\n', 
    '*                     *********             *********                *','\n', 
    '*                          **********************                    *','\n', 
    '*                                                                    *','\n', 
    '*                                                                    *','\n', 
    '**********************************************************************','\n', 
    )
}
else if ( counter == 4) {
console.log('\n', '\n', 
    '**********************************************************************','\n', 
    '*                                                                    *','\n', 
    '*                              4 out of 5                            *','\n', 
    '*          You are very smart, you know more than most people        *','\n',
    '*                                                                    *','\n',
    '**********************************************************************','\n', 
    )
}
else if ( counter == 3) {
console.log('\n', '\n', 
    '**********************************************************************','\n', 
    '*                                                                    *','\n', 
    '*                              3 out of 5                            *','\n', 
    '*                     Very good, keep up the good work               *','\n',
    '*                                                                    *','\n',
    '**********************************************************************','\n', 
    )
}
else if ( counter == 2) {
console.log('\n', '\n', 
    '**********************************************************************','\n', 
    '*                                                                    *','\n', 
    '*                             2 out of 5                             *','\n', 
    '*                  You need to work on that math muscle              *','\n',
    '*                                                                    *','\n',
    '**********************************************************************','\n', 
    )
}
else if ( counter == 1) {
console.log('\n', '\n', 
    '**********************************************************************','\n', 
    '*                                                                    *','\n', 
    '*                             1 out of 5                             *','\n', 
    "*         Don't worry about it, maybe math is not your thing         *",'\n',
    '*                                                                    *','\n',
    '**********************************************************************','\n', 
    )
}
else {
console.log( '\n', '\n', 
    '**********************************************************************','\n',
    '*                                                                    *','\n', 
    '*                             0 out of 5                             *','\n', 
    '*                  Tell me more about your childhood                 *','\n',
    '*                                                                    *','\n',
    '**********************************************************************','\n', 
    )
}
