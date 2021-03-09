class SortNumber {
  constructor() {
    this.numList = [];
  }

  addNum(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    this.numList.push(num);
    return true;
  }

  removeNum(num) {
    for (let i = 0; i < this.numList.length; i++) {
      if (this.numList[i] === num) {
        this.numList.splice(i, 1);
        return false;
      } else {
        return true;
      }
    }
  }

  getAll() {
    this.numList.sort(function (a, b) {
      return a - b;
    });
  }

  print() {
    console.log(this.list);
  }

  share(instance) {
    let count = 0;
    this.numList.forEach((item) =>
      instance.numList.includes(item) ? count++ : count
    );
    return count;
  }

  union(instance) {
    instance.numList.forEach((item) =>
      this.numList.includes(item) ? null : this.numList.push(item)
    );
    this.numList.sort(function (a, b) {
      return a - b;
    });
    return this.numList;
  }
}

let primes = new SortNumber();
primes.addNum(3);
primes.addNum(13);
primes.addNum(33);
primes.addNum(73);

let primes2 = new SortNumber();
primes2.addNum(2);
primes2.addNum(26);
primes2.addNum(31);
primes2.addNum(73);
