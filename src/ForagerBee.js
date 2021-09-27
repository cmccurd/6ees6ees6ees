class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage = function () {

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    var treasure = ['gold', 'diamond', 'amulet', 'ring', 'excalibur', 'holy grail'];
    this.treasureChest.push(treasure[getRandomIntInclusive(0, 5)]);
  };
};
