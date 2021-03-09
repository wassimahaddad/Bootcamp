// Ex1------------------------------------------------

class Animals {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  getName() {
    return this.name;
  }
  getSound() {
    return this.sound;
  }
  print() {
    console.log(`Name: ${this.getName()}, Sound: ${this.getSound()}`);
  }
}

let a1 = new Animals("lion", "roar");
let a2 = new Animals("dog", "bark");
let a3 = new Animals("cat", "meow");

// Ex2 ------------------------------------------------------
