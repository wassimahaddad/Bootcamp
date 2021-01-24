let bank1 = 50;
let bank2 = 50;
let stop = 0;
console.log('\n','\n','\n','\n');
message('welcome')

const input1 = require('readline-sync');
let name1 = input1.question('\n'+"What's your name?  ");
name1 = forceName(name1);
console.log('\n')

console.log('Hello '+name1+',','\n','\n','Who would you like to play against?');
const input2 = require('readline-sync');
opon = ['Computer', 'Another human player'];
index = input2.keyInSelect(opon, 'Please select');

if ( index == 1) {

    const input3 = require('readline-sync');
    let name2 = input3.question('\n'+"What's the name of the second player?  ");
    name2 = forceName(name2);
    name2 = forceDiffName(name2,name1);

    console.log('\n',
    'Alright then',name1,'and',name2+', I will draw two cards, one for each of you, the player with the bigger card wins the round', '\n','\n',
    name1,'you have',bank1,'of cash','\n',
    name2,'you have',bank2,'of cash'
    );

    counter = 1;

    while (bank1 > 0 && bank2 > 0 && stop != -1) {
    const input3 = require('readline-sync');
    console.log('\n')
    let bet1 = input3.question(name1+', please place your bet for the this round (1 to 50):  ');
    let bet2 = input3.question(name2+', please place your bet for the this round (1 to 50):  ');
    console.log('\n')

    if (bet1 > bank1 || bet2 > bank2)  {
        stop = -1;        
        message('liar');
    }

    else if (bet1 == 0  || bet2 == 0)  {
        stop = -1;        
        message('chicken');
        console.log('Maybe next time, goodbye chicken','\n');  
    }

    else if (bet1 < 0 || bet2 <0 )  {
        stop = -1;        
        message('bad');
    }
    

    else {
    
    let player1 = Math.floor(Math.random() * 12) + 1;
    let player2 = Math.floor(Math.random() * 12) + 1;
    let suit = ['\u2660','\u2663','\u2665','\u2666']

    if (player1 > player2) {
        const round = require('readline-sync');
        answer = ['I want to play another round', 'I want to go home with my money'];
        bank1 = bank1+Number.parseInt(bet1);
        bank2 = bank2-Number.parseInt(bet2);
        let item1 = suit[Math.floor(Math.random() * suit.length)];
        let item2 = suit[Math.floor(Math.random() * suit.length)];
        console.log('\n',name1+"'s card is:", player1,item1,'\n',name2+"'s card is:", player2,item2,'\n','\n');
        if (bank2>0) {        
            console.log('Congratulations!',name1,'you won!','\n','\n')
            message('win');
            console.log('\n',name1,'you now have',bank1,'ILS','\n',name2,'you now have',bank2 ,'ILS.','\n','\n','What would you like to do next?')
            index = round.keyInSelect(answer, 'Please Select');
            stop = index;
            if (stop == 1) {
                message('home');
                console.log('\n',name1, 'you have won', bank1,'ILS in this game', '\n',
                name2, 'you have won',bank2,'ILS in this game','\n','\n','They are yours for the taking','\n', 'Goodbye','\n')
                stop = -1;
            }
            else {
                stop = stop;
            }
        }
        else {
            console.log('Congratulations!',name1,'you won, you now have',bank1 ,'ILS','\n','\n')
            message('win');
            console.log(name2,'you lost, you have',bank2,'money left','\n','\n')     
            message('game over');
            stop = -1;
        }
        console.log('------------------------------------------------------------------------------------')
    }

    else if (player2 > player1) {
        
        const round = require('readline-sync');
        answer = ['I want to play another round', 'I want to go home with my money'];
        bank2 = bank2+Number.parseInt(bet2);
        bank1 = bank1-Number.parseInt(bet1);
        let item1 = suit[Math.floor(Math.random() * suit.length)];
        let item2 = suit[Math.floor(Math.random() * suit.length)];
        console.log('\n',name1+"'s card is:", player1,item1,'\n',name2+"'s card is:", player2,item2,'\n','\n');
        if (bank1>0) {
            console.log('Congratulations!',name2,'you won!','\n','\n')
            message('win');
            console.log('\n',name1,'you now have',bank1,'ILS','\n',name2,'you now have',bank2 ,'ILS.','\n','\n','What would you like to do next?')
            index = round.keyInSelect(answer, 'Please Select');
            stop = index;
            if (stop == 1) {
                message('home');
                console.log('\n',name1, 'you have won', bank1,'ILS in this game', '\n',
                name2, 'you have won',bank2,'ILS in this game','\n','\n','They are yours for the taking','\n', 'Goodbye','\n')
                stop = -1;
            }
            else {
                stop = stop;
            }
        }
        else {
            console.log('Congratulations!',name2,'you won, you now have',bank2 ,'ILS','\n','\n')
            message('win');
            console.log(name1,'you lost, you have',bank1,'money left','\n','\n')     
            message('game over');
            stop = -1;
        }
        console.log('------------------------------------------------------------------------------------')
    
    }

    else if (player1 == player2) {
        const round = require('readline-sync');
        answer = ['I want to play another round', 'I want to go home with my money'];
        bank1 = bank2;
        bank2 = bank2;
        let item1 = suit[Math.floor(Math.random() * suit.length)];
        let item2 = suit[Math.floor(Math.random() * suit.length)];
        console.log('\n',name1+'s card is:', player1,item1,'\n',name2+'s card is:', player2,item2,'\n','\n');
        console.log('You are even','\n','\n')
        message('even');
        console.log('\n',name1,'you now have',bank1,'ILS','\n',name2,'you now have',bank2 ,'ILS.','\n','\n','What would you like to do next?')
        index = round.keyInSelect(answer,'Please Select');
        stop = index;
        if (stop == 1) {
            message('home');
            console.log('\n',name1, 'you have won', bank1,'ILS in this game', '\n',
            name2, 'you have won',bank2,'ILS in this game','\n','\n','They are yours for the taking','\n', 'Goodbye','\n')
            stop = -1;
        }
        else {
            stop = stop;
        }
        console.log('------------------------------------------------------------------------------------')
    }

    


    }
    counter +=1;
    }

    
}


