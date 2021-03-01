// 1. Build your own filter method with the help of prototypes

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// 2. Build your own find method with the help of prototypes

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("no callback function provided");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

test = [1, 2, 3, 4];
const x = test.myFind();
console.log(x);
// Extra
// 3. Build your own reduce method with the help of prototypes

// this is a version of reduce with intitialValue=0

Array.prototype.myReduce = function (callback) {
  let accum = 0;
  for (let i = 0; i < this.length; i++) {
    accum = callback(accum, this[i], i, this);
  }
  return accum;
};
