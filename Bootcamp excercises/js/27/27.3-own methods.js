// 1. Build your own filter method with the help of prototypes

Array.prototype.myFilter = function (x) {
  Array.forEach((item) => (this.includes(x) ? item : null));
};

const test = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// 2. Build your own find method with the help of prototypes
Array.prototype.myFind = function (x) {
  Array.forEach((item) => (item === x ? item : null));
};
// Extra
// 3. Build your own reduce method with the help of
// prototypes
