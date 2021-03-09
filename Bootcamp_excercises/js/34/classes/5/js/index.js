class PointWorld {
  constructor() {
    this.points = [];
  }

  sortPoints(arr) {
    arr.sort((a, b) => a.y - b.y);
    this.points = arr;
    return this.points;
  }

  removeDuplicates() {
    let a = [];
    for (let i = 0; i < this.points.length; i++) {
      if (
        JSON.stringify(this.points[i]) != JSON.stringify(this.points[i + 1])
      ) {
        a.push(this.points[i]);
      }
    }
    return a;
  }

  xValues() {
    let sum = 0;
    this.points.forEach((a) => (sum = sum + parseInt(Object.values(a)[0])));
    return sum;
  }

  includesPoint(point) {
    let found = 0;
    for (let i = 0; i < this.points.length; i++) {
      if (JSON.stringify(this.points[i]) === JSON.stringify(point)) {
        found = 1;
      }
    }
    if (found === 1) return point;
    return false;
  }
}
const points1 = new PointWorld();
points1.sortPoints([
  { x: 2, y: 24 },
  { x: 109, y: 13 },
  { x: 109, y: 13 },
  { x: 44, y: 5 },
]);

const points2 = new PointWorld();
points2.sortPoints([{ x: 2, y: 24 }]);
