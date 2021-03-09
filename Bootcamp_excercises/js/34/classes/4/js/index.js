class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  addToX(val) {
    this.x += val;
  }
  addToY(val) {
    this.y += val;
  }

  setX(val) {
    this.x = val;
  }
  setY(val) {
    this.y = val;
  }

  addPoint(instance) {
    this.x += instance.x;
    this.y += instance.y;
  }

  isSame(instance) {
    if (this.x === instance.x && this.y === instance.y) return true;
    return false;
  }

  print() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

const point1 = new Point(5, 10);
const point2 = new Point(59, 1);
const point3 = new Point(59, 1);
