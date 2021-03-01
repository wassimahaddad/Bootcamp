const populations = [10, 1441, 332, 83];

const percentageOfWorld1 = (population) => {
  return (population / 7900) * 100;
};

// const populationPercentages = (arr) => {
//   const percentages = [];
//   for (let i = 0; i < arr.length; i++) {
//     const percent = percentageOfWorld1(arr[i]);
//     percentages.push(percent);
//   }
//   return percentages;
// };
// console.log(populationPercentages(populations));

//
// --------------------- 1 -------------------------
//

const populationPercentages = (arr) => {
  const percentages = [];
  let i = 0;
  while (i < arr.length) {
    const percent = percentageOfWorld1(arr[i]);
    percentages.push(percent);
    i++;
  }
  return percentages;
};
console.log(populationPercentages(populations));

//
// --------------------- 2 -------------------------
//

// while loop is more readable, for loop is cleaner
