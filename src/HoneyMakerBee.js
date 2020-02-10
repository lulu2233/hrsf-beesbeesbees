//create the honeyMakerBee
var HoneyMakerBee = function() {
  //inherit properties from bee
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  //set a honeyPot property
  this.honeyPot = 0;
};
//inherit the method from Grub
HoneyMakerBee.prototype = Object.create(Grub.prototype);

//create a method makeHoney that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  console.log(this.honeyPot);
  this.honeyPot++;
}

//create a method give honey that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot <= 0) {
    console.log('Opps! There isn\'t any honey');
    return;
  }
  this.honeyPot--;
}

//set honeyMakerBee's constructor that point back to constructor itself
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