else {

    console.log('\n','\n','Hello again',name1+', I am glad you chose to play against me','\n','\n','You and I are going to play a card game, you will place a bet, I will draw two cards,','\n',
    'one for you and one for me, the player with the bigger card wins the round.',
    '\n','\n',
    'You have',bank1,'ILS of cash')
    
    counter = 1;
    
    while (bank1 > 0 && stop != -1) {
    const input3 = require('readline-sync');
    console.log('\n')
    let bet1 = input3.question('Place your bet for the this round (1 to 50):  ');
    console.log('\n')
    if (bet1 > bank1)  {
        stop = -1;        
        message('liar');
    }
    
    else if (bet1 == 0 )  {
        stop = -1;       
        message('chicken');
        console.log('Maybe next time, goodbye chicken','\n');  
    }
    
    else if (bet1 < 0)  {
        stop = -1;        
        message('bad');
    }
    
    else {
      
    let player1 = Math.floor(Math.random() * 12) + 1;
    let computer = Math.floor(Math.random() * 12) + 1;
    let suit = ['\u2660','\u2663','\u2665','\u2666']
    
    if (player1 > computer) {
        const round = require('readline-sync');
        answer = ['I want to play another round', 'I want to go home with my money'];
        bank1 = bank1+Number.parseInt(bet1);
        let pitem = suit[Math.floor(Math.random() * suit.length)];
        let citem = suit[Math.floor(Math.random() * suit.length)];
        console.log(' Your card is:', player1,pitem,'\n','My card is:  ', computer,citem,'\n','\n');        
        message('win');
        console.log('Congratulations! You won, you now have',bank1 ,'ILS, What would you like to do next?')
        index = round.keyInSelect(answer, 'Please Select');
        stop = index;
        if (stop == 1) {           
            message('home');
            console.log('\n','It was a pleasure playing gainst you, you have won', bank1, 'ILS in this game and they are yours for the taking','\n', 'Goodbye','\n')
            stop = -1;
        }
        else {
            stop = stop;
        }
        console.log('------------------------------------------------------------------------------------')
    }
    
    else if (player1 == computer) {
        const round = require('readline-sync');
        answer = ['I want to play another round', 'I want to go home with my money'];
        bank1 = bank1;
        let pitem = suit[Math.floor(Math.random() * suit.length)];
        let citem = suit[Math.floor(Math.random() * suit.length)];
        console.log(' Your card is:', player1,pitem,'\n','My card is:  ', computer,citem,'\n','\n');       
        message('even');
        console.log('We are even, you still have',bank1 ,'ILS, What would you like to do next?')
        index = round.keyInSelect(answer, 'Please Select');
        stop = index;
        if (stop == 1) {           
            message('home');
            console.log('\n','It was a pleasure playing gainst you, you have won', bank1, 'ILS in this game and they are yours for the taking','\n', 'Goodbye','\n')
            stop = -1;
        }
        else {
            stop = stop;
        }
        console.log('------------------------------------------------------------------------------------')
    }
    
    else {
        const round = require('readline-sync');
        bank1 = bank1-bet1; 
        if (bank1 >0) {
        answer = ['I want to play another round', 'I want to go home with my money']; 
        let pitem = suit[Math.floor(Math.random() * suit.length)];
        let citem = suit[Math.floor(Math.random() * suit.length)];
        console.log(' Your card is:', player1,pitem,'\n','My card is:  ', computer,citem,'\n','\n');        
        message('lost');
        console.log('You lost, you now have ', bank1 ,' ILS, Would you like another round?');
        index = round.keyInSelect(answer, 'Please Select');
        stop = index;
            if (stop == 1) {                
                message('home');
                console.log('\n','It was a pleasure playing gainst you, you have won', bank1, 'ILS in this game and they are yours for the taking','\n', 'Goodbye','\n')
                stop = -1;
            }
            else {
                stop = stop;
            }
        }
        else {
        let pitem = suit[Math.floor(Math.random() * suit.length)];
        let citem = suit[Math.floor(Math.random() * suit.length)];
        console.log(' Your card is:', player1,pitem,'\n','My card is:  ', computer,citem,'\n','\n','You have', bank1, 'money left','\n','\n');        
        message('game over');
        stop = -1;
        }
        console.log('------------------------------------------------------------------------------------')
    }
    
    }
    counter +=1;
    }
    }



