var Animal = require('./animal');
var Creature = require('./creature');

var Dog = new Animal();

var tree = new Creature();
console.log(tree.syntax);

console.log(Dog.syntax);

tree.syntax = 'tree'
console.log(tree.syntax);
