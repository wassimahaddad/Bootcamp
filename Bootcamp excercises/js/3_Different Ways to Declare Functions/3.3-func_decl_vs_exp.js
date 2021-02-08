// function declaration

function percentageOfWorld1(pop) {
  return (pop / 7900) * 100;
}
israel = percentageOfWorld1(9);
us = percentageOfWorld1(330);
canada = percentageOfWorld1(38);
console.log(israel, us, canada);

// function expression

const percentageOfWorld2 = (pop) => (pop / 7900) * 100;

israel = percentageOfWorld2(9);
us = percentageOfWorld2(330);
canada = percentageOfWorld2(38);
console.log(israel, us, canada);
