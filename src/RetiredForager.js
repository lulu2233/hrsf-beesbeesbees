//Create a RetiredForagerBee class
var RetiredForagerBee = function() {
  //call the foragerBee superclass to inherit all the properties from foragerBee
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  //now retired foragerBee can't fly
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);




RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

//set a gamble method that allows the bee to add a treasure to it's treasureChest
RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
}

//set the constructor point to itself
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
