// 1. What is wrong with the code? explain in your own words

// getStrength is a method of the "hero" object and cannot be invoked independantly outside the object

// const hero = {
//     health: 5,
//     power: 68,
//     getStrength: function(){
//     if (this.health <= 5){
//     return this.power - 10;
//     } else return this.power;
//     }
//    }
//    function whoIsStronger(getStrength){
//     const myStrength = 82;
//     if (getStrength() < myStrength){
//     return "I am stronger";
//     } else return "You are stronger";
//    }
//    whoIsStronger(hero.getStrength);

// 2. Fix the code so that invoking the whoIsStronger function will print "I am stronger".
//
// note: you cannot change the 'hero' or the whoIsStronger function.

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  //use it as a mthod of the hero object
  if (hero.getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength);
