class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  gamble = function () {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    var treasure = ['gold', 'diamond', 'amulet', 'ring', 'excalibur', 'holy grail'];
    this.treasureChest.push(treasure[getRandomIntInclusive(0, 5)]);
  }
  forage = function () {
    return 'I am too old, let me play cards instead';
  }
};