function forceName(n) {  //force a name with 2+ characters
let str = '';    
let len = n.length;
let counter = 1;
while (counter > 0) {
    
    if (len >= 2) {
        return n;
        counter = 0;
    }

    else  {
            const input = require('readline-sync');
            str = input.question("please enter a valid name:");
            len = str.length;
            n = str;
            counter +=1;
    } 
       
}
}

function forceDiffName(a,b) { //force a name for player2 different from name of player1
    counter =1;
    while (counter > 0) {
        let a1 = a.toLowerCase().split('').join('');
        let b1 = b.toLowerCase().split('').join('');            
        if (a1 != b1)
        { 
            return a;
            counter =0;
        }
        else {
        const input = require('readline-sync');
        let name = input.question('\n'+'Name is identical to the name of the first player, please enter a different name?');
        a = name;
        counter +=1
        }
    }
}

function message(n) {

    if (n == 'welcome') {

        console.log('\n',
    
    ' ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄','\n',     
    '▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',     
    '▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀       ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌','\n',    
    '▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌                    ▐░▌     ▐░▌       ▐░▌','\n',   
    '▐░▌   ▄   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░▌       ▐░▌','\n',    
    '▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌          ▐░▌     ▐░▌       ▐░▌','\n',     
    '▐░▌ ▐░▌░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀           ▐░▌     ▐░▌       ▐░▌','\n',    
    '▐░▌▐░▌ ▐░▌▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌                    ▐░▌     ▐░▌       ▐░▌','\n',     
    '▐░▌░▌   ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌','\n',     
    '▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌          ▐░▌     ▐░░░░░░░░░░░▌','\n',     
    ' ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀            ▀       ▀▀▀▀▀▀▀▀▀▀▀ ','\n',     
     
    ' ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄' ,'\n', 
    '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n', 
    '▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌','\n', 
    '▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌               ▐░▌       ▐░▌▐░▌               ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌','\n', 
    '▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌   ▄   ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌','\n', 
    '▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n', 
    '▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌ ▐░▌░▌ ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀','\n', 
    '▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌       ▐░▌▐░▌               ▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌     ▐░▌','\n',  
    '▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░█▄▄▄▄▄▄▄█░▌▐░▌               ▐░▌░▌   ▐░▐░▌▐░▌       ▐░▌▐░▌      ▐░▌','\n',  
    '▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌               ▐░░▌     ▐░░▌▐░▌       ▐░▌▐░▌       ▐░▌','\n', 
    ' ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀                 ▀▀       ▀▀  ▀         ▀  ▀         ▀','\n'
        );
        }

    else if (n == 'win'){

        console.log(

            '      ▄            ▄            ▄','\n',      
            ' ▄▄▄▄█░█▄▄▄▄  ▄▄▄▄█░█▄▄▄▄  ▄▄▄▄█░█▄▄▄▄','\n', 
            '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
            '▐░█▀▀█░█▀▀▀▀ ▐░█▀▀█░█▀▀▀▀ ▐░█▀▀█░█▀▀▀▀','\n', 
            '▐░█▄▄█░█▄▄▄▄ ▐░█▄▄█░█▄▄▄▄ ▐░█▄▄█░█▄▄▄▄ ','\n',
            '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
            ' ▀▀▀▀█░█▀▀█░▌ ▀▀▀▀█░█▀▀█░▌ ▀▀▀▀█░█▀▀█░▌','\n',
            ' ▄▄▄▄█░█▄▄█░▌ ▄▄▄▄█░█▄▄█░▌ ▄▄▄▄█░█▄▄█░▌','\n',
            '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
            ' ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ','\n',
            '      ▀            ▀            ▀','\n'
        );
    }

    else if (n == 'liar') {
        console.log('\n',
    '              ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄   ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄ ' ,'\n',              
    '             ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░░░░░░░░░░░▌'  ,'\n',              
    '             ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ','\n',            
    '             ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌         '   ,'\n',              
    '             ▐░▌ ▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄     '  ,'\n',            
    '             ▐░▌▐░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     '  ,'\n',           
    '             ▐░▌ ▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀       '  ,'\n',          
    '             ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌                 '  ,'\n',         
    '             ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄         ' ,'\n' ,        
    '             ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░▌      ▐░▌     ▐░░░░░░░░░░░▌         ' ,'\n' ,       
    '              ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀        ▀       ▀▀▀▀▀▀▀▀▀▀▀           ' ,'\n' ,      
                                                                                                               
    ' ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ' ,'\n',  
    '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌' ,'\n' , 
    '▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌' ,'\n'  ,
    '▐░▌       ▐░▌     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌' ,'\n'  ,
    '▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌       ▐░▌' ,'\n'  ,
    '▐░░░░░░░░░░░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌' ,'\n'  ,
    '▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░▌       ▐░▌' ,'\n'  ,
    '▐░▌               ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌' ,'\n'  ,
    '▐░▌           ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌' ,'\n'  ,
    '▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌' ,'\n'  ,
    ' ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀' ,'\n'  
    );  
    }

    else if ( n== 'bad') {

        console.log('\n',

    '▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ','\n',
    '▐░░▌      ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌','\n',
    '▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀ ','\n',
    '▐░▌▐░▌    ▐░▌▐░▌       ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌          ','\n',
    '▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌     ▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ','\n',
    '▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌     ▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌','\n',
    '▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌     ▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ','\n',
    '▐░▌    ▐░▌▐░▌▐░▌       ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ','\n',
    '▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ','\n',
    '▐░▌      ▐░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌','\n',
    ' ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ ','\n',
                                                                                       
    ' ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄ ','\n',
    '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌','\n', 
    '▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌','\n',
    '▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌','\n',
    '▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌       ▐░▌','\n',
    '▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌','\n',
    '▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀       ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░▌       ▐░▌','\n',
    '▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌            ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌','\n',
    '▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌           ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌','\n',
    '▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
    ' ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀            ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀','\n'
    );  
    }

    else if (n =='lost') {

        console.log('\n',
        '███▄█████▄▄','\n',    
        '▓▓▓█░░░░░░░██','\n',
        '▓▓▓█░░░░░░░██','\n',
        '▓▓▓█░░░░░░░██','\n',
        '▓▓▓█░░░░░░░██','\n',
        '███▀░░░███▀▀','\n',
        '   █░░░█','\n',
        '    █░░█','\n',
        '     ▀▀','\n'
        );
    }

    else if (n == 'game over') {
        console.log('\n', 
    ' ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ','\n',
    '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
    '▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░█▀▀▀▀▀▀▀█░▌ ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌','\n',
    '▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌               ▐░▌       ▐░▌  ▐░▌         ▐░▌  ▐░▌          ▐░▌       ▐░▌','\n',
    '▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌       ▐░▌   ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌','\n',
    '▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌       ▐░▌    ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌','\n',
    '▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌       ▐░▌     ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ ','\n',
    '▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌       ▐░▌      ▐░▌ ▐░▌      ▐░▌          ▐░▌     ▐░▌  ','\n',
    '▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░█▄▄▄▄▄▄▄█░▌       ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ','\n',
    '▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌▐░▌       ▐░▌','\n',
    ' ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ','\n'
    
    ) ;
    }

    else if ( n == 'even') {
        console.log('\n',

 '            ,ggg,                   gg                   ,ggg,','\n',
 '           d8P""8b                ,d88b,                d8""Y8b','\n',
 '           Y8b,__,,aadd88888bbaaa,888888,aaadd88888bbaa,,__,d8P','\n',
 '            "88888888888888888888I888888I88888888888888888888"','\n',
 '            /|\\ ""YY8888888PP"""" 888888 """"YY8888888PP"" /|\\ ','\n',
 '           / | \\                   WWWW                   / | \\ ','\n',
 '          /  |  \\                 ,dMMb,                 /  |  \\ ','\n',
 '         /   |   \\                I8888I                /   |   \\ ','\n',
 '        /    |    \\                Y88P                /    |    \\ ','\n',
 '       /     |     \\                YP                /     |     \\ ','\n',
 '      /      |      \\               88               /      |      \\ ','\n',
 '     /       |       \\             i88i             /       |       \\ ','\n',
 '    /        |        \\            8888            /        |        \\ ','\n',
 '"Y88888888888888888888888P"       i8888i       "Y88888888888888888888888P"','\n',
 '   ""Y888888888888888P""          888888          ""Y888888888888888P"" ', '\n',  
 '                                 I888888I','\n',
 '                                 Y888888P','\n',
 '                                  Y8888P ','\n',
 '                                   WWWW    ', '\n',
 '                                   dMMb  ','\n',  
 '                               _,ad8888ba,_','\n',
 '                    __,,aaaadd888888888888888bbaaaa,,__','\n',
 '                  d8888888888888888888888888888888888888b','\n' );

    }
    
    else if (n == 'home') {
        console.log('\n',
        '     ___I_','\n',
        '    /\\-_--\\','\n',
        '   /  \\_-__\\','\n',
        '   |[]| [] |','\n'
        );
    }

    else if (n == 'chicken') {
        console.log('\n',
    '    ||','\n',
    '    OO','\n',
    '   (\\/)','\n',
    '  /    \\','\n',
    ' ||    ||','\n',
    '  \\    /','\n',
    '   |/\\|','\n',
    '  /|  |\\','\n'
        );
    }

}


