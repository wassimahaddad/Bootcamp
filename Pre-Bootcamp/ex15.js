let arr1 = ['I','Can'];
let arr2 = ['Join','Two','Arrays'];
console.log('\n');
console.log('The first array is:','\n',arr1);
console.log('The second array is:','\n',arr2, '\n');
console.log('The joined array is:','\n',arrJoin(arr1,arr2),'\n');

function arrJoin(a,b) {
    return a.concat(b);   
}

