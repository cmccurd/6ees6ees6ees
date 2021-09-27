class HoneyMakerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney = function () {
    this.honeyPot += 1;
  }

  giveHoney = function () {
    this.honeyPot -= 1;
  }
};
