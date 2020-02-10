//create Bee class
var Bee = function() {
  //call grub to inherit superclass's properties
  Grub.call(this);
  //what's the this? How is call works?
  console.log(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
//set bee's prototype
Bee.prototype = Object.create(Grub.prototype);

//set bee's constructor
Bee.prototype.constructor = Bee;

