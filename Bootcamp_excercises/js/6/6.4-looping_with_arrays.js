let population = [4, 300, 50, 10];
function populationPercentage(arr) {
  let percentages = [];
  let c;
  for (c = 0; c < 4; c++) {
    percentages.push((arr[c] / 7900).toFixed(4));
  }
  return percentages;
}
