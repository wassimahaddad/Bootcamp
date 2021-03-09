class cars {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  getBrand() {
    return this.brand;
  }

  getSpeed() {
    return this.speed;
  }

  print() {
    console.log(`Brand: ${this.getBrand()}, Speed: ${this.getSpeed()}`);
  }

  setSpeed(value) {
    this.speed = value;
  }
}

let car1 = new cars("BMW", 200);
let car2 = new cars("Mercedes", 210);
let car3 = new cars("Jaguar", 220);
let car4 = new cars("Lexus", 190);

const carCollection = [car1, car2, car3, car4];
carCollection.reduce((a, b) => (a.getSpeed() > b.getSpeed() ? a : b)).print();

console.log(
  carCollection.sort(function (a, b) {
    return a.getSpeed() - b.getSpeed();
  })
);
