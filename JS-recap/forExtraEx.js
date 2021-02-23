//0=> 10
const printToTen = () => {
    //  //1        //2     //4
    for (let i = 0; i <= 10; i = i + 1) {
        //3
        console.log("i :", i)
    }
}

const printToTenRev = () => {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}

const printToN = (n) => {
    //  //1        //2     //4
    for (let i = 0; i <= n; i = i + 1) {
        //3
        console.log("i :", i)
    }
}

const printToTenIfRev = (n, isRev) => {
    if (isRev) {
        for (let i = n; i >= 0; i--) {
            console.log(i)
        }
    } else {
        for (let i = 0; i <= n; i++) {
            console.log(i)
        }
    }
}

const printEven = () => {
    for (let i = 0; i < 31; i = i + 3) {
        console.log(i)
    }
}

// const arr = [1, 5, 6, 7, -3, -200];
// console.log(arr)
// console.log(arr.unshift(20))
// console.log(arr.shift())
// console.log(arr)

const printArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const printArrDivByN = (arr, n) => {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] % n === 0) {
            console.log(arr[k])
        }
    }
}

const arrStringLength = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].length)
    }
}

const sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const countArr = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

const sumHalfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        sum += arr[i]
    }
    return sum
}
//[1, 5, 2, -3, 9,1]
//0,1,2,3,4,5,6
const sumOddArr = (arr) => {
    let sum = 0; //13
    for (let i = 0; i < arr.length; i++) { // i : 5
        console.log('[i] :', i)
        console.log('arr[i] :', arr[i])
        console.log('[sum]:', sum)
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const maxVal = (arr) => {
    if (arr.length === 0) {
        return 'Empty Array'
    }
    let max = arr.shift();//10
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// sumOddArr

// console.log(maxVal([-4,-8,-10,-1,-2]));
//   /  %

// let num =135; // num/10 =>remove last  num%10 ->return last number
// console.log(Math.floor(num/1000))
// console.log(parseInt(num/100)%10)
// console.log(parseInt(num/10)%10)
// console.log(num%10)

const help = (num) => {
    if (num === 0) return 1;

    let count = 0;

    for (; num > 0;) { //9234
        num = parseInt(num / 10);//0
        count++;//4
    }
    return count;
}


const maxDigits = (arr) => {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        //option2
        let count = help(arr[i])
        if (count > maxLength) {
            maxLength = count;
        }

        //option1
        // let number = arr[i], count = 0;
        // while (number> 0){
        //     number = number/10;
        //     count++;
        // }
        // for (; number > 0;) { //9234
        //     number = parseInt(number / 10);//0
        //     count++;//4
        // }
        // if (count > maxLength) {
        //     maxLength = count;
        // }
    }
    return maxLength;
}


const maxNumDigits = (arr) => {
    let maxLength = 0, maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        //option2
        let count = help(arr[i])
        if (count > maxLength) {
            maxLength = count;
            maxNum = arr[i];
        }

        //option1
        // let number = arr[i], count = 0;
        // while (number> 0){
        //     number = number/10;
        //     count++;
        // }
        // for (; number > 0;) { //9234
        //     number = parseInt(number / 10);//0
        //     count++;//4
        // }
        // if (count > maxLength) {
        //     maxLength = count;
        // }
    }
    return maxNum;
}

const sumNumber = (num) => {
    //0
    let sum = 0;
    while (num > 0) {
        sum += num % 10//4+3 +2 +1
        num = parseInt(num / 10);
    }
    return sum;
}

const maxSumDigit = (arr) => {
    let maxSum = 0, maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = sumNumber(arr[i]);
        if (sum > maxSum) {
            maxSum = sum;
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}


// console.log(maxSumDigit([23, 1456, 45, 1987, 125, 1980]))//5 ,16,9,25,8,26

// console.log(sumNumber(123));//6
// console.log(sumNumber(1004));//5
// console.log(sumNumber(499));//22

const isGoUp = (arr) => {
    //[1,4,7,9] =>T
    //[1,4,3,9] =>f

    for (let i = 0; i < arr.length - 1; i++) {
        console.log("i :", arr[i]);
        console.log("i+1 :", arr[i + 1]);
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isGoUp([1, 4, 7, 9]))

//
// const missingNum = (arr) => {
//     let globalSum = 10 / 2 * (10 + 1);
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return globalSum-sum;
// }
//
// console.log(missingNum([0,5,8,9,6,2,1,3,4,7]))


const dArr = [[1,2,3] //0,0  0,1 ,0,2
            ,[4,5,6], //1,0  1,1 ,1,2
            [7,8,9]]  //2,0, 2,1 2,2



const printDarr = (dArr)=>{
    let sumRightToLeft=0,sumLeftToRight=0;
    for(let i=0 ; i<dArr.length; i++){//1
        for(let k=0 ; k <dArr[i].length ;k++){
           if(i==k){
               sumLeftToRight+= dArr[i][k];
           }
           else if(i+k ===dArr.length-1 ){
               sumRightToLeft+= dArr[i][k];
           }
        }
    }
    console.log("sumLeftToRight :",sumLeftToRight)
    console.log("sumRightToLeft :",sumRightToLeft)

}

printDarr(dArr)
