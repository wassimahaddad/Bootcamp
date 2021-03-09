class Room {
  constructor(roomId, level, amount) {
    this.roomId = roomId;
    this.level = level;
    this.amount = amount;
    this.isFree = true;
    this.occupied = [];
  }

  checkIn(num) {
    if (num > this.amount) {
      return false;
    } else {
      if (this.isFree === false) {
        return "room is ocuupied";
      }
    }
    this.isFree = false;
    return `${num} persons checked in to room ${this.roomId}`;
  }

  print() {
    let status = "";
    if (this.isFree === true) {
      status = "available";
    } else {
      status = " not available";
    }
    console.log(
      `Room: ${this.roomId} is on level ${this.level} with capacity of up to ${this.amount} people, is currently ${status}`
    );
  }
}

const r101 = new Room(101, 1, 6);
const r102 = new Room(102, 1, 6);
const r103 = new Room(103, 1, 6);
const r104 = new Room(104, 1, 6);
