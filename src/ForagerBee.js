var ForagerBee = function() {
  //inherit all the properties from class bee
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  //set a new property canFly
  this.canFly = true;
  //set a new property treasureChest
  this.treasureChest = [];
};

//inherit all the methods from grub
ForagerBee.prototype = Object.create(Grub.prototype);

//create a forage method that allows the foragerBee to add a treasure to 
//it's treasure chest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

//set the constructor point to itself
ForagerBee.prototype.constructor = ForagerBee;

